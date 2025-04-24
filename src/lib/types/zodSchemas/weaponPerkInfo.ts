import * as z from "zod";
import { DisplayPropertiesSchema } from "./commonSchemas";

export const WeaponPerkInfoSchema = z.object({
    "displayProperties": DisplayPropertiesSchema,
    "hash": z.number(),
});

export type WeaponPerkInfo = z.infer<typeof WeaponPerkInfoSchema>;
