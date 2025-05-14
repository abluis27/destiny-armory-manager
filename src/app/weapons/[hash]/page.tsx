"use client";
import { WeaponDetailsProps } from "@/app/interfaces/weaponDetails/WeaponDetailsInterfaces";
import { WeaponBasicInfo, SavedRoll } from "@/app/types/basicTypes";
import { DestinyWeaponData } from "@/app/types/destinyWeaponData";
import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo";
import useStorageState from "@/lib/services/localStorage/useStorageState";
import React, { useState, useEffect } from "react";
import { EMPTY_PERK } from "./(weaponDetailsComponents)/emptyPerk";
import WeaponPerkSelector from "./(weaponDetailsComponents)/perkSelectorComponents/weaponPerkSelector";
import WeaponBasicInformation from "./(weaponDetailsComponents)/WeaponBasicInformation";
import WeaponDetailsHeader from "./(weaponDetailsComponents)/weaponDetailsHeader";
import WeaponStats from "./(weaponDetailsComponents)/weaponStats/weaponStats";
import { showAlert } from "@/lib/sweetAlert";
import { ScaleLoader } from "react-spinners";

const filterWeaponPerkPool = (perkPool: WeaponPerkInfo[][]) => {
  // We filter out the intrinsic perk since is going to be display
  // in the other component
  const weaponPerkPool = perkPool.slice(1)
  return weaponPerkPool;
}

const getWeaponBasicInfo = (weapon: DestinyWeaponData): WeaponBasicInfo => {
  return {
    hash: weapon.hash,
    flavorText: weapon.flavorText,
    screenshot: weapon.screenshot,
    damageType: weapon.damageType,
    ammoType: weapon.ammoType,
    intrinsictPerk: weapon.perkPool?.[0]?.[0] ?? EMPTY_PERK
  } 
}

const getComparableRollKey = (savedRoll: SavedRoll) => {
  const weaponKey = savedRoll.weaponHash.toString()
  const selectedPerksKey = getSelectedPerksKey(savedRoll.savedPerks)
  return weaponKey + selectedPerksKey
}

const getSelectedPerksKey = (selectedPerks: WeaponPerkInfo[]) => {
  let selectedPerksKey = ""
  selectedPerks.forEach(perk => {
    if (
      perk.hash !== 0 &&
      perk.itemTypeDisplayName.toLowerCase() !== "origin trait"
    ) {
      selectedPerksKey += perk.hash.toString()
    }
  })
  return selectedPerksKey
}


export default function WeaponDetails({ params }: WeaponDetailsProps) {
  const  { hash } = React.use(params);
  const [weapon, setWeapon] = useState<DestinyWeaponData | null>(null)
  const [weaponPerkPool, setWeaponPerkPool] = useState<WeaponPerkInfo[][]>()
  const [selectedPerks, setSelectedPerks] = useState<WeaponPerkInfo[]>([]);
  const [weaponWishlist, setWeaponWishlist] = useStorageState<SavedRoll[]>("weaponWishlist", []);

  
  useEffect(() => {
    const getDestinyWeaponData = async () => {
      try {
        const response = await fetch(`/api/weapons/full?hash=${encodeURIComponent(hash)}`)
        const data = await response.json()
        setWeapon(data)
        setWeaponPerkPool(filterWeaponPerkPool(data.perkPool))
      } catch (error) {
        console.error("API ERROR: ", error)
      }
    };
    getDestinyWeaponData()
  }, [hash])

  useEffect(() => {
    if (weaponPerkPool) {
      setSelectedPerks(Array(weaponPerkPool.length).fill(EMPTY_PERK))
    }
  }, [weaponPerkPool])

  const onCurrentRollSaved = () => {
    if(isValidRoll()) {
      saveCurrentRoll()
      showAlert(
        "Roll saved!",
        "The current weapon roll has been saved into the wishlist",
        "success"
      )
    }
  }

  const isValidRoll = () => {
    if(!isThereAPerkSelected()) {
        showAlert(
        "Select one perk",
        "At least one perk must be selected before saving the roll, and it cannot be only the Origin Trait.",
        "info"
      )
      return false
    }
    if(doesRollAlreadyExist()) {
      showAlert(
        "Roll already exist",
        "There is already a roll in the wishlist with this perk selection",
        "info"
      )
      return false
    }
    return true
  }

  const isThereAPerkSelected = () => {
    return selectedPerks.some(perk =>
      perk.hash !== 0 &&
      perk.itemTypeDisplayName.toLowerCase() !== "origin trait"
    )
  }

  const doesRollAlreadyExist = () => {
    const currentRoll = getCurrentRoll();
    const currentRollKey = getComparableRollKey(currentRoll);
    return weaponWishlist.some(savedRoll =>
      currentRollKey === getComparableRollKey(savedRoll)
    )
  }

  const saveCurrentRoll = () => {
    const newRoll = getCurrentRoll()
    setWeaponWishlist([...weaponWishlist, newRoll]);
  }

  const getCurrentRoll = () => {
    return {
      id: crypto.randomUUID(),
      weaponHash: weapon!.hash,
      displayProperties: weapon!.displayProperties,
      weaponType: weapon!.weaponType,
      damageType: weapon!.damageType,
      savedPerks: selectedPerks,
      ammoType: weapon!.ammoType,
      iconWatermark: weapon!.iconWatermark
    }
  }

  return (
    weapon ? (
      <div>
        <WeaponDetailsHeader 
          weapon={weapon}
          onSaved={onCurrentRollSaved}
        />
        <div className="min-h-200 flex justify-center items-start py-10 gap-17">
          <WeaponStats
            weaponStatValues={weapon.stats}
            weaponType={weapon.weaponType.name}
            intrinsicPerk={weapon.perkPool?.[0]?.[0] ?? EMPTY_PERK}
          />
          <WeaponPerkSelector
            perkPool={weaponPerkPool ?? []}
            selectedPerks={selectedPerks}
            setSelectedPerks={setSelectedPerks}
          />
          <WeaponBasicInformation 
            weaponBasicInformation={getWeaponBasicInfo(weapon)}
          />
        </div>
      </div>
    ) : (
      <div className="flex flex-col justify-center items-center min-h-230 gap-5">
        <p className="text-xl">Loading weapon data...</p>
        <ScaleLoader
          width={32}
          height={64}
          color="#FFFFFF"
        />
      </div>
    )
  )
}
