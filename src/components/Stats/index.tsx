import { useEffect, useState } from "react";
import { Stats } from "../../providers/RacesProvider";
import { StyledCardStatsHover, StyledStatsUl } from "./styles";

interface StatsProps {
  stats: Stats;
}
export function StatsCard({ stats }: StatsProps) {
  const [statName, setStatName] = useState([] as string[]);
  const [statValue, setStatValue] = useState([] as string[]);
  function toArray() {
    const keys = Object.keys(stats);
    const values = Object.values(stats);

    setStatName(keys);
    setStatValue(values);
  }
  useEffect(() => {
    console.log(stats);
    toArray();
  }, [stats]);
  return (
    <StyledCardStatsHover>
      {" "}
      <div className="circle"></div>
      <div className="circle"></div>
      <StyledStatsUl className="card__texture">
        {statName.map((name, index) => {
          return (
            <li key={index} className="li-name-stat">
              {name}
            </li>
          );
        })}
        {statValue.map((value) => {
          return (
            <li className="li-value-stat">
              {parseFloat(value) > 0 && parseFloat(value) < 1
                ? value + "%"
                : value}
            </li>
          );
        })}
      </StyledStatsUl>
    </StyledCardStatsHover>
  );
}
