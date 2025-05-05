import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo";
import { WeaponDetailsComponentProps } from "./WeaponDetailsComponentProps";

export interface WeaponPerkSelectorProps extends WeaponDetailsComponentProps {
  selectedPerks: (WeaponPerkInfo | null)[];
    setSelectedPerks: React.Dispatch<React.SetStateAction<(WeaponPerkInfo | null)[]>>;
}
  