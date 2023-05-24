import { useContext, useEffect, useState } from "react";
import { StyledImg, StyledRaceCard } from "./styles";
import { RaceContext } from "../../providers/RacesProvider";

export function RaceCard() {
  const { selectRace } = useContext(RaceContext);

  return (
    <StyledRaceCard>
      {selectRace.name ? (
        <>
          <p>{selectRace.name}</p>
          <ul>
            <li>
              STR: <p className="strength-stats">{selectRace.stats.strength}</p>
            </li>
            <li>
              DEX:{" "}
              <p className="dexterity-stats">{selectRace.stats.dexterity}</p>
            </li>
            <li>
              INT:{" "}
              <p className="inteligence-stats">
                {selectRace.stats.inteligence}
              </p>
            </li>
          </ul>

          <StyledImg loading="lazy" src={selectRace.image} alt="" />
        </>
      ) : (
        <div>
          <p>Escolha uma classe</p>
        </div>
      )}
    </StyledRaceCard>
  );
}
