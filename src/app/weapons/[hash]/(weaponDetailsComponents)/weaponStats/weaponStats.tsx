import { WeaponDetailsComponentProps } from "../interfaces/WeaponDetailsComponentProps"
import { getWeaponStatLayout } from "./layouts/weaponStatLayouts"

const WeaponStats = ({ weapon }: WeaponDetailsComponentProps) => {
    const weaponStatLayout = getWeaponStatLayout(weapon.weaponType.name)
    console.log(weaponStatLayout)
    return (
        <div>
            <p>I am a Placeholder</p>
        </div>
    )
}

export default WeaponStats