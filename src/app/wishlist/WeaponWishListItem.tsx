import { WeaponWishListItemProps } from "../interfaces/wishList/WeaponWishListItemProps";

const WeaponWishListItem = ({savedRoll}: WeaponWishListItemProps) => {
    return (
        <div className="bg-medium-dark">
            <div>
                <div>

                </div>
                <div>
                    <p>{savedRoll.displayProperties.name}</p>
                </div>
            </div>
        </div>
    )
}

export default WeaponWishListItem