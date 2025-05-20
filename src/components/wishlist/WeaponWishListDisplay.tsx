import { WeaponWishListProps } from "@/interfaces/WislistInterfaces"
import WeaponWishListGroup from "./WeaponWishListGroup"

const WeaponWishListDisplay = ({
  wishList,
  onClickDelete
}: WeaponWishListProps) => {
  return (
    <div className="min-h-200 flex flex-col items-center md:items-start md:px-20
    divide-y-5 divide-light-medium gap-5">
      {Object.entries(wishList).map(([group, savedRolls]) => {
        if(savedRolls.length <= 0) return null
        return (
            <div className="py-5" key={group}>
                {/* Group type */}
                <div className="">
                    <p className="text-2xl italic">{group}</p>
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
