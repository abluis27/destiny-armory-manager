import { WishListFilterKey, WeaponWishList, SavedRoll } from "@/app/types/basicTypes";

export interface WishListFilterSelectProps {
  filterKey: WishListFilterKey;
  setFilterKey: React.Dispatch<React.SetStateAction<WishListFilterKey>>;
}

export interface WeaponWishListProps {
    wishList: WeaponWishList
    onClickDelete: (wishListItemId: string) => void
}

export interface WeaponWishListItemProps {
    savedRoll: SavedRoll
    onClickDelete: (wishListItemId: string) => void
}

export interface WeaponWishListGroupProps {
    savedRolls: SavedRoll[]
    onClickDelete: (wishListItemId: string) => void
}

