import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo";

export interface PerkSelectorItemProps {
    perk: WeaponPerkInfo
    isSelected?: boolean
    onSelect?: (perk: WeaponPerkInfo) => void
}