import { WeaponPerkSelectorProps } from "../interfaces/WeaponPerkSelectorProps "
import PerkSelectorColumn from "./perkSelectorColumn"
import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo"

const WeaponPerkSelector = ({ weapon, selectedPerks, setSelectedPerks }: WeaponPerkSelectorProps) => {
    // The first items is the intrinsic perk.
    // We don't want to show that in the perk selector.
    const weaponPerkPool = weapon.perkPool.slice(1)

   const handlePerkSelect = (columnIndex: number, perk: WeaponPerkInfo) => {
    setSelectedPerks((previousList) => {
        const updatedList = [...previousList]
        if(updatedList[columnIndex]?.hash != perk.hash) {
            updatedList[columnIndex] = perk
        } else {
            updatedList[columnIndex] = null    
        }
        console.log(updatedList)
        return updatedList
      })
    } 

    return (
        <div className="bg-medium-dark rounded-sm min-w-90 border-1 border-medium">
            <div className="w-full bg-dark py-3 px-4 rounded-sm">
                <p>Possible perks</p>
            </div>
            <div className="flex justify-center gap-7 py-5 px-5">
                    {
                        (
                            weaponPerkPool.map(
                                (perkPool, index) => 
                                <PerkSelectorColumn 
                                    perkPool={perkPool?? []}
                                    selectedPerk={selectedPerks[index]}
                                    onSelect={(perk) => handlePerkSelect(index, perk)}
                                />
                            )
                        )
                    }
                </div>
        </div>
    )
}

export default WeaponPerkSelector