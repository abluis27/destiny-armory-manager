import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo";

export interface PerkSelectorColumnProps {
    perkPool: WeaponPerkInfo[],
    selectedPerk: WeaponPerkInfo | null,
    onSelect: (perk: WeaponPerkInfo) => void
}