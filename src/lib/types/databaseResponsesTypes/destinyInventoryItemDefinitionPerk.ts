import * as z from "zod";


export const DisplayPropertiesSchema = z.object({
    "description": z.string(),
    "icon": z.string(),
    "name": z.string(),
});
export type DisplayProperties = z.infer<typeof DisplayPropertiesSchema>;

export const WeaponPerkInfoSchema = z.object({
    "displayProperties": DisplayPropertiesSchema,
    "itemTypeAndTierDisplayName": z.string(),
    "itemTypeDisplayName": z.string(),
});

export type WeaponPerkInfo = z.infer<typeof WeaponPerkInfoSchema>;
