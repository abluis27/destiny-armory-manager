import { WeaponBasicInfo } from "@/types/basicTypes"
import { DestinyWeaponData } from "@/types/destinyWeaponData"

export interface WeaponDetailsProps {
    params: Promise<{ hash: string }>
}

export interface WeaponDetailsHeaderProps extends WeaponDetailsComponentProps {
    onSaved: () => void
}

export interface SaveRollButtonProps {
    onSaved: () => void
    className?: string
}

export interface WeaponBasicInformationProps {
    weaponBasicInformation: WeaponBasicInfo
    className?: string
}

export interface WeaponDetailsComponentProps {
    weapon: DestinyWeaponData
}