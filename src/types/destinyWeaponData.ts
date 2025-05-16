import * as z from "zod";
import { DisplayPropertiesSchema } from "./zodSchemasForDatabase/commonSchemas";
import { WeaponPerkInfoSchema } from "./zodSchemasForDatabase/weaponPerkInfo";
import { WeaponBasicDataSchema } from "./basicTypes";
import { WeaponStatsInfoSchema } from "./zodSchemasForDatabase/weaponStatsInfo";

export const PerkPoolSchema = z.array(z.array(WeaponPerkInfoSchema).optional());

export const DestinyWeaponDataSchema = z.object({
  hash: z.number(),
  displayProperties: DisplayPropertiesSchema,
  iconWatermark: z.string(),
  screenshot: z.string(),
  flavorText: z.string(),
  stats: WeaponStatsInfoSchema,
  perkPool: PerkPoolSchema,
  damageType: WeaponBasicDataSchema,
  ammoType: WeaponBasicDataSchema,
  rarity: WeaponBasicDataSchema,
  weaponType: WeaponBasicDataSchema,
});

// Types
export type DestinyWeaponData = z.infer<typeof DestinyWeaponDataSchema>;
export type PerkPool = z.infer<typeof PerkPoolSchema>;




