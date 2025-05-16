import { WeaponStatsProps } from "@/interfaces/weaponDetails/WeaponPerkStatsInterfaces"
import StatBar from "./statBar"
import { WeaponStatInfo } from "@/types/zodSchemasForDatabase/weaponStatsInfo"

const WeaponStats = ({ 
    weaponStatsInfo
 }: WeaponStatsProps) => {

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
                            weaponStatsInfo.basicStats.map((stat: WeaponStatInfo) => (
                                    <StatBar
                                        key={stat.hash}
                                        statName={stat.name}
                                        statValue={stat.value}
                                    />
                                )
                            )
                        )
                    }
                </div>
                {/* Magazine Stats */}
                <div className="flex flex-col gap-3 border-t-1 border-off-white pt-5">
                   {
                    (
                        weaponStatsInfo.magazineStats.map((stat: WeaponStatInfo) => (
                                <div className="flex justify-between" key={stat.hash}>
                                    <p>{stat.name}</p>
                                    <p>{stat.value}</p>
                                </div>
                            )
                        )
                    )
                   } 
                </div>
            </div>
        </div>
    )
}

export default WeaponStats