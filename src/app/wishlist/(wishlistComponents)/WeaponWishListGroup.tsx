import { WeaponWishListGroupProps } from "../../interfaces/wishList/WeaponWishListGroupProps"
import WeaponWishListItem from "./WeaponWishListItem"

const WeaponWishListGroup = ({
    savedRolls,
    onClickDelete
}: WeaponWishListGroupProps) => {
    return (
        <div className="flex flex-wrap gap-10 py-4">
            {
                (
                    savedRolls.map(savedRoll => {
                        return <WeaponWishListItem
                            savedRoll={savedRoll}
                            onClickDelete={onClickDelete}
                        />
                    })
                )
            }
        </div>
    )
}

export default WeaponWishListGroup