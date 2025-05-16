import { WeaponStatsInfo } from "@/types/zodSchemasForDatabase/weaponStatsInfo";

export interface WeaponStatsProps {
    weaponStatsInfo: WeaponStatsInfo
}

export interface StatBarProps {
    key: number
    statName: string
    statValue: number
}