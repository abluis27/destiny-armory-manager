import { WeaponBasicInfo } from "@/app/types/basicTypes"
import { DestinyWeaponData } from "@/app/types/destinyWeaponData"

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