import { bungieBaseUrl } from "@/lib/utils";
import { WeaponIconProps } from "../interfaces/WeaponIconProps";

const WeaponIcon = ({ icon, iconWatermark, className }: WeaponIconProps) => {
    return (
      <div className={`inline-block relative ${className}`}>
        <img src={`${bungieBaseUrl}${icon}`} alt="Weapon icon" />
        <img
          src={`${bungieBaseUrl}${iconWatermark}`}
          alt="Watermark"
          className="absolute top-0 left-0 z-69"
        />
      </div>
    );
  };
  
  export default WeaponIcon;