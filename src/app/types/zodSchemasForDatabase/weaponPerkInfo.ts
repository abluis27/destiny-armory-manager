import * as z from "zod";
import { DisplayPropertiesSchema } from "./commonSchemas";

export const WeaponPerkInfoSchema = z.object({
    "displayProperties": DisplayPropertiesSchema,
    "itemTypeDisplayName": z.string(),
    "hash": z.number(),
});

export type WeaponPerkInfo = z.infer<typeof WeaponPerkInfoSchema>;
