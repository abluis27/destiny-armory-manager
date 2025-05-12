import { PerkSelectorColumnProps } from "@/app/interfaces/weaponDetails/WeaponPerkSelectorInterfaces";
import PerkSelectorItem from "./perkSelectorIem";

const PerkSelectorColumn = ({
  perkPool,
  selectedPerk,
  onSelect,
}: PerkSelectorColumnProps) => {
  // For some reason some perks are duplicate in the same column? (Bungie's fault)
  const uniquePerks = perkPool.filter(
    (perk, index, self) =>
      index === self.findIndex((p) => p.hash === perk.hash)
  )

  return (
    <div className="flex flex-col items-center gap-3 px-4">
      {uniquePerks.map((perk) => {
        const isSelected = selectedPerk?.hash === perk.hash;
        return (
          <PerkSelectorItem
            key={perk.hash}
            perk={perk}
            isSelected={isSelected}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
};

export default PerkSelectorColumn;
