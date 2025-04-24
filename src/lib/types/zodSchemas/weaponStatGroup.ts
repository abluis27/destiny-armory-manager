import * as z from "zod";


export const ScaledStatSchema = z.object({
    "statHash": z.number(),
});
export type ScaledStat = z.infer<typeof ScaledStatSchema>;

export const WeponStatGroupSchema = z.object({
    "scaledStats": z.array(ScaledStatSchema),
});
export type WeponStatGroup = z.infer<typeof WeponStatGroupSchema>;
