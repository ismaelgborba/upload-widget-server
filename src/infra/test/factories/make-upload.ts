import { db } from '@/infra/database'
import { schema } from '@/infra/database/schemas'
import { fakerPT_BR as faker } from '@faker-js/faker'
import type { InferInsertModel } from 'drizzle-orm'

export async function makeUpload(
  overrides?: Partial<InferInsertModel<typeof schema.uploads>>
) {
  const fileName = faker.system.fileName()

  const result = await db
    .insert(schema.uploads)
    .values({
      name: fileName,
      remoteKey: `images/${fileName}`,
      remoteUrl: `https://example.com/images/${fileName}`,
      ...overrides,
    })
    .returning()

  return result[0]
}
