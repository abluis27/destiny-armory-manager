import { SavedRoll } from "@/app/types/basicTypes";

export interface WeaponWishListItemProps {
    savedRoll: SavedRoll
    onClickDelete: (wishListItemId: string) => void
}