import { WeaponIconProps } from "@/interfaces/WeaponIconProps"
import { bungieBaseUrl } from "@/lib/utils"
import Image from 'next/image'
import { useState } from "react"

const dimensions = 50

const WeaponIcon = ({ icon, iconWatermark, className }: WeaponIconProps) => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
      <>
      {isLoading && (
              <Image
                  src="/icons/loading-image.svg"
                  width={dimensions}
                  height={dimensions}
                  alt="Loading icon"
                  className="rounded-full object-cover"
              />
      )}
      {
        !error && (
          <div className={`inline-block relative ${className}`}>
            <Image
              src={`${bungieBaseUrl}${icon}`}
              width={dimensions}
              height={dimensions}
              alt="Weapon icon"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setError(true)
                setIsLoading(false)
              }}
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
      {error && (
      <Image
          src="/icons/error-loading-image.svg"
          width={dimensions}
          height={dimensions}
          alt="Error loading icon"
          className="rounded-full object-cover"
        />
      )}
      </>
    )
  }
  
  export default WeaponIcon