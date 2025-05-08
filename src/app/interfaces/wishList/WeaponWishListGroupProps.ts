import { SavedRoll } from "@/app/types/basicTypes";

export interface WeaponWishListGroupProps {
    savedRolls: SavedRoll[]
    onClickDelete: (wishListItemId: string) => void
}