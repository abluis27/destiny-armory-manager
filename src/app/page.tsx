"use client"
import { useEffect } from "react";
import useStorageState from "./frontend_services/useStorageState";
import { SavedRoll } from "./types/basicTypes";

export default function Home() {
  const [savedRolls, setSavedRolls] = useStorageState<SavedRoll[]>("weaponWishlist", []);
  
  // Optional: Check if saved rolls exist
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
