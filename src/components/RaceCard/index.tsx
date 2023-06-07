import { useContext, useState } from "react";
import {
  StyledImg,
  StyledName,
  StyledNotSelect,
  StyledRaceCard,
  StyledStatsCard,
} from "./styles";
import { Race, RaceContext } from "../../providers/RacesProvider";
import { Button } from "../Button";
import { StatsCard } from "../Stats";
import { useNavigate } from "react-router-dom";

export function RaceCard() {
  const navigate = useNavigate();
  const { selectRace, setSelectRace } = useContext(RaceContext);
  const [chooseEffect, setChooseEffect] = useState(false);
  function setMyRace(race: Race) {
    setChooseEffect(!chooseEffect);
    setSelectRace(race);
    setTimeout(() => {
      navigate("dashboard");
    }, 2000);
  }
  return (
    <>
      {selectRace.name ? (
        <StyledRaceCard className={chooseEffect ? "transform-left" : ""}>
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
        </StyledRaceCard>
      ) : (
        <StyledNotSelect>
          <p>SELECT A RACE</p>
        </StyledNotSelect>
      )}

      {selectRace.name && (
        <StyledStatsCard className={chooseEffect ? "transform-rigth" : ""}>
          <StyledName className={chooseEffect ? "transform-btn" : ""}>
            {selectRace.name}
          </StyledName>
          <Button
            className={chooseEffect ? "transform-btn" : ""}
            onClick={() => setMyRace(selectRace)}
            label="CHOOSE"
          />
          <div className="infos-race-div">
            <h3>START STATS</h3>
            <p>{selectRace.description}</p>
          </div>
        </StyledStatsCard>
      )}
    </>
  );
}
