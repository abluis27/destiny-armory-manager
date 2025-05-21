import { WeaponPerkInfo } from "@/types/zodSchemasForDatabase/weaponPerkInfo"

export interface PerkSelectorColumnProps {
    perkPool: WeaponPerkInfo[]
    selectedPerk: WeaponPerkInfo | null
    onSelect: (perk: WeaponPerkInfo) => void
}

export interface PerkSelectorItemProps {
    perk: WeaponPerkInfo
    isSelected?: boolean
    onSelect?: (perk: WeaponPerkInfo) => void
}
export interface WeaponPerkSelectorProps {
  perkPool: WeaponPerkInfo[][]
  selectedPerks: (WeaponPerkInfo | null)[]
  setSelectedPerks: React.Dispatch<React.SetStateAction<WeaponPerkInfo[]>>
}

export interface PerkImageProps {
  alt: string
  imageUrl: string
}