import { fetchWeaponAmmoTypeById, fetchWeaponCoreInfoById, fetchWeaponCoreInfoByName, fetchWeaponDamageTypeById, fetchWeaponPerkInfoById, fetchWeaponPerkPooHasheslById, fetchWeaponRarityById, fetchWeaponStatInfoById, fetchWeaponTypeById } from "./dataFetching";
import { SocketEntry, Sockets, WeaponCoreInfo, WeaponCoreInfoWithoutIdSchema } from "./types/zodSchemas/weaponCoreInfo";
import { WeaponDamageType, WeaponDamageTypeSchema } from "./types/zodSchemas/weaponDamageType";
import { WeaponPerkInfo, WeaponPerkInfoSchema } from "./types/zodSchemas/weaponPerkInfo";
import { WeaponPerkPoolHashes, WeaponPerkPoolHashesSchema } from "./types/zodSchemas/weaponPlugSet";
import { WeaponPreviewInfo } from "./types/zodSchemas/weaponPreviewInfo";
import { WeaponStatInfo, WeaponStatInfoSchema } from "./types/zodSchemas/weaponStatInfo";
import { toSignedInt32 } from "./utils";

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
    const weaponCoreInfo = JSON.parse(destinyDefinition.json)
    const weaponCoreInfoParsed = WeaponCoreInfoWithoutIdSchema.parse(weaponCoreInfo)
    return {
        hash: destinyDefinition.id,
        ...weaponCoreInfoParsed
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

// TODO
export const getWeaponPerkPoolsInfo = async (sockets: Sockets) => {
    const weaponPerkPool = await mapWeaponPerkPoolByHash(sockets)
    console.log(weaponPerkPool)
}


// Asignar a cada PerkPoolHash su corresponsiente PerkPool
export const mapWeaponPerkPoolByHash = async (sockets: Sockets) => {
    const weaponPerkPoolsHashes = getWeaponPerkPoolsHashes(sockets)
    const weaponPerkPool = await Promise.all(
        weaponPerkPoolsHashes.map(perkPool => {
            if (perkPool.randomizedPlugSetHash !== undefined) {
                return getWeaponPerkPoolById(
                   toSignedInt32(perkPool.randomizedPlugSetHash)
                )
            } if(perkPool.reusablePlugSetHash !== undefined) {
                return getWeaponPerkPoolById(
                    toSignedInt32(perkPool.reusablePlugSetHash)
                )
            }
            return undefined
        })
    )
    return weaponPerkPool
}

// Base on the indexes we can filter the perk pools that we want to get
// 0 -> Intrinsic perk
// 1 -> Index of the perk pools that we want
const getWeaponPerkPoolsHashes = (sockets: Sockets): SocketEntry[] => {
    const perkPoolsIndexes = [0, ...sockets.socketCategories[1].socketIndexes]
    return filterPerkPoolsByIndex(perkPoolsIndexes, sockets.socketEntries)
}
const filterPerkPoolsByIndex = (indexes: number[], unfilteredPerkPool: SocketEntry[]) => (
    indexes.map(index => (unfilteredPerkPool[index]))
)

export const getWeaponPerkPoolById = async (perkPoolId: number): Promise<WeaponPerkPoolHashes> => {
    const resultFetching = await fetchWeaponPerkPooHasheslById(perkPoolId)
    const unparsedPlugSet = JSON.parse(resultFetching.json)
    return WeaponPerkPoolHashesSchema.parse(unparsedPlugSet)
}

export const getWeaponPerkInfoById = async (perkId: number): Promise<WeaponPerkInfo> => {
    const resultFetching = await fetchWeaponPerkInfoById(perkId)
    const unparsedPerkInfo = JSON.parse(resultFetching.json)
    return WeaponPerkInfoSchema.parse(unparsedPerkInfo)
}


