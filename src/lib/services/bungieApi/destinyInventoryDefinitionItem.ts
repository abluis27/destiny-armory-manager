import { WeaponPerkInfoFromApiSchema } from "@/app/types/zodSchemasForApi/WeaponPerkInfo";
import { baseUrlBungieApi } from "./commonValues";
import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo";

const path = "/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/"

export async function fetchWeaponPerkInfoFromApiById(weaponId: number): Promise<WeaponPerkInfo> {
  const response = await fetch(`${baseUrlBungieApi}${path}${weaponId}`, {
    headers: {
      'X-API-Key': process.env.BUNGIE_API_KEY!,
    },
  });

    const data = await response.json();
    const weaponPerkInfo = WeaponPerkInfoFromApiSchema.parse(data)
    return weaponPerkInfo.Response
}
  