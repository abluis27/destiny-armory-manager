import { bungieBaseUrl } from "@/lib/utils"
import { WeaponDetailsComponentProps } from "../../../interfaces/weaponDetails/WeaponDetailsComponentProps"

const WeaponBasicInfo = ({ weapon }: WeaponDetailsComponentProps) => {
    const intrinsictPerk = weapon.perkPool?.[0]?.[0] ?? null
    
    return (
        // Container
        <div className="h-full flex flex-col 
        justify-center items-center gap-7 border-l-1 px-15 pb-15">
            {/* Weapon image */}
            <div>
                <img
                    src = {`${bungieBaseUrl}${weapon.screenshot}`}
                    className="max-w-90 rounded-md"
                />
            </div>
            {/* Actual basic info */}
            <div className="flex flex-col gap-3 bg-dark p-5 border-1 border-medium rounded-sm max-w-120">
                {/* Quote */}
                <p className="italic">{weapon.flavorText}</p>
                {/* Weapon element */}
                <div className="flex items-center gap-3">
                    <div className="max-w-7 px-1">
                        <img
                            src={`${bungieBaseUrl}${weapon.damageType.displayProperties.icon}`}
                        />
                    </div>
                    <p>{weapon.damageType.displayProperties.name}</p>
                </div>
                {/* Weapon ammo type */}
                <div className="flex items-center gap-3">
                    <div className="max-w-7">
                        <img
                            src={`${bungieBaseUrl}${weapon.ammoType.icon}`}
                        />
                    </div>
                    <p>{weapon.ammoType.name}</p>
                </div>
                {/* Intrinsic perk */}
                {
                    intrinsictPerk && (
                        <div className="flex border-t-1 border-off-white py-3 gap-3">
                            <div className="max-w-15">
                                <img
                                    src={`${bungieBaseUrl}${intrinsictPerk.displayProperties.icon}`}
                                />
                            </div>
                            <div>
                                <p>{intrinsictPerk.displayProperties.name}</p>
                                <p className="text-sm">{intrinsictPerk.displayProperties.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
      </div>
    )
}

export default WeaponBasicInfo