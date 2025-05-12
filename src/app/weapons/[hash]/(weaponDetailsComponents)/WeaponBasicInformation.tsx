import { WeaponBasicInformationProps } from "@/app/interfaces/weaponDetails/WeaponDetailsInterfaces"
import { bungieBaseUrl } from "@/lib/utils"

const WeaponBasicInformation = ({ weaponBasicInformation }: WeaponBasicInformationProps) => {
    return (
        // Container
        <div className="h-full flex flex-col 
        justify-center items-center gap-7 border-l-1 px-15 pb-15">
            {/* Weapon image */}
            <div>
                <img
                    src = {`${bungieBaseUrl}${weaponBasicInformation.screenshot}`}
                    className="max-w-90 rounded-md"
                />
            </div>
            {/* Actual basic info */}
            <div className="flex flex-col gap-3 bg-dark p-5 border-1 border-medium rounded-sm max-w-120">
                {/* Quote */}
                <p className="italic">{weaponBasicInformation.flavorText}</p>
                {/* Weapon element */}
                <div className="flex items-center gap-3">
                    <div className="max-w-7 px-1">
                        <img
                            src={`${bungieBaseUrl}${weaponBasicInformation.damageType.icon}`}
                        />
                    </div>
                    <p>{weaponBasicInformation.damageType.name}</p>
                </div>
                {/* Weapon ammo type */}
                <div className="flex items-center gap-3">
                    <div className="max-w-7">
                        <img
                            src={`${bungieBaseUrl}${weaponBasicInformation.ammoType.icon}`}
                        />
                    </div>
                    <p>{weaponBasicInformation.ammoType.name}</p>
                </div>
                {/* Intrinsic perk */}
                {
                    <div className="flex border-t-1 border-off-white py-3 gap-3">
                        <div className="max-w-15">
                            <img
                                src={`${bungieBaseUrl}${weaponBasicInformation.intrinsictPerk.displayProperties.icon}`}
                            />
                        </div>
                        <div>
                            <p>{weaponBasicInformation.intrinsictPerk.displayProperties.name}</p>
                            <p className="text-sm">{weaponBasicInformation.intrinsictPerk.displayProperties.description}</p>
                        </div>
                    </div>
                }
            </div>
      </div>
    )
}

export default WeaponBasicInformation