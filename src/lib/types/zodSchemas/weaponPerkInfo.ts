import * as z from "zod";
import { DisplayPropertiesSchema } from "./commonSchemas";

export const WeaponPerkInfoSchema = z.object({
    "displayProperties": DisplayPropertiesSchema,
    "itemTypeAndTierDisplayName": z.string(),
    "itemTypeDisplayName": z.string(),
});

export type WeaponPerkInfo = z.infer<typeof WeaponPerkInfoSchema>;
