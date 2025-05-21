import { WeaponBasicInformationProps } from "@/interfaces/weaponDetails/WeaponDetailsInterfaces"
import { bungieBaseUrl } from "@/lib/utils"
import Image from 'next/image'
import WeaponScreenshot from "./WeaponScreenshot"

const iconDimensions = 50
const intrinsicPerkIconDimension = 70

const WeaponBasicInformation = ({ 
    weaponBasicInformation,
    className
}: WeaponBasicInformationProps) => {

    return (
        // Container
        <div className={`h-full flex flex-col 
        justify-center items-center gap-7 2xl:border-l-1 2xl:border-off-white 
        px-15 lg:pb-15 ${className}`}>
            {/* Weapon image */}
            <WeaponScreenshot
                screenshotUrl={`${bungieBaseUrl}${weaponBasicInformation.screenshot}`} 
            />

            {/* Actual basic info */}
            <div className="min-w-100 flex flex-col gap-3 bg-dark p-5 
            border-1 border-medium rounded-sm max-w-120">
                {/* Quote */}
                <p className="italic">{weaponBasicInformation.flavorText}</p>
                {/* Weapon element */}
                <div className="flex items-center gap-3">
                    <div className="max-w-7 px-1">
                        <Image
                            src = {`${bungieBaseUrl}${weaponBasicInformation.damageType.icon}`}
                            width={iconDimensions}
                            height={iconDimensions}
                            alt={"Weapon damage element icon"}
                        />
                    </div>
                    <p>{weaponBasicInformation.damageType.name}</p>
                </div>
                {/* Weapon ammo type */}
                <div className="flex items-center gap-3">
                    <div className="max-w-7">
                        <Image
                            src = {`${bungieBaseUrl}${weaponBasicInformation.ammoType.icon}`}
                            width={iconDimensions}
                            height={iconDimensions}
                            alt={"Weapon ammo type icon"}
                        />
                    </div>
                    <p>{weaponBasicInformation.ammoType.name}</p>
                </div>
                {/* Intrinsic perk */}
                {
                    <div className="flex border-t-1 border-off-white py-3 gap-3">
                        <div className="max-w-15">
                            <Image
                                src = {`${bungieBaseUrl}${weaponBasicInformation.intrinsictPerk.displayProperties.icon}`}
                                width={intrinsicPerkIconDimension}
                                height={intrinsicPerkIconDimension}
                                alt={"Weapon intrinsic perk icon"}
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