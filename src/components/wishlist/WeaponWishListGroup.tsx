import { WeaponWishListGroupProps } from "@/interfaces/WislistInterfaces"
import WeaponWishListItem from "./WeaponWishListItem"

const WeaponWishListGroup = ({
    savedRolls,
    onClickDelete
}: WeaponWishListGroupProps) => {
    return (
        <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-10 py-4">
            {
                (
                    savedRolls.map(savedRoll => {
                        return <WeaponWishListItem
                            key={savedRoll.id}
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