import { PerkSelectorItemProps } from "@/app/interfaces/weaponDetails/perkSelector/PerkSelectorItemProps";
import { bungieBaseUrl } from "@/lib/utils"
import { useState } from "react";

const PerkSelectorItem = ({
  perk,
  isSelected,
  onSelect,
}: PerkSelectorItemProps) => {
    const [hovered, setHovered] = useState(false)
    const perkIcon = perk.displayProperties.icon;
    const itemType = perk.itemTypeDisplayName;

    if (!perkIcon || itemType.includes("Enhanced")) return null;
    return (
        <div className="relative inline-block">
            <div
                onClick={() => onSelect(perk)}
                className={`relative rounded-full p-1 cursor-pointer border-1 border-off-white transition
                ${isSelected ? "bg-blue-500" : "bg-medium"}
                `}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                src={`${bungieBaseUrl}${perkIcon}`}
                alt={perk.displayProperties.name}
                className="w-10 h-10 rounded-full object-cover"
                />

                {/* Center Overlay (hover trigger) */}
                <div className="" 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
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