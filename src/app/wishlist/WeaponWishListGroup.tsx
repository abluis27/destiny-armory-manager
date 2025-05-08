import { WeaponWishListGroupProps } from "../interfaces/wishList/WeaponWishListGroupProps"
import WeaponWishListItem from "./WeaponWishListItem"

const WeaponWishListGroup = ({
    savedRolls
}: WeaponWishListGroupProps) => {
    return (
        savedRolls.map(savedRoll => {
            return <WeaponWishListItem savedRoll={savedRoll}/>
        })
    )
}

export default WeaponWishListGroup