import { WeaponBasicData} from "@/types/basicTypes";
import { fetchWeaponAmmoTypeById, fetchWeaponDamageTypeById, fetchWeaponRarityById, fetchWeaponTypeById } from "./dataFetching";

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

export const getWeaponAmmoTypeById = async (ammoTypeId: number): Promise<WeaponBasicData> => {
    const resultFetching = await fetchWeaponAmmoTypeById(ammoTypeId)
    return resultFetching
}

export const getWeaponDamageTypeById = async (damageTypeId: number): Promise<WeaponBasicData> => {
    const resultFetching = await fetchWeaponDamageTypeById(damageTypeId)
    return resultFetching
}

export const getWeaponRarityById = async (rarityId: number): Promise<WeaponBasicData> => {
    const resultFetching = await fetchWeaponRarityById(rarityId)
    return resultFetching
}