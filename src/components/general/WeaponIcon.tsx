import { WeaponIconProps } from "@/interfaces/WeaponIconProps"
import { bungieBaseUrl } from "@/lib/utils"
import Image from 'next/image'

const WeaponIcon = ({ icon, iconWatermark, className }: WeaponIconProps) => {
    const dimensions = 50
    return (
      <div className={`inline-block relative ${className}`}>
        <Image
          src={`${bungieBaseUrl}${icon}`}
          width={dimensions}
          height={dimensions}
          alt="Weapon icon"
        />
        <Image
          src={`${bungieBaseUrl}${iconWatermark}`}
          width={dimensions}
          height={dimensions}
          alt="Weapon watermark"
          className="absolute top-0 left-0 z-69"       
        />
      </div>
    )
  }
  
  export default WeaponIcon