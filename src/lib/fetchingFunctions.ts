import { db } from "@/db";
import { sql } from "drizzle-orm";

export const fetchWeaponCoreInfoByName = async (weaponName: string): Promise<DestinyDefinition[]> => (
    db.all(
        sql`SELECT * FROM DestinyInventoryItemDefinitionWeapon
          WHERE json_extract(json, '$.displayProperties.name') LIKE '%' || ${weaponName} || '%'`
      )
)

export const fetchWeaponAmmoTypeById = async (ammoTypeId: number): Promise<WeaponBasicDataWithIcon[]> => (
    db.all(
        sql`SELECT * FROM AmmoType
          WHERE id = ${ammoTypeId}`
      )
)

export const fetchWeaponTypeById = async (weaponTypeId: number): Promise<WeaponBasicData[]> => (
    db.all(
        sql`SELECT * FROM WeaponType
          WHERE id = ${weaponTypeId}`
      )
)

export const fetchWeaponRarityById = async (rarityId: number): Promise<WeaponBasicData[]> => (
    db.all(
        sql`SELECT * FROM Rarity
          WHERE id = ${rarityId}`
      )
)

export const fetchWeaponStatInfoById = async (statId: number): Promise<DestinyDefinition[]> => (
    db.all(
        sql`SELECT * FROM DestinyStatDefinition
          WHERE id = ${statId}`
      ) 
)

export const fetchWeaponPerkPoolById = async (perkPoolId: number): Promise<DestinyDefinition[]> => (
    db.all(
        sql`SELECT * FROM DestinyPlugSetDefinition
          WHERE id = ${perkPoolId}`
      ) 
)

export const fetchWeaponPerkInfoById = async (perkId: number): Promise<DestinyDefinition[]> => (
    db.all(
        sql`SELECT * FROM DestinyInventoryItemDefinitionPerk
          WHERE id = ${perkId}`
      ) 
)

export const fetchWeaponDamageTypeById = async (damageTypeId: number): Promise<DestinyDefinition[]> => (
    db.all(
        sql`SELECT * FROM DestinyDamageTypeDefinition
          WHERE id = ${damageTypeId}`
      ) 
)





