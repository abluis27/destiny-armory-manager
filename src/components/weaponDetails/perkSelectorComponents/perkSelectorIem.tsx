import { PerkSelectorItemProps } from "@/interfaces/weaponDetails/WeaponPerkSelectorInterfaces";
import { bungieBaseUrl } from "@/lib/utils"
import { useState } from "react";
import PerkImage from "./PerkImage";

const PerkSelectorItem = ({
  perk,
  isSelected,
  onSelect,
}: PerkSelectorItemProps) => {
    const [hovered, setHovered] = useState(false)
    const perkIcon = perk.displayProperties.icon;
    const itemType = perk.itemTypeDisplayName;

    if (!perkIcon || itemType.includes("Enhanced")) return null

    return (
        <div className="relative inline-block" key={perk.hash}>
            <div
                onClick={() => onSelect && onSelect(perk)}
                className={`relative rounded-full p-1 border-1 border-off-white
                ${onSelect && "cursor-pointer"}
                transition duration-300
                ${isSelected ? "bg-blue-500 hover:border-medium-dark" : "bg-medium hover:border-blue-500"}
                `}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
            <PerkImage
                alt={perk.displayProperties.name}
                imageUrl={`${bungieBaseUrl}${perkIcon}`}
            />
            </div>
            {/* Tooltip below the image */}
            {hovered && (
                <div className="absolute z-20 flex flex-col rounded-md
                bg-medium-dark border-1 border-dark">
                    <div className="w-full text-sm bg-dark p-3 rounded-t-md">
                        <p>{perk.displayProperties.name}</p>
                    </div>
                    <div className="text-sm shadow-lg w-max max-w-xs
                    p-3 whitespace-pre-line">
                        <p>{perk.displayProperties.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PerkSelectorItem