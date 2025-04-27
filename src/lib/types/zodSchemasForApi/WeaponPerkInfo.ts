import * as z from "zod";

export const DisplayPropertiesSchema = z.object({
    "description": z.string(),
    "name": z.string(),
    "icon": z.string().optional(),
});

export type DisplayProperties = z.infer<typeof DisplayPropertiesSchema>;

export const ResponseSchema = z.object({
    "displayProperties": DisplayPropertiesSchema,
    "hash": z.number(),
});
export type Response = z.infer<typeof ResponseSchema>;

export const WeaponPerkInfoFromApiSchema = z.object({
    "Response": ResponseSchema,
});
export type WeaponPerkInfoFromApi = z.infer<typeof WeaponPerkInfoFromApiSchema>;
