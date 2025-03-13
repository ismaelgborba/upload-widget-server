import { env } from '@/env'
import type { Config } from 'drizzle-kit'

export default {
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  dialect: 'postgresql',
  schema: 'src/infra/database/schemas/*',
  out: 'src/infra/database/migrations',
} satisfies Config
