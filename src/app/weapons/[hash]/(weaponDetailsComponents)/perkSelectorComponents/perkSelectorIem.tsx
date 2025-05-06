import { bungieBaseUrl } from "@/lib/utils"
import { PerkSelectorItemProps } from "../../../../interfaces/weaponDetails/perkSelector/PerkSelectorItemProps"

const PerkSelectorItem = ({
  perk,
  isSelected,
  onSelect,
}: PerkSelectorItemProps) => {
    const perkIcon = perk.displayProperties.icon;
    const itemType = perk.itemTypeDisplayName;

    if (!perkIcon || itemType.includes("Enhanced")) return null;
    return (
        <div
            key={perk.hash}
            onClick={() => onSelect(perk)}
            className={`rounded-full p-1 cursor-pointer border-1 border-off-white transition
                ${isSelected ? "bg-blue-500" : "bg-medium"}
            `}
            >
            <img
                src={`${bungieBaseUrl}${perkIcon}`}
                alt={perk.displayProperties.name}
                className="w-10 h-10 rounded-full object-cover"
            />
            </div>
    )
}

export default PerkSelectorItem