"use client"
import { useEffect, useState } from "react";
import { SavedRoll, WishListFilterKey } from "../types/basicTypes";
import useStorageState from "@/lib/services/localStorage/useStorageState";

const filterWeaponWishList = (wishList: SavedRoll[], filterKey: WishListFilterKey) => {
  
}

export default function WishList() {
  const [savedRolls, setSavedRolls] = useStorageState<SavedRoll[]>("weaponWishlist", []);
  const [wishList, setWishList] = useState<SavedRoll[]>([])
  
  useEffect(() => {
    if (savedRolls.length === 0) {
      console.log("No saved rolls found");
    } else {
      console.log(savedRolls)
    }
  }, [savedRolls]);

  return (
    <div>
      <div className="flex justify-center items-center
      bg-medium-dark py-3">
        <p className="text-sm">
          Your companion for Destiny 2 Weapons and Perks tracking</p>
      </div>
      <div>
        <p className="py-4 px-3 text-xl">Weapon List</p>
      </div>
    </div>
  );
}
