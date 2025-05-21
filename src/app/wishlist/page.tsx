"use client"
import WislistFilterSelect from "@/components/wishlist/WishListFilterSelect";
import WeaponWishListDisplay from "@/components/wishlist/WeaponWishListDisplay";
import { getFilteredWeaponWishList } from "@/components/wishlist/weaponWishListUtils";
import useStorageState from "@/lib/services/localStorage/useStorageState";
import { showConfirmationAlert, showAlert } from "@/lib/sweetAlert";
import { SavedRoll, WishListFilterKey, WeaponWishList } from "@/types/basicTypes";
import { useState, useEffect } from "react";
import Image from 'next/image'

export default function WishList() {
  const [isClient, setIsClient] = useState(false);
  const [savedRolls, setSavedRolls] = useStorageState<SavedRoll[]>("weaponWishlist", []);
  const [filterKey, setFilterKey] = useState<WishListFilterKey>("ammoType")
  const [wishList, setWishList] = useState<WeaponWishList>({})

  useEffect(() => {
    setIsClient(true)
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

  console.log(savedRolls)

  return (
    <div>
      <div className="py-5 px-7 flex justify-between">
        <div className="flex items-center justify-center">
          <p className="text-xl md:text-2xl">Weapon Wishlist</p>
        </div>
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
          >
            <p className="hidden md:block">Clear wishlist</p>
            <Image
              src={"/icons/clear-wishlist-icon.svg"}
              width={20}
              height={20}
              alt="Button to clear the wishlist items"
              className="md:hidden"
            />
          </button>
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
  )
}
