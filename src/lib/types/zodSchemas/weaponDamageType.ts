import * as z from "zod";
import { DisplayPropertiesSchema } from "./commonSchemas";


export const WeaponDamageTypeSchema = z.object({
    "displayProperties": DisplayPropertiesSchema,
    "enumValue": z.number(),
    "hash": z.number(),
    "transparentIconPath": z.string(),
});
export type WeaponDamageType = z.infer<typeof WeaponDamageTypeSchema>;
