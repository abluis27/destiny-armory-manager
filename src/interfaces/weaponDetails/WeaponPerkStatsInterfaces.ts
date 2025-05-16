import { WeaponStats } from "@/types/zodSchemasForDatabase/weaponCoreInfo";
import { WeaponPerkInfo } from "@/types/zodSchemasForDatabase/weaponPerkInfo";

export interface WeaponStatsProps {
    weaponStatValues: WeaponStats
    weaponType: string
    intrinsicPerk: WeaponPerkInfo
}

export interface StatBarProps {
    key: number
    statName: string
    statValue: number
}