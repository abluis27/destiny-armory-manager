import { fetchWeaponAmmoTypeById, fetchWeaponCoreInfoById, fetchWeaponCoreInfoByName, fetchWeaponDamageTypeById, fetchWeaponRarityById, fetchWeaponStatInfoById, fetchWeaponTypeById } from "./dataFetching";
import { WeaponCoreInfo, WeaponCoreInfoWithoutIdSchema } from "./types/zodSchemas/weaponCoreInfo";
import { WeaponDamageTypeSchema } from "./types/zodSchemas/weaponDamageType";
import { WeaponPreviewInfo } from "./types/zodSchemas/weaponPreviewInfo";

export const getWeaponsCoreInfoByName = async (weaponName: string): Promise<WeaponCoreInfo[]> => {
    const resultsFetching = await fetchWeaponCoreInfoByName(weaponName)
    const weaponsCoreInfo = resultsFetching.map(weapon =>
        parseDestinyDefitionToWeaponCoreInfo(weapon)
    )
    return weaponsCoreInfo
}

export const getWeaponCoreInfoById = async (weaponId: number): Promise<WeaponCoreInfo> => {
    const resultFetching = await fetchWeaponCoreInfoById(weaponId)
    return parseDestinyDefitionToWeaponCoreInfo(resultFetching)
}

const parseDestinyDefitionToWeaponCoreInfo = (destinyDefinition: DestinyDefinition): WeaponCoreInfo => {
    const weaponInfo = JSON.parse(destinyDefinition.json)
    const weaponInfoParsed = WeaponCoreInfoWithoutIdSchema.parse(weaponInfo)
    return {
        hash: destinyDefinition.id,
        ...weaponInfoParsed
    }
}

export const getWeaponsPreviewInfoByName = async (weaponName: string): Promise<WeaponPreviewInfo[]> => {
    const weaponsCoreInfo = await getWeaponsCoreInfoByName(weaponName)
    const weaponsPreviewInfo = await Promise.all(
        weaponsCoreInfo.map(async (weapon) => {
            const weaponType = await getWeaponTypeById(weapon.itemCategoryHashes)
            return {
                hash: weapon.hash,
                displayProperties: weapon.displayProperties,
                weaponType: weaponType
            }
        })
    )
    return weaponsPreviewInfo
}

export const getWeaponTypeById = async (weaponCategories: number[]): Promise<WeaponBasicData> => {
    const weaponTypeId = weaponCategories.find(category => category >= 5)
    if (weaponTypeId !== undefined) {
        const weaponType = await fetchWeaponTypeById(weaponTypeId);
        return weaponType;
    }
    return {
        id: 0,
        name: "Unknown"
    };
}

export const getWeaponAmmoTypeById = async (ammoTypeId: number): Promise<WeaponBasicDataWithIcon> => {
    const resultFetching = await fetchWeaponAmmoTypeById(ammoTypeId)
    return resultFetching
}

// Element
export const getWeaponDamageTypeById = async (damageTypeId: number) => {
    const resultFetching = await fetchWeaponDamageTypeById(damageTypeId)
    const weaponDamageType = JSON.parse(resultFetching.json)
    return WeaponDamageTypeSchema.parse(weaponDamageType)
}

// Rarity
export const getWeaponRarityById = async (rarityId: number) => {
    const resultFetching = await fetchWeaponRarityById(rarityId)
    return resultFetching
}

// TODO: Add to the database the DestinyStatGroupDefinition
// And to WeaponCoreInfo statGroupHash en stats
// Main idea: build a functiion that we pass the stats.stast and the statGroupHash
// And we get the stats with the correct names and values.


// Sockets
// Single perk info