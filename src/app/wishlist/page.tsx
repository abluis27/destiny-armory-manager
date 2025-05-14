"use client"
import { useEffect, useState } from "react";
import { SavedRoll, WeaponWishList, WishListFilterKey } from "../types/basicTypes";
import useStorageState from "@/lib/services/localStorage/useStorageState";
import { getFilteredWeaponWishList } from "./(wishlistComponents)/weaponWishListUtils";
import WeaponWishListDisplay from "./(wishlistComponents)/WeaponWishListDisplay";
import WislistFilterSelect from "./(wishlistComponents)/WishListFilterSelect";
import { showAlert, showConfirmationAlert } from "../../lib/sweetAlert";

export default function WishList() {
  const [isClient, setIsClient] = useState(false);
  const [savedRolls, setSavedRolls] = useStorageState<SavedRoll[]>("weaponWishlist", []);
  const [filterKey, setFilterKey] = useState<WishListFilterKey>("ammoType")
  const [wishList, setWishList] = useState<WeaponWishList>({})

  useEffect(() => {
    setIsClient(true) // Once the pageis in the client
  }, [])
  
  useEffect(() => {
    if (savedRolls.length > 0) {
      const filteredWishList = getFilteredWeaponWishList(savedRolls, filterKey);
      setWishList(filteredWishList)
    } else {
      setWishList({})
    }
  }, [savedRolls, filterKey])


  const onClickDelete = (wishListId: string) => {
    const updatedRolls = savedRolls.filter(roll => roll.id !== wishListId);
    setSavedRolls(updatedRolls)
  
    const updatedWishList = getFilteredWeaponWishList(updatedRolls, filterKey);
    setWishList(updatedWishList)
  }

  const onClearWishlist = async () => {
    if (savedRolls.length > 0) {
      const confirmed = await showConfirmationAlert(
        "Clear wishlist",
        "Are you sure you want to delete all items in the wishlist?"
      )
        if (confirmed) {
          setSavedRolls([])
          showAlert("Wishlist cleared", "", "success")
        }
    } else {
      showAlert(
        "Wishlist Empty",
        "There is nothing to clear. Start searching for rolls!",
        "info"
      )
    }
  }

   // Only render after client is ready
  if (!isClient) return null;

  return (
    <div>
      <div className="py-5 px-7 flex justify-between">
        <p className="text-2xl">Weapon Wishlist</p>
        <div className="flex gap-5">
          <WislistFilterSelect
            filterKey={filterKey}
            setFilterKey={setFilterKey}
          />
          <button className="px-5 py-3 rounded-lg 
          bg-medium-dark border-1 border-light-medium
          transition duration-300
          hover:border-red-500"
          onClick={() => onClearWishlist()}
          >Clear wishlist</button>
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
