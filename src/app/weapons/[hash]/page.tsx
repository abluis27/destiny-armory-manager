"use client";

import { use, useEffect, useState } from "react"
import { DestinyWeaponData } from "@/app/types/destinyWeaponData"
import WeaponDetailsHeader from "./(weaponDetailsComponents)/weaponDetailsHeader";
import WeaponPerkSelector from "./(weaponDetailsComponents)/perkSelectorComponents/weaponPerkSelector";
import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo";
import WeaponBasicInfo from "./(weaponDetailsComponents)/weaponBasicInfo";
import WeaponStats from "./(weaponDetailsComponents)/weaponStats/weaponStats";

interface WeaponDetailsProps {
  params: Promise<{ hash: string }>
}

export default function WeaponDetails({ params }: WeaponDetailsProps) {
  const { hash } = use(params)
  const [weapon, setWeapon] = useState<DestinyWeaponData | null>(null)
  const [selectedPerks, setSelectedPerks] = useState<(WeaponPerkInfo | null)[]>([]);

  useEffect(() => {
    const getDestinyWeaponData = async () => {
      try {
        const response = await fetch(`/api/weapons/full?hash=${encodeURIComponent(hash)}`)
        const data = await response.json()
        setWeapon(data)
        setSelectedPerks(Array(data.perkPool.length - 1).fill(null))
      } catch (error) {
        console.error("API ERROR: ", error)
      }
    };
    getDestinyWeaponData();
  }, [hash]);
  
  return (
    weapon ? (
      <div>
        <WeaponDetailsHeader weapon={weapon}/>
        <div className="flex justify-center items-start py-10 gap-17">
          <WeaponStats
            weaponStatValues={weapon.stats}
            weaponType={weapon.weaponType.name}
          />
          <WeaponPerkSelector
            weapon={weapon}
            selectedPerks={selectedPerks}
            setSelectedPerks={setSelectedPerks}
          />
          <WeaponBasicInfo weapon={weapon}/>
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
