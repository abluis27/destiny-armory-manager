import { showConfirmationAlert, showSuccessAlert } from "../(generalComponents)/sweetAlert";
import WeaponIcon from "../(generalComponents)/WeaponIcon";
import { WeaponWishListItemProps } from "../interfaces/wishList/WeaponWishListItemProps";
import PerkSelectorItem from "../weapons/[hash]/(weaponDetailsComponents)/perkSelectorComponents/perkSelectorIem";

const WeaponWishListItem = ({
    savedRoll,
    onClickDelete
}: WeaponWishListItemProps) => {
    const savedPerks = savedRoll.savedPerks

const onAdquieredRoll = async () => {
  const confirmed = await showConfirmationAlert(
    "Roll Acquired",
    "This item will be removed from the list."
  )

  if (confirmed) {
    onClickDelete(savedRoll.id)
    showSuccessAlert("Item deleted")
  }
}


    return (
        <div className="bg-medium-dark min-w-90 border-1 border-light-mediumrounded
        hover:border-blue-500 transition duration-300"
        >
            <div className="flex items-center justify-between pr-5">
                <div className="flex gap-5 p-3">
                    <WeaponIcon
                        icon={savedRoll.displayProperties.icon}
                        iconWatermark={savedRoll.iconWatermark}
                        className="w-15 border-1 border-light-medium"
                    />
                    <div className="flex items-center">
                        <p className="text-md">{savedRoll.displayProperties.name}</p>
                    </div>
                </div>
                <div className="w-10 b">
                    <img 
                        src="/icons/completed-icon.svg"
                        className="cursor-pointer bg-medium rounded-full
                        hover:bg-blue-500 transition duration-300"
                        onClick={() => onAdquieredRoll()}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center gap-5 py-4">
                {
                    (
                        savedPerks.map(perk => 
                            <PerkSelectorItem perk={perk}/>)
                    )
                }   
            </div>
        </div>
    )
}

export default WeaponWishListItem