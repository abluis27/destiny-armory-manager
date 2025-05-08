import { SavedRoll, WeaponWishList, WishListFilterKey } from "../types/basicTypes";

const filters = {
    "ammoType": [
        "Primary",
        "Special",
        "Heavy"
    ]
}

export const getFilteredWeaponWishList = (wishList: SavedRoll[], filterKey: WishListFilterKey) => {
    const filteredWishList = getInitialMappedWishList(filterKey)

    wishList.forEach(savedRoll => {
        const key = savedRoll[filterKey].name
        if (key && filteredWishList[key]) {
            filteredWishList[key].push(savedRoll)
        }
    })

    return filteredWishList
}

const getInitialMappedWishList = (filterKey: WishListFilterKey) => {
    const filteredWishList: WeaponWishList = {}
    const mapKeys = filters[filterKey]
    mapKeys.forEach(key => {
        filteredWishList[key] = [];
      });

  return filteredWishList;
}
