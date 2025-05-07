import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo";

export interface WeaponPerkSelectorProps {
  perkPool: WeaponPerkInfo[][]
  selectedPerks: (WeaponPerkInfo | null)[]
  setSelectedPerks: React.Dispatch<React.SetStateAction<WeaponPerkInfo[]>>
}
  