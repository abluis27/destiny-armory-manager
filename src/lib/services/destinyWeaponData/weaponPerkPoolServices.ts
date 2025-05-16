import { Sockets, SocketEntry } from "@/types/zodSchemasForDatabase/weaponCoreInfo"
import { WeaponPerkInfo, WeaponPerkInfoSchema } from "@/types/zodSchemasForDatabase/weaponPerkInfo"
import { WeaponPerkPoolHashes, WeaponPerkPoolHashesSchema } from "@/types/zodSchemasForDatabase/weaponPlugSet"
import { toSignedInt32 } from "@/lib/utils"
import { fetchWeaponPerkInfoById, fetchWeaponPerkPooHasheslById } from "./dataFetching"

export const getWeaponPerkPoolsInfoFromSockets = async (sockets: Sockets) => {
    const weaponPerkPool = await getWeaponPerkPoolByHash(sockets)
    const weaponPerkPoolsInfo = await Promise.all(
        weaponPerkPool.map(async perkPool => {
            const perkPoolInfo = await getWeaponPerkpoolWithInfo(perkPool)
            return perkPoolInfo
        })
    )
    const weaponPerkPoolData = filterWeaponPerkPool(weaponPerkPoolsInfo)
    return weaponPerkPoolData
}

const filterWeaponPerkPool = (perkPool: WeaponPerkInfo[][] | undefined) => {
    if(perkPool === undefined) {
        return perkPool
    }

    return perkPool.filter(perkColumn =>
        (perkColumn ?? []).some(
            perk => {
                const name = perk.displayProperties.name.toLowerCase()
                return !name.includes("tracker")
        })
    )
}

// Join perk hash with its information
const getWeaponPerkpoolWithInfo = async (perkHashes: WeaponPerkPoolHashes) => {
  const perkPoolInfo = await Promise.all(
    perkHashes.reusablePlugItems.map(async perkHash => {
      const signedPerkHash = toSignedInt32(perkHash.plugItemHash)
      const perkInfo = await getWeaponPerkInfoById(signedPerkHash);
      return perkInfo;
    })
  )
  return perkPoolInfo
};


const getWeaponPerkInfoById = async (hash: number) => {
  const resultFetching = await fetchWeaponPerkInfoById(hash)
  const unparsedPerkInfo = JSON.parse(resultFetching.json)
  return WeaponPerkInfoSchema.parse(unparsedPerkInfo)
}


// Join the perk pool hash with its perk pool
const getWeaponPerkPoolByHash = async (sockets: Sockets) => {
  const weaponPerkPoolsHashes = getWeaponPerkPoolsHashes(sockets)
  const weaponPerkPool = await Promise.all(
    weaponPerkPoolsHashes.map(perkPool => {
        // One of these ALWAYS is going to exists
      if (perkPool.randomizedPlugSetHash !== undefined) {
        return getWeaponPerkPoolById(toSignedInt32(perkPool.randomizedPlugSetHash))
      } else if (perkPool.reusablePlugSetHash !== undefined) {
        return getWeaponPerkPoolById(toSignedInt32(perkPool.reusablePlugSetHash))
      }
      return null
    })
  )

  // Filter out nulls
  return weaponPerkPool.filter((p): p is WeaponPerkPoolHashes => p !== null)
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
