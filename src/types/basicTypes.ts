import { z } from "zod";
import { WeaponPerkInfo } from "./zodSchemasForDatabase/weaponPerkInfo";
import { WeaponDamageType } from "./zodSchemasForDatabase/weaponDamageType";
import { DisplayProperties } from "./zodSchemasForDatabase/commonSchemas";

// DestinyDefinition schema
export const DestinyDefinitionSchema = z.object({
    id: z.number(),
    json: z.string(),
});

// WeaponBasicData schema
export const WeaponBasicDataSchema = z.object({
    id: z.number(),
    name: z.string(),
    icon: z.string().optional()
});

// Export the types based on the schemas
export type DestinyDefinition = z.infer<typeof DestinyDefinitionSchema>;
export type WeaponBasicData = z.infer<typeof WeaponBasicDataSchema>;

export type WeaponStatLayout = {
    basicStats: number[];
    magazineStats: number[];
};

export type WeaponBasicInfo = {
    hash: number
    flavorText: string
    screenshot: string
    damageType: WeaponBasicData
    ammoType: WeaponBasicData
    intrinsictPerk: WeaponPerkInfo
}

export type SavedRoll = {
    id: string
    weaponHash: number
    displayProperties: DisplayProperties
    weaponType: WeaponBasicData
    damageType: WeaponBasicData
    savedPerks: WeaponPerkInfo[]
    ammoType: WeaponBasicData
    iconWatermark: string
}

export type WishListFilterKey = "ammoType"

export type WeaponWishList = Record<string, SavedRoll[]>;