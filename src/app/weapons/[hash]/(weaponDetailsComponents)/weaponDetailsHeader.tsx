import { bungieBaseUrl } from "@/lib/utils"
import { WeaponDetailsComponentProps } from "./interfaces/WeaponDetailsComponentProps"

const WeaponDetailsHeader = ({ weapon }: WeaponDetailsComponentProps) => {
    return (
      <div className="bg-medium-dark py-2 px-3 flex items-center gap-5
      lg:px-7 lg:py-3
      ">
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
    )
}

export default WeaponDetailsHeader