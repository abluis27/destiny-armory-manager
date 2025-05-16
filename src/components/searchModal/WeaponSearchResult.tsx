import { WeaponPreviewInfo } from "@/types/zodSchemasForDatabase/weaponPreviewInfo";
import Link from "next/link";
import WeaponIcon from "../general/WeaponIcon";

interface WeaponSearchResultProps {
    weaponPreviewInfo: WeaponPreviewInfo;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeaponSearchResult = ({ weaponPreviewInfo, setIsOpen }: WeaponSearchResultProps) => {
    return (
      <div>
        <Link href={`/weapons/${weaponPreviewInfo.hash}`}
        className="p-1 w-full flex uppercase
        hover:bg-darkest/25"
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

export default WeaponSearchResult