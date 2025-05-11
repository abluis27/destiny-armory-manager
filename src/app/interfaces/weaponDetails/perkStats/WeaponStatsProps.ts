import { WeaponStats } from "@/app/types/zodSchemasForDatabase/weaponCoreInfo";

export interface WeaponStatsProps {
    weaponStatValues: WeaponStats
    weaponType: string
    ammoType: string
}