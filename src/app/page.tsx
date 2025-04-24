import { getWeaponCoreInfoById, getWeaponPerkPoolsInfo } from "@/lib/destinyWeaponServices";
import { toSignedInt32 } from "@/lib/utils";

export default async function Home() {
  const idWeapon = toSignedInt32(3698448090)
  const weaponCoreInfo = await getWeaponCoreInfoById(idWeapon);
  getWeaponPerkPoolsInfo(weaponCoreInfo.sockets)

  return (
    <div>
    </div>
  );
}
