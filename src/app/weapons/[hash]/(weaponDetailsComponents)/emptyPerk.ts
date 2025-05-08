import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo";

export const EMPTY_PERK: WeaponPerkInfo = {
    displayProperties: {
        description: "Empty perk",
        icon: "/img/misc/missing_icon_d2.png",
        name: "Empty perk"
    },
    itemTypeDisplayName: "Empty perk",
    hash: 0
}