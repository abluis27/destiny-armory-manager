import { getDestinyWeaponDataById } from "@/lib/services/destinyWeaponServices";
import { toSignedInt32 } from "@/lib/utils";

export default async function Home() {
  // Fatebringer - 4184168210
  // Choir of One - 3698448090
  // Lament - 3487253372
  // Better Devils Y1 - 1048266744
  // Rose - 2429822976
  // 21% Delirium - 1600633250
 
  const id = toSignedInt32(4184168210)
  const weapon = await getDestinyWeaponDataById(id)
  console.log(weapon)

  return (
    <div>

    </div>
  );
}
