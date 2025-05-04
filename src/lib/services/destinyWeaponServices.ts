import { fetchWeaponCoreInfoById, fetchWeaponCoreInfoByName } from "../dataFetching";
import { DestinyDefinition } from "../../app/types/basicTypes";
import { DestinyWeaponData } from "../../app/types/destinyWeaponData";
import { WeaponCoreInfo, WeaponCoreInfoWithoutIdSchema } from "../../app/types/zodSchemasForDatabase/weaponCoreInfo";
import { WeaponPreviewInfo } from "../../app/types/zodSchemasForDatabase/weaponPreviewInfo";
import { toSignedInt32 } from "../utils";
import { getWeaponAmmoTypeById, getWeaponDamageTypeById, getWeaponRarityById, getWeaponTypeById } from "./weaponDetailsServices";
import { getWeaponPerkPoolsInfoFromSockets } from "./weaponPerkPoolServices";

export const getDestinyWeaponDataById = async (weaponId: number): Promise<DestinyWeaponData> => {
    const weaponCoreInfo = await getWeaponCoreInfoById(weaponId);
    const weaponPerkPoolsInfo = await getWeaponPerkPoolsInfoFromSockets(weaponCoreInfo.sockets)
    const weaponDamageType = await getWeaponDamageTypeById(toSignedInt32(weaponCoreInfo.defaultDamageTypeHash))
    const weaponAmmoType = await getWeaponAmmoTypeById(weaponCoreInfo.equippingBlock.ammoType)
    const rarity = await getWeaponRarityById(weaponCoreInfo.inventory.tierType)

    return {
        hash: weaponCoreInfo.hash,
        displayProperties: weaponCoreInfo.displayProperties,
        iconWatermark: weaponCoreInfo.iconWatermark,
        screenshot: weaponCoreInfo.screenshot,
        flavorText: weaponCoreInfo.flavorText,
        stats: weaponCoreInfo.stats,
        perkPool: weaponPerkPoolsInfo,
        damageType: weaponDamageType,
        ammoType: weaponAmmoType,
        rarity: rarity
    };
};


// Para las busqueda de armas principalmente
export const getDestinyWeaponsPreviewDataByName = async (weaponName: string): Promise<WeaponPreviewInfo[]> => {
    const weaponsCoreInfo = await getWeaponsCoreInfoByName(weaponName)
    const weaponsPreviewInfo = await Promise.all(
        weaponsCoreInfo.map(async (weapon) => {
            const weaponType = await getWeaponTypeById(weapon.itemCategoryHashes)
            return {
                hash: weapon.hash,
                displayProperties: weapon.displayProperties,
                weaponType: weaponType,
                iconWatermark: weapon.iconWatermark
            }
        })
    )
    return weaponsPreviewInfo
}

const getWeaponsCoreInfoByName = async (weaponName: string): Promise<WeaponCoreInfo[]> => {
    const resultsFetching = await fetchWeaponCoreInfoByName(weaponName)
    const weaponsCoreInfo = resultsFetching.map(weapon =>
        parseDestinyDefitionToWeaponCoreInfo(weapon)
    )
    return weaponsCoreInfo
}

const getWeaponCoreInfoById = async (weaponId: number): Promise<WeaponCoreInfo> => {
    const resultFetching = await fetchWeaponCoreInfoById(weaponId)
    return parseDestinyDefitionToWeaponCoreInfo(resultFetching)
}

const parseDestinyDefitionToWeaponCoreInfo = (destinyDefinition: DestinyDefinition): WeaponCoreInfo => {
    const weaponCoreInfo = JSON.parse(destinyDefinition.json)
    const weaponCoreInfoParsed = WeaponCoreInfoWithoutIdSchema.parse(weaponCoreInfo)
    return {
        hash: destinyDefinition.id,
        ...weaponCoreInfoParsed
    }
}




