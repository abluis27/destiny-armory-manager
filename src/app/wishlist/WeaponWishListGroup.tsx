import { WeaponWishListGroupProps } from "../interfaces/wishList/WeaponWishListGroupProps"

const WeaponWishListGroup = ({
    savedRolls
}: WeaponWishListGroupProps) => {
    return (
        savedRolls.map(savedRoll => {
            return <p>Balls</p>
        })
    )
}

export default WeaponWishListGroup