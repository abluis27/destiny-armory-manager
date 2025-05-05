import { bungieBaseUrl } from "@/lib/utils";
import { PerkSelectorColumnProps } from "../interfaces/PerkSelectorColumnProps";

const PerkSelectorColumn = ({
  perkPool,
  selectedPerk,
  onSelect,
}: PerkSelectorColumnProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {perkPool.map((perk) => {
        const perkIcon = perk.displayProperties.icon;
        const isSelected = selectedPerk?.hash === perk.hash;
        const itemType = perk.itemTypeDisplayName;

        if (!perkIcon || itemType === "") return null;

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
        );
      })}
    </div>
  );
};

export default PerkSelectorColumn;
