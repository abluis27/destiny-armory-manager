import * as z from "zod";
import { DisplayPropertiesSchema } from "./zodSchemasForDatabase/commonSchemas";
import { StatsSchema } from "./zodSchemasForDatabase/weaponCoreInfo";
import { WeaponPerkInfoSchema } from "./zodSchemasForDatabase/weaponPerkInfo";
import { WeaponDamageTypeSchema } from "./zodSchemasForDatabase/weaponDamageType";
import { WeaponBasicDataSchema, WeaponBasicDataWithIconSchema } from "./basicTypes";

export const DestinyWeaponDataSchema = z.object({
    hash: z.number(),
    "displayProperties": DisplayPropertiesSchema,
    "iconWatermark": z.string(),
    "screenshot": z.string(),
    "flavorText": z.string(),
    "stats": StatsSchema,
    "perkPool": z.array(z.array(WeaponPerkInfoSchema).optional()),
    "damageType": WeaponDamageTypeSchema,
    "ammoType": WeaponBasicDataWithIconSchema,
    "rarity": WeaponBasicDataSchema
});

export type DestinyWeaponData = z.infer<typeof DestinyWeaponDataSchema>;



