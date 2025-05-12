import { WeaponStats } from "@/app/types/zodSchemasForDatabase/weaponCoreInfo";
import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo";

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