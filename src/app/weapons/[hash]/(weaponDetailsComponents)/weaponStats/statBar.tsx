import { StatBarProps } from "@/app/interfaces/weaponDetails/perkStats/statBarProps";

const StatBar = ({
    statName,
    statValue
} : StatBarProps
) => {
    const percentage = (statValue / 100) * 100;
    return (
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between">
            <span>{statName}</span>
            <span>{statValue}</span>
          </div>
          <div className="w-full h-3 bg-dark">
            <div
              className="h-full bg-off-white"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
    ); 
}

export default StatBar