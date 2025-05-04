import * as z from "zod";


export const ReusablePlugItemSchema = z.object({
    "plugItemHash": z.number(),
});
export type ReusablePlugItem = z.infer<typeof ReusablePlugItemSchema>;

export const WeaponPerkPoolSchema = z.object({
    "reusablePlugItems": z.array(ReusablePlugItemSchema),
    "hash": z.number(),
});
export type WeaponPerkPool = z.infer<typeof WeaponPerkPoolSchema>;
