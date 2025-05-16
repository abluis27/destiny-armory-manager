import { WeaponStatsDefinition } from "@/types/zodSchemasForDatabase/weaponCoreInfo";
import { WeaponPerkInfo } from "@/types/zodSchemasForDatabase/weaponPerkInfo";
import { BOW_BASIC_STATS, BOW_MAGAZINE_STATS, SWORD_BASIC_STATS, SWORD_MAGAZINE_STATS, DEFAULT_BASIC_STATS, FUSION_WEAPONS_MAGAZINE_STATS, EXPLOSIVE_WEAPONS_BASIC_STATS, DEFAULT_MAGAZINE_STATS, GLAIVE_BASIC_STATS } from "./weaponStatSchemas";
import { WEAPON_BASIC_STATS, WEAPON_MAGAZINE_STATS } from "./weaponStatDetails";
import { WeaponBasicData } from "@/types/basicTypes";
import { WeaponStatsInfo } from "@/types/zodSchemasForDatabase/weaponStatsInfo";

export const getWeaponStatsInfo = (
    weaponType: WeaponBasicData,
    intrinsicPerk: WeaponPerkInfo,
    weaponStatValues: WeaponStatsDefinition
): WeaponStatsInfo => {
    const basicStats = getWeaponBasicStats(weaponType,intrinsicPerk,weaponStatValues)
    const magazineStats = getWeaponMagazineStats(weaponType, weaponStatValues)
    return {
        basicStats,
        magazineStats
    }
}

const getWeaponBasicStats = (
    weaponType: WeaponBasicData,
    intrinsicPerk: WeaponPerkInfo,
    weaponStatValues: WeaponStatsDefinition
) => {
    const basicStatsLayout = getWeaponBasicStatsLayout(weaponType.name, intrinsicPerk)
    const basicStats = basicStatsLayout.map(statHash => {
        const statName = WEAPON_BASIC_STATS[statHash]
        const statValue = weaponStatValues.stats[statHash].value
        return {
            hash: statHash,
            name: statName,
            value: statValue
        }
    })
    return basicStats
}

const getWeaponMagazineStats = (
    weaponType: WeaponBasicData,
    weaponStatValues: WeaponStatsDefinition
) => {
    const basicMagazineLayout = getWeaponMagazineStatsLayout(weaponType.name)
    const magazineStats = basicMagazineLayout.map(statHash => {
        const statName = WEAPON_MAGAZINE_STATS[statHash]
        const statValue = weaponStatValues.stats[statHash].value
        return {
            hash: statHash,
            name: statName,
            value: statValue
        }
    })
    return magazineStats
}


const getWeaponBasicStatsLayout = (
    weaponType: string,
    intrinsicPerk: WeaponPerkInfo
) => {
    const normalizedWeaponType = weaponType.toLowerCase()
    const normalizedIntrinsicPerkName = intrinsicPerk.displayProperties.name.toLowerCase()

    if(normalizedWeaponType === "bow") {
        return BOW_BASIC_STATS
    }
    if(normalizedWeaponType === "sword") {
        return SWORD_BASIC_STATS
    }
    if(normalizedWeaponType.includes("launcher") 
        || normalizedIntrinsicPerkName.includes("rocket")) {
        return EXPLOSIVE_WEAPONS_BASIC_STATS
    }
    if(normalizedWeaponType === "glaive") {
        return GLAIVE_BASIC_STATS
    }
    return DEFAULT_BASIC_STATS
}

const getWeaponMagazineStatsLayout = (weaponType: string) => {
    const normalizedWeaponType = weaponType.toLowerCase()

    if(normalizedWeaponType === "bow") {
        return BOW_MAGAZINE_STATS
    }
    if(normalizedWeaponType === "sword") {
        return SWORD_MAGAZINE_STATS
    }
    if(normalizedWeaponType.includes("fusion")) {
        return FUSION_WEAPONS_MAGAZINE_STATS
    }
    return DEFAULT_MAGAZINE_STATS
}