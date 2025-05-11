import { WeaponStatLayout } from "@/app/types/basicTypes"
import { WeaponPerkInfo } from "@/app/types/zodSchemasForDatabase/weaponPerkInfo"

// Default Stats
const DEFAULT_BASIC_STATS = [
    4043523819, // Impact
    1240592695, // Range
    155624089,  // Stability
    943549884,  // Handling
    4188031367, // Reload Speed
]
const DEFAULT_MAGAZINE_STATS = [
    4284893193, // Round Per Minute
    3871231066, // Magazine
]

// Bow Unique Stats
const BOW_BASIC_STATS = [
    4043523819, // Impact
    1591432999, // Accuracy
    155624089, // Stability
    943549884, // Handling
    4188031367, // Reload Speed
]

const BOW_MAGAZINE_STATS = [
    447667954 // Draw Time
]

// Sword Unique Stats
const SWORD_BASIC_STATS = [
    2837207746, // Swing Speed
    3022301683, // Charge Rate
    209426660, // Guard Resistance
    2762071195, // Guard Endurance
    4043523819, // Impact
]

const SWORD_MAGAZINE_STATS = [
    925767036 // Ammo Capacity
]

// Fusion Weapons Unique Stats
const FUSION_WEAPONS_MAGAZINE_STATS = [
    2961396640, // Charge Time
    3871231066 // Magazine
]

// Explosive Weapons Unique Stats
const EXPLOSIVE_WEAPONS_BASIC_STATS = [
    3614673599, // Blast Radius
    2523465841, // Velocity
    155624089, // Stability
    943549884, // Handling
    4188031367, // Reload Speed
]

// Glaive Unique stats
const GLAIVE_BASIC_STATS = [
    4043523819, // Impact
    1240592695, // Range
    1842278586,  // Shield Duration
    943549884,  // Handling
    4188031367, // Reload Speed
]

export const getWeaponStatLayout = (weaponType: string, intrinsicPerk: WeaponPerkInfo): WeaponStatLayout => {
    const normalizedWeaponType = weaponType.toLowerCase()
    const normalizedIntrinsicPerkName = intrinsicPerk.displayProperties.name.toLowerCase()

    if(normalizedWeaponType === "bow") {
        return {
            basicStats: BOW_BASIC_STATS,
            magazineStats: BOW_MAGAZINE_STATS
        }
    }
    if(normalizedWeaponType === "sword") {
        return {
            basicStats: SWORD_BASIC_STATS,
            magazineStats: SWORD_MAGAZINE_STATS
        }
    }
    if(normalizedWeaponType.includes("fusion")) {
        return {
            basicStats: DEFAULT_BASIC_STATS,
            magazineStats: FUSION_WEAPONS_MAGAZINE_STATS
        }
    }
    if(normalizedWeaponType.includes("launcher") 
        || normalizedIntrinsicPerkName.includes("rocket")) {
        return {
            basicStats: EXPLOSIVE_WEAPONS_BASIC_STATS,
            magazineStats: DEFAULT_MAGAZINE_STATS
        }
    }
    if(normalizedWeaponType === "glaive") {
        return {
            basicStats: GLAIVE_BASIC_STATS,
            magazineStats: DEFAULT_MAGAZINE_STATS
        }
    }
    return {
        basicStats: DEFAULT_BASIC_STATS,
        magazineStats: DEFAULT_MAGAZINE_STATS
    }
}