import Link from "next/link";
import { WeaponPreviewInfo } from "../../types/zodSchemasForDatabase/weaponPreviewInfo";
import WeaponIcon from "../WeaponIcon";

interface WeaponSearchResultProps {
    weaponPreviewInfo: WeaponPreviewInfo;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeaponSearchResult = ({ weaponPreviewInfo, setIsOpen }: WeaponSearchResultProps) => {
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

export default WeaponSearchResult