import { getAmmoTypeDatabase, getWeaponDatabase, getWeaponTypeDatabase } from "./databaseQueries";
import { WeaponInfoSchema } from "./types/databaseResponsesTypes/destinyInventoryItemDefinitionDeclarations";


export const getWeaponBasicInfoByName = async (weaponName: string) => {
    const resultsQuery = await getWeaponDatabase(weaponName)
    const weaponsBasicInfo = resultsQuery.map(weapon => {
        const weaponInfo = JSON.parse(weapon.json)
        const weaponInfoParsed = WeaponInfoSchema.parse(weaponInfo)
        return {
            weaponHash: weapon.id,
            ...weaponInfoParsed
        }
    })
    return weaponsBasicInfo
}

export const getWeaponSimpleInfoByName = async (weaponsName: string) => {
    const weaponsBasicInfo = await getWeaponBasicInfoByName(weaponsName)
    const weaponsSimpleInfo = await Promise.all(
        weaponsBasicInfo.map( async (weapon) => {
            const weaponType = await getWeaponTypeName(weapon.itemCategoryHashes)
            return {
                weaponHash: weapon.weaponHash,
                displayProperties: weapon.displayProperties,
                iconWatermark: weapon.iconWatermark,
                weaponType: weaponType,
            }
        })
    )
    return weaponsSimpleInfo
}

export const getWeaponTypeName = async (weaponCategories: number[]) => {
    const weaponTypeId = weaponCategories.find(category => category >= 5);
    if (weaponTypeId === undefined) {
        throw new Error("No valid weapon type found in the provided categories.");
    }
    const weaponName = await getWeaponTypeDatabase(weaponTypeId)
    return weaponName[0]
}

export const getAmmoType = async (ammoTypeId: number) => {
    const resultsQuery = await getAmmoTypeDatabase(ammoTypeId)
    return resultsQuery[0]
} 