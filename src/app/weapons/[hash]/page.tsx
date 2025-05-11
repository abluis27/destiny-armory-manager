"use client";
import { WeaponDetailsProps } from "@/app/interfaces/weaponDetails/WeaponDetailsProps";
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

const filterWeaponPerkPool = (perkPool: WeaponPerkInfo[][]) => {
  // We filter out the intrinsic perk since is going to be display
  // in the "WeaponBasicInfo" component
  // We filter out the kill trackers, they are useless here
  const weaponPerkPool = perkPool
      .slice(1) // Remove intrinsic perk.
      .filter(perkColumn =>
      // Filter out the kil tracker perks.
      (perkColumn ?? []).some(
          perk => {
              const name = perk.displayProperties.name.toLowerCase();
              return !name.includes("tracker");
      })
  );
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

  weapon?.damageType
  
  const onCurrentRollSaved = () => {
    // TODO: display error
    if (!weapon) return;

    const newRoll: SavedRoll = {
      id: crypto.randomUUID(),
      weaponHash: weapon?.hash,
      displayProperties: weapon?.displayProperties,
      weaponType: weapon?.weaponType,
      damageType: weapon.damageType,
      savedPerks: selectedPerks,
      ammoType: weapon.ammoType,
      iconWatermark: weapon.iconWatermark
    }

    setWeaponWishlist([...weaponWishlist, newRoll]);
    alert("Roll saved!")
  }

  return (
    weapon ? (
      <div>
        <WeaponDetailsHeader 
          weapon={weapon}
          onSaved={onCurrentRollSaved}
        />
        <div className="flex justify-center items-start py-10 gap-17">
          <WeaponStats
            weaponStatValues={weapon.stats}
            weaponType={weapon.weaponType.name}
            ammoType={weapon.ammoType.name}
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
      // Add a gif or something for the loading page (or even a Skeleton)
      <div className="flex justify-center items-center">
        <p>Loading data...</p>
      </div>
    )
  )
}
