import * as z from "zod";
import { DisplayPropertiesSchema } from "./commonSchemas";

export const WeaponTypeSchema = z.object({
    "id": z.number(),
    "name": z.string(),
});
export type WeaponType = z.infer<typeof WeaponTypeSchema>;

export const WeaponPreviewInfoSchema = z.object({
    "hash": z.number(),
    "displayProperties": DisplayPropertiesSchema,
    "weaponType": WeaponTypeSchema,
});
export type WeaponPreviewInfo = z.infer<typeof WeaponPreviewInfoSchema>;
