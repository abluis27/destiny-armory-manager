import Link from "next/link";
import { WeaponPreviewInfo } from "../../types/zodSchemasForDatabase/weaponPreviewInfo";
import { bungieBaseUrl } from "@/lib/utils";
import WeaponIcon from "../WeaponIcon";

interface WeaponPreviewProps {
    weaponPreviewInfo: WeaponPreviewInfo;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeaponPreview = ({ weaponPreviewInfo, setIsOpen }: WeaponPreviewProps) => {
    return (
      <div key={weaponPreviewInfo.hash}>
        <Link href={`/weapons/${weaponPreviewInfo.hash}`}
        className="py-1 w-full flex uppercase"
        onClick={() => setIsOpen(false)}>
          <WeaponIcon
            icon={weaponPreviewInfo.displayProperties.icon}
            iconWatermark={weaponPreviewInfo.iconWatermark}
            className="w-13"
          /> 
          <div className='pl-3'>
            <p>{weaponPreviewInfo.displayProperties.name}</p>
            <p className="text-sm">{weaponPreviewInfo.weaponType.name}</p>
          </div>
        </Link>
      </div>
    )
}

export default WeaponPreview