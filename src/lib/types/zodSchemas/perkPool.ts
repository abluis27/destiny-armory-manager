import * as z from "zod";


export const ReusablePlugItemSchema = z.object({
    "plugItemHash": z.number(),
});
export type ReusablePlugItem = z.infer<typeof ReusablePlugItemSchema>;

export const PerkPoolSchema = z.object({
    "reusablePlugItems": z.array(ReusablePlugItemSchema),
    "hash": z.number(),
});
export type PerkPool = z.infer<typeof PerkPoolSchema>;
