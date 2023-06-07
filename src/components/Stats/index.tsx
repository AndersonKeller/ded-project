import { useContext, useEffect, useState } from "react";
import { Stats } from "../../providers/RacesProvider";
import { StyledCardStatsHover, StyledStatsUl } from "./styles";
import { ClassesContext } from "../../providers/ClassesProvider";

interface StatsProps {
  stats: Stats;
  name: string;
}
export function StatsCard({ stats, name }: StatsProps) {
  const { classes } = useContext(ClassesContext);
  const [statName, setStatName] = useState([] as string[]);
  const [statValue, setStatValue] = useState([] as string[]);
  function toArray() {
    const keys = Object.keys(stats ? stats : classes[0].stats);
    const values = Object.values(stats ? stats : classes[0].stats);

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
        <h3>{name}</h3>
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
