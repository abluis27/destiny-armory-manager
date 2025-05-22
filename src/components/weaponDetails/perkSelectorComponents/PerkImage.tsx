import { PerkImageProps } from "@/interfaces/weaponDetails/WeaponPerkSelectorInterfaces";
import Image from 'next/image'
import { useState } from "react";

const iconDimensions = 40

const PerkImage = ({ imageUrl, alt }: PerkImageProps) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>      
      {isLoading && (
        <Image
            src="/icons/loading-image.svg"
            width={iconDimensions}
            height={iconDimensions}
            alt="Loading icon"
            className="rounded-full object-cover"
        />
      )}
      {
        !error && (
            <Image
                src={imageUrl}
                width={iconDimensions}
                height={iconDimensions}
                alt={alt}
                className={`rounded-md ${isLoading ? 
                    "opacity-0 absolute" : "opacity-100 relative"}`}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                setError(true);
                setIsLoading(false);
                }}
            />
        )
      }
      {error && (
        <Image
          src="/icons/error-loading-image.svg"
          width={iconDimensions}
          height={iconDimensions}
          alt="Error loading icon"
          className="rounded-full object-cover"
        />
      )}
    </>
  );
};

export default PerkImage;
