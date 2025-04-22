import { db } from "@/db";
import { sql } from "drizzle-orm";

export const getWeaponDatabase = async (weaponName: string): Promise<DestinyInventoryItemDefitionWeapon[]> => (
    db.all(
        sql`SELECT * FROM DestinyInventoryItemDefinitionWeapon
          WHERE json_extract(json, '$.displayProperties.name') LIKE '%' || ${weaponName} || '%'`
      )
)

export const getAmmoTypeDatabase = async (ammoTypeId: number): Promise<AmmoType[]> => (
    db.all(
        sql`SELECT * FROM AmmoType
          WHERE id = ${ammoTypeId}`
      )
)

export const getWeaponTypeDatabase = async (weaponTypeId: number): Promise<WeaponType[]> => (
    db.all(
        sql`SELECT * FROM WeaponType
          WHERE id = ${weaponTypeId}`
      )
)



