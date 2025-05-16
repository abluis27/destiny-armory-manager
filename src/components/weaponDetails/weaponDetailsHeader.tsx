import WeaponIcon from "@/components/general/WeaponIcon"
import { WeaponDetailsHeaderProps } from "@/interfaces/weaponDetails/WeaponDetailsInterfaces"

const WeaponDetailsHeader = ({ onSaved, weapon }: WeaponDetailsHeaderProps) => {
    return (
      <div className="bg-medium-dark py-2 px-3 flex items-center justify-between
      lg:px-10 lg:py-3
      ">
        {/* Weapon info */}
        <div className="flex items-center gap-5">
          <WeaponIcon
            icon={weapon.displayProperties.icon}
            iconWatermark={weapon.iconWatermark}
            className={"w-15 border-1 border-medium-light"}
          />
          <div>
            <p className="text-lg uppercase">{weapon.displayProperties.name}</p>
            <p className="text-sm uppercase">{weapon.weaponType.name}</p>
          </div>
        </div>

        {/* Save roll button */}
        <div  className="px-15">
          <button className="bg-medium py-2 px-5 rounded-lg border-2
           border-light-medium cursor-pointer
           transition duration-300 hover:bg-blue-500"
           onClick={() => onSaved()}
          >+ Save roll</button>
        </div>
      </div>
    )
}

export default WeaponDetailsHeader