import { z } from "zod";

// DestinyDefinition schema
export const DestinyDefinitionSchema = z.object({
    id: z.number(),
    json: z.string(),
});

// WeaponBasicData schema
export const WeaponBasicDataSchema = z.object({
    id: z.number(),
    name: z.string(),
});

// WeaponBasicDataWithIcon schema
export const WeaponBasicDataWithIconSchema = WeaponBasicDataSchema.extend({
    icon: z.string(),
});

// Export the types based on the schemas
export type DestinyDefinition = z.infer<typeof DestinyDefinitionSchema>;
export type WeaponBasicData = z.infer<typeof WeaponBasicDataSchema>;
export type WeaponBasicDataWithIcon = z.infer<typeof WeaponBasicDataWithIconSchema>;
