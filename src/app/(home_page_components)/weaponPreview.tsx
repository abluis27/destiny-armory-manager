import Link from "next/link";
import { WeaponPreviewInfo } from "../types/zodSchemasForDatabase/weaponPreviewInfo";

interface WeaponPreviewProps {
    weaponPreviewInfo: WeaponPreviewInfo;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeaponPreview = ({ weaponPreviewInfo, setIsOpen }: WeaponPreviewProps) => {
    const bungieImagesBaseUrl = "https://www.bungie.net"
    return (
      <div key={weaponPreviewInfo.hash}>
        <Link href={`/weapons/${weaponPreviewInfo.hash}`}
        className="py-1 w-full flex uppercase"
        onClick={() => setIsOpen(false)}>
          <div className='w-13 inline-block relative'>
            <img
              src = {`${bungieImagesBaseUrl}${weaponPreviewInfo.displayProperties.icon}`} 
            />
            <img
              src = {`${bungieImagesBaseUrl}${weaponPreviewInfo.iconWatermark}`} 
              className="absolute top-0 left-0 z-69"
            />
          </div>
          <div className='pl-3'>
            <p>{weaponPreviewInfo.displayProperties.name}</p>
            <p className="text-sm">{weaponPreviewInfo.weaponType.name}</p>
          </div>
        </Link>
      </div>
    )
}

export default WeaponPreview