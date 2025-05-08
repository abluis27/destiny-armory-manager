import * as z from "zod";
import { DisplayPropertiesSchema } from "./zodSchemasForDatabase/commonSchemas";
import { StatsSchema } from "./zodSchemasForDatabase/weaponCoreInfo";
import { WeaponPerkInfoSchema } from "./zodSchemasForDatabase/weaponPerkInfo";
import { WeaponDamageTypeSchema } from "./zodSchemasForDatabase/weaponDamageType";
import { WeaponBasicDataSchema } from "./basicTypes";

export const PerkPoolSchema = z.array(z.array(WeaponPerkInfoSchema).optional());

export const DestinyWeaponDataSchema = z.object({
  hash: z.number(),
  displayProperties: DisplayPropertiesSchema,
  iconWatermark: z.string(),
  screenshot: z.string(),
  flavorText: z.string(),
  stats: StatsSchema,
  perkPool: PerkPoolSchema,
  damageType: WeaponDamageTypeSchema,
  ammoType: WeaponBasicDataSchema,
  rarity: WeaponBasicDataSchema,
  weaponType: WeaponBasicDataSchema,
});

// Types
export type DestinyWeaponData = z.infer<typeof DestinyWeaponDataSchema>;
export type PerkPool = z.infer<typeof PerkPoolSchema>;




