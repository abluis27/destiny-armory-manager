"use client"
import { useEffect, useState } from "react";
import { SavedRoll, WeaponWishList, WishListFilterKey } from "../types/basicTypes";
import useStorageState from "@/lib/services/localStorage/useStorageState";
import { getFilteredWeaponWishList } from "./weaponWishListUtils";
import WeaponWishListDisplay from "./WeaponWishListDisplay";
import WislistFilterSelect from "./WishListFilterSelect";

export default function WishList() {
  const [savedRolls, setSavedRolls] = useStorageState<SavedRoll[]>("weaponWishlist", []);
  const [filterKey, setFilterKey] = useState<WishListFilterKey>("ammoType")
  const [wishList, setWishList] = useState<WeaponWishList>({})
  
  useEffect(() => {
    if (savedRolls.length > 0) {
      const filteredWishList = getFilteredWeaponWishList(savedRolls, filterKey);
      setWishList(filteredWishList);
    }
  }, [savedRolls, filterKey]); // <-- add filterKey here


  const onClickDelete = (wishListId: string) => {
    const updatedRolls = savedRolls.filter(roll => roll.id !== wishListId);
    setSavedRolls(updatedRolls);
  
    const updatedWishList = getFilteredWeaponWishList(updatedRolls, filterKey);
    setWishList(updatedWishList);
  };

  return (
    <div>
      <div className="py-5 px-7 flex justify-between">
        <p className="text-2xl">Weapon Wishlist</p>
        <div>
          <WislistFilterSelect
            filterKey={filterKey}
            setFilterKey={setFilterKey}
          />
        </div>
      </div>
      {
        savedRolls.length > 0 ? (
          <WeaponWishListDisplay
            wishList={wishList}
            onClickDelete={onClickDelete}
          />
        ) : (
          <div className="min-h-200 flex justify-center items-center">
            <p className="text-xl">No weapons added yet. Start searching!</p>
          </div>
        )
      } 
    </div>
  );
}
