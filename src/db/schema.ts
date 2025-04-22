import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

const WEAPON_TABLE = "DestinyInventoryItemDefinitionWeapon"

export const destinyInventoryDefinitionWeapon = sqliteTable(WEAPON_TABLE, {
  id: int().primaryKey(),
  json: text("json").notNull(),
});
