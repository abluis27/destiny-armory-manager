import { db } from "@/db";
import { sql } from "drizzle-orm";
import { DestinyDefinition, WeaponBasicData, WeaponBasicDataWithIcon } from "../app/types/basicTypes";

export const fetchWeaponCoreInfoByName = async (weaponName: string): Promise<DestinyDefinition[]> => (
    db.all(
        sql`SELECT * FROM DestinyInventoryItemDefinitionWeapon
          WHERE json_extract(json, '$.displayProperties.name') LIKE '%' || ${weaponName} || '%'`
      )
)

export const fetchWeaponCoreInfoById = async (weaponId: number): Promise<DestinyDefinition> => (
    db.get(
        sql`SELECT * FROM DestinyInventoryItemDefinitionWeapon
          WHERE id = ${weaponId}`
      )
)


export const fetchWeaponAmmoTypeById = async (ammoTypeId: number): Promise<WeaponBasicDataWithIcon> => (
    db.get(
        sql`SELECT * FROM AmmoType
          WHERE id = ${ammoTypeId}`
      )
)

export const fetchWeaponTypeById = async (weaponTypeId: number): Promise<WeaponBasicData> => (
    db.get(
        sql`SELECT * FROM WeaponType
          WHERE id = ${weaponTypeId}`
      )
)

export const fetchWeaponRarityById = async (rarityId: number): Promise<WeaponBasicData> => (
    db.get(
        sql`SELECT * FROM Rarity
          WHERE id = ${rarityId}`
      )
)

export const fetchWeaponStatInfoById = async (statId: number): Promise<DestinyDefinition> => (
    db.get(
        sql`SELECT * FROM DestinyStatDefinition
          WHERE id = ${statId}`
      ) 
)

export const fetchWeaponPerkPooHasheslById = async (perkPoolId: number): Promise<DestinyDefinition> => (
    db.get(
        sql`SELECT * FROM DestinyPlugSetDefinition
          WHERE id = ${perkPoolId}`
      ) 
)

export const fetchWeaponPerkInfoById = async (perkId: number): Promise<DestinyDefinition> => (
    db.get(
        sql`SELECT * FROM DestinyInventoryItemDefinitionPerk
          WHERE id = ${perkId}`
      ) 
)

export const fetchWeaponDamageTypeById = async (damageTypeId: number): Promise<DestinyDefinition> => (
    db.get(
        sql`SELECT * FROM DestinyDamageTypeDefinition
          WHERE id = ${damageTypeId}`
      ) 
)





