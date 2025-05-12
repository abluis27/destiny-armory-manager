import { WeaponStatsProps } from "../../../../interfaces/weaponDetails/perkStats/WeaponStatsProps"
import { WEAPON_BASIC_STATS, WEAPON_MAGAZINE_STATS } from "./layouts/weaponStatDetails"
import { getWeaponStatLayout } from "./layouts/weaponStatLayouts"
import StatBar from "./statBar"

const WeaponStats = ({ 
    weaponStatValues,
    weaponType,
    intrinsicPerk
 }: WeaponStatsProps) => {
    const weaponStatLayout = getWeaponStatLayout(weaponType, intrinsicPerk)

    return (
        <div className="bg-medium-dark rounded-sm min-w-90 border-1 border-medium">
            <div className="w-full bg-dark py-3 px-4 rounded-sm">
                <p>Stats</p>
            </div>
            <div className="px-5 pt-5 pb-15 flex flex-col gap-7">
                {/* Basic stats */}
                <div className="flex flex-col gap-4">
                    {
                        (
                            weaponStatLayout.basicStats.map(statHash => {
                                const statName = WEAPON_BASIC_STATS[statHash]
                                const statValue = weaponStatValues.stats[statHash].value
                                return (
                                    <StatBar
                                        key={statHash}
                                        statName={statName}
                                        statValue={statValue}
                                    />
                                );
                            })
                        )
                    }
                </div>
                {/* Magazine Stats */}
                <div className="flex flex-col gap-3 border-t-1 border-off-white pt-5">
                   {
                    (
                        weaponStatLayout.magazineStats.map(statHash => {
                            const statName = WEAPON_MAGAZINE_STATS[statHash]
                            const statValue = weaponStatValues.stats[statHash].value
                            return (
                                <div className="flex justify-between" key={statHash}>
                                    <p>{statName}</p>
                                    <p>{statValue}</p>
                                </div>
                            )
                        })
                    )
                   } 
                </div>
            </div>
        </div>
    )
}

export default WeaponStats