import { SavedRoll, WishListFilterKey, WeaponWishList } from "@/types/basicTypes";

const filters = {
  ammoType: [
    "Primary",
    "Special",
    "Heavy"
  ],
  damageType: [
    "Kinetic",
    "Arc",
    "Solar",
    "Void",
    "Stasis",
    "Strand"
  ],
  weaponType: [
    "Auto Rifle",
    "Pulse Rifle",
    "Hand Cannon",
    "Scout Rifle",
    "Sniper Rifle",
    "Fusion Rifle",
    "Rocket Launcher",
    "Sword",
    "Bow",
    "Submachine Gun",
    "Machine Gun",
    "Glaive"
  ]
};


export const getFilteredWeaponWishList = (wishList: SavedRoll[], filterKey: WishListFilterKey) => {
    const filteredWishList = getInitialMappedWishList(filterKey)

    wishList.forEach(savedRoll => {
        const key = savedRoll[filterKey].name
        if (key && filteredWishList[key]) {
            filteredWishList[key].push(savedRoll)
        }
    })

    Object.values(filteredWishList).forEach(group => {
        group.sort((a, b) => 
            a.displayProperties.name.localeCompare(b.displayProperties.name)
        )
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
