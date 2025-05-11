import { WishListFilterKey } from "@/app/types/basicTypes";

export interface WishListFilterSelectProps {
  filterKey: WishListFilterKey;
  setFilterKey: React.Dispatch<React.SetStateAction<WishListFilterKey>>;
}