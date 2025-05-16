import { z } from "zod"

export const WeaponStatInfoSchema = z.object({
  hash: z.number(),
  name: z.string(),
  value: z.number()
})

export const WeaponStatsInfoSchema = z.object({
  basicStats: z.array(WeaponStatInfoSchema),
  magazineStats: z.array(WeaponStatInfoSchema)
})

// Optional: Types inferred from the schemas (if not already declared)
export type WeaponStatInfo = z.infer<typeof WeaponStatInfoSchema>
export type WeaponStatsInfo = z.infer<typeof WeaponStatsInfoSchema>