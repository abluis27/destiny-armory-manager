"use client";

import { use, useEffect, useState } from "react"
import { DestinyWeaponData } from "@/app/types/destinyWeaponData"
import WeaponDetailsHeader from "./(weaponDetailsComponents)/weaponDetailsHeader";
import WeaponPerkSelector from "./(weaponDetailsComponents)/perkSelectorComponents/weaponPerkSelector";
import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo";
import WeaponBasicInformation from "./(weaponDetailsComponents)/WeaponBasicInformation";
import WeaponStats from "./(weaponDetailsComponents)/weaponStats/weaponStats";
import { WeaponDetailsProps } from "@/app/interfaces/weaponDetails/WeaponDetailsProps";
import { EMPTY_PERK } from "./(weaponDetailsComponents)/emptyPerk";
import { WeaponBasicInfo } from "@/app/types/basicTypes";

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

const onCurrentRollSaved = () => {
  alert("Balls")
}

export default function WeaponDetails({ params }: WeaponDetailsProps) {
  const { hash } = use(params)
  const [weapon, setWeapon] = useState<DestinyWeaponData | null>(null)
  const [weaponPerkPool, setWeaponPerkPool] = useState<WeaponPerkInfo[][]>()
  const [selectedPerks, setSelectedPerks] = useState<WeaponPerkInfo[]>([]);
  
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

  console.log(selectedPerks)
  
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
      <div>
        <p>Loading data...</p>
      </div>
    )
  )
}
