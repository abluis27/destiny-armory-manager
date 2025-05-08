"use client"
import { useEffect, useState } from "react";
import { SavedRoll, WeaponWishList } from "../types/basicTypes";
import useStorageState from "@/lib/services/localStorage/useStorageState";
import { getFilteredWeaponWishList } from "./weaponWishListUtils";
import WeaponWishListDisplay from "./WeaponWishListDisplay";

export default function WishList() {
  const [savedRolls, setSavedRolls] = useStorageState<SavedRoll[]>("weaponWishlist", []);
  const filterKey = "ammoType"
  const [wishList, setWishList] = useState<WeaponWishList>({})
  
  useEffect(() => {
    if (savedRolls.length > 0) {
      const filteredWishList = getFilteredWeaponWishList(savedRolls, filterKey)
      setWishList(filteredWishList)
    }
  }, [savedRolls]);

  const onClickDelete = (wishListId: string) => {
    const updatedRolls = savedRolls.filter(roll => roll.id !== wishListId);
    setSavedRolls(updatedRolls);
  
    const updatedWishList = getFilteredWeaponWishList(updatedRolls, filterKey);
    setWishList(updatedWishList);
  };

  return (
    <div>
      <div className="flex justify-center items-center
      bg-medium-dark py-3">
        <p className="text-sm">
          Your companion for Destiny 2 Weapons and Perks tracking</p>
      </div>
      <div>
        <p className="py-4 px-3 text-xl">Weapon List</p>
        {
          savedRolls.length > 0 ? (
            <WeaponWishListDisplay
              wishList={wishList}
              onClickDelete={onClickDelete}
            />
          ) : (
            <p>No weapon rolls saved yet</p>
          )
        } 
      </div>
    </div>
  );
}
