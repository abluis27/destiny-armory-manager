import PerkSelectorColumn from "./perkSelectorColumn"
import { WeaponPerkInfo } from "@/types/zodSchemasForDatabase/weaponPerkInfo"
import { EMPTY_PERK } from "../emptyPerk";
import { WeaponPerkSelectorProps } from "@/interfaces/weaponDetails/WeaponPerkSelectorInterfaces";

const WeaponPerkSelector = ({ 
    perkPool, selectedPerks, setSelectedPerks
}: WeaponPerkSelectorProps) => {

   const handlePerkSelect = (columnIndex: number, perk: WeaponPerkInfo) => {
    setSelectedPerks((previousList) => {
        const updatedList = [...previousList]
        if(updatedList[columnIndex]?.hash != perk.hash) {
            updatedList[columnIndex] = perk
        } else {
            updatedList[columnIndex] = EMPTY_PERK    
        }
        return updatedList
      })
    } 

    return (
        <div className="bg-medium-dark rounded-sm min-w-90 border-1 border-medium">
            <div className="w-full bg-dark py-3 px-4 rounded-sm">
                <p>Possible perks</p>
            </div>
            <div className="flex justify-center py-5 px-6 divide-x divide-light-medium">
                    {
                        (
                            perkPool.map(
                                (perkPool, index) => 
                                <PerkSelectorColumn
                                    key={index}
                                    perkPool={perkPool?? []}
                                    selectedPerk={selectedPerks[index]}
                                    onSelect={(perk: WeaponPerkInfo) => handlePerkSelect(index, perk)}
                                />
                            )
                        )
                    }
            </div>
        </div>
    )
}

export default WeaponPerkSelector