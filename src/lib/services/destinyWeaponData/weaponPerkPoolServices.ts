import { Sockets, SocketEntry } from "@/app/types/zodSchemasForDatabase/weaponCoreInfo"
import { WeaponPerkInfo, WeaponPerkInfoSchema } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo"
import { WeaponPerkPoolHashes, WeaponPerkPoolHashesSchema } from "@/app/types/zodSchemasForDatabase/weaponPlugSet"
import { toSignedInt32 } from "@/lib/utils"
import { fetchWeaponPerkInfoFromApiById } from "./bungieApi/destinyInventoryDefinitionItem"
import { fetchWeaponPerkPooHasheslById, fetchWeaponPerkInfoById } from "./dataFetching"

export const getWeaponPerkPoolsInfoFromSockets = async (sockets: Sockets) => {
    const weaponPerkPool = await getWeaponPerkPoolByHash(sockets)
    const weaponPerkPoolsInfo = await Promise.all(
        weaponPerkPool.map(async perkPool => {
            const perkPoolInfo = await getWeaponPerkpoolWithInfo(perkPool)
            return perkPoolInfo
        })
    )
    return weaponPerkPoolsInfo
}

// Asigna cada perk con su informacion
const getWeaponPerkpoolWithInfo = async (perkHashes: WeaponPerkPoolHashes | undefined) => {
    if(perkHashes != undefined) {
        const perkPoolInfo = Promise.all(
            perkHashes?.reusablePlugItems.map(async perkHash => {      
                const perkInfo = await fetchWeaponPerkInfoFromApiById(perkHash.plugItemHash)
                return perkInfo
            })
        )
        return perkPoolInfo
    }
}

// Asignar a cada PerkPoolHash su corresponsiente PerkPool
 const getWeaponPerkPoolByHash = async (sockets: Sockets) => {
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

const getWeaponPerkPoolById = async (perkPoolId: number): Promise<WeaponPerkPoolHashes> => {
    const resultFetching = await fetchWeaponPerkPooHasheslById(perkPoolId)
    const unparsedPlugSet = JSON.parse(resultFetching.json)
    return WeaponPerkPoolHashesSchema.parse(unparsedPlugSet)
}

// Unused until fixing perk db
const getWeaponPerkInfoById = async (perkId: number): Promise<WeaponPerkInfo> => {
    const resultFetching = await fetchWeaponPerkInfoById(perkId)
    const unparsedPerkInfo = JSON.parse(resultFetching.json)
    return WeaponPerkInfoSchema.parse(unparsedPerkInfo)
}

