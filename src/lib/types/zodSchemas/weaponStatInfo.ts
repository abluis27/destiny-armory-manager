import * as z from "zod";


export const DisplayPropertiesSchema = z.object({
    "description": z.string(),
    "name": z.string(),
});

export type DisplayProperties = z.infer<typeof DisplayPropertiesSchema>;

export const WeaponStatInfoSchema = z.object({
    "displayProperties": DisplayPropertiesSchema,
    "hash": z.number(),
    "statCategory": z.number(),
});

export type WeaponStatInfo = z.infer<typeof WeaponStatInfoSchema>;
