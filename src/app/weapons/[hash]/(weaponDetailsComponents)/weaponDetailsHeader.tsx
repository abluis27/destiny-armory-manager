import { bungieBaseUrl } from "@/lib/utils"
import { WeaponDetailsHeaderProps } from "@/app/interfaces/weaponDetails/WeaponDetailsHeaderProps"

const WeaponDetailsHeader = ({ onSaved, weapon }: WeaponDetailsHeaderProps) => {
    return (
      <div className="bg-medium-dark py-2 px-3 flex items-center justify-between
      lg:px-10 lg:py-3
      ">
        {/* Weapon info */}
        <div className="flex items-center gap-5">
          <div className='inline-block relative border-1 border-medium-light'>
            <img
                src={`${bungieBaseUrl}${weapon.displayProperties.icon}`}
                className="max-w-15"
                alt="Weapon icon"
            />
            <img
                src={`${bungieBaseUrl}${weapon.iconWatermark}`}
                className="absolute top-0 left-0 z-69 max-w-15"
                alt="Weapon season icon"
            />
          </div>
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