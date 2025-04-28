import { fetchWeaponAmmoTypeById, fetchWeaponDamageTypeById, fetchWeaponRarityById, fetchWeaponStatInfoById, fetchWeaponTypeById } from "../dataFetching";
import { WeaponDamageType, WeaponDamageTypeSchema } from "../types/zodSchemasForDatabase/weaponDamageType";
import { WeaponStatInfo, WeaponStatInfoSchema } from "../types/zodSchemasForDatabase/weaponStatInfo";

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

export const getWeaponDamageTypeById = async (damageTypeId: number): Promise<WeaponDamageType> => {
    const resultFetching = await fetchWeaponDamageTypeById(damageTypeId)
    const weaponDamageType = JSON.parse(resultFetching.json)
    return WeaponDamageTypeSchema.parse(weaponDamageType)
}

export const getWeaponRarityById = async (rarityId: number): Promise<WeaponBasicData> => {
    const resultFetching = await fetchWeaponRarityById(rarityId)
    return resultFetching
}

export const getWeaponStatInfoById = async (statId: number): Promise<WeaponStatInfo> => {
    const resultFetching = await fetchWeaponStatInfoById(statId)
    const statInfoParsed = JSON.parse(resultFetching.json)
    return WeaponStatInfoSchema.parse(statInfoParsed)
}

