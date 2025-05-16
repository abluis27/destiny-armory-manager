import { WeaponBasicInfo } from "@/types/basicTypes"
import { DestinyWeaponData } from "@/types/destinyWeaponData"

export interface WeaponDetailsProps {
    params: Promise<{ hash: string }>
}

export interface WeaponDetailsHeaderProps extends WeaponDetailsComponentProps {
    onSaved: () => void
}

export interface WeaponBasicInformationProps {
    weaponBasicInformation: WeaponBasicInfo
}

export interface WeaponDetailsComponentProps {
    weapon: DestinyWeaponData
}