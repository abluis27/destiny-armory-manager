import WeaponIcon from "@/components/general/WeaponIcon"
import { WeaponDetailsHeaderProps } from "@/interfaces/weaponDetails/WeaponDetailsInterfaces"
import SaveRollButton from "./SaveRollButton"

const WeaponDetailsHeader = ({ onSaved, weapon }: WeaponDetailsHeaderProps) => {
    return (
      <div className="bg-medium-dark p-3 flex items-center justify-between
      lg:px-10 lg:py-3
      ">
        {/* Weapon info */}
        <div className="flex items-center gap-5">
          <WeaponIcon
            icon={weapon.displayProperties.icon}
            iconWatermark={weapon.iconWatermark}
            className={"border-1 border-medium-light"}
          />
          <div>
            <p className="text-lg uppercase">{weapon.displayProperties.name}</p>
            <p className="text-sm uppercase">{weapon.weaponType.name}</p>
          </div>
        </div>

        {/* Save roll button */}
        <div  className="px-15">
          <SaveRollButton
            onSaved={onSaved}
            className="hidden md:block"
          />
        </div>
      </div>
    )
}

export default WeaponDetailsHeader