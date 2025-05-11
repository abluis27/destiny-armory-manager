import { WishListFilterKey } from "@/app/types/basicTypes";
import { WishListFilterSelectProps } from "../interfaces/wishList/WishlistFilterSelectProps";

const WishListFilterSelect = ({
  filterKey,
  setFilterKey
}: WishListFilterSelectProps) => {
  return (
    <select
      value={filterKey}
      onChange={(e) => setFilterKey(e.target.value as WishListFilterKey)}
      className="px-5 py-3 rounded-lg bg-medium-dark border-1 border-light-medium
      hover:border-blue-500"
    >
      <option value="ammoType">Ammo Type</option>
      <option value="damageType">Damage Type</option>
      <option value="weaponType">Weapon Type</option>
    </select>
  );
};

export default WishListFilterSelect;
