import { WeaponWishListProps } from "../interfaces/wishList/WeaponWishListProps"
import WeaponWishListGroup from "./WeaponWishListGroup"

const WeaponWishListDisplay = ({
  wishList,
  onClickDelete
}: WeaponWishListProps) => {
  return (
    <div className="flex flex-col px-20 divide-y-5 divide-light-medium">
      {Object.entries(wishList).map(([group, savedRolls]) => {
        if(savedRolls.length <= 0) return null
        return (
            <div className="py-5">
                {/* Group type */}
                <div className="">
                    <p className="text-xl">{group}</p>
                </div>
                {/* Content */}
                <WeaponWishListGroup
                  savedRolls={savedRolls}
                  onClickDelete={onClickDelete}
                />
            </div>
        )
      })}
    </div>
  )
}

export default WeaponWishListDisplay
