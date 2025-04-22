import { BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3';

export const db: BetterSQLite3Database = drizzle(process.env.DB_FILE_NAME!);

