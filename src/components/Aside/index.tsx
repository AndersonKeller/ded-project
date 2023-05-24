import { useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Race, RaceContext } from "../../providers/RacesProvider";
import { StyledAside } from "./style";
import { StyledButton } from "../Button/Button";
import human from "../../assets/human.png";
import dwarf from "../../assets/dwarf.png";
import elf from "../../assets/elf.png";
import gnome from "../../assets/gnome.png";
import dragonBorn from "../../assets/dragonborn.png";
export function Aside() {
  const { chars } = useAuth();
  const { races, selectRace, setSelectRace } = useContext(RaceContext);
  function defineRace(race: Race) {
    console.log(race);
    const raceNew: Race = setImages(race);
    setSelectRace(raceNew);
  }
  function setImages(race: Race) {
    if (race.name == "Human") {
      race.image = human;
    }
    if (race.name == "Dwarf") {
      race.image = dwarf;
    }
    if (race.name == "Elf") {
      race.image = elf;
    }
    if (race.name == "DragonBorn") {
      race.image = dragonBorn;
    }
    if (race.name == "Gnome") {
      race.image = gnome;
    }
    return race;
  }
  return (
    <StyledAside>
      {chars.length > 0 ? (
        <>
          <h2>CHOOSE YOUR CHAR</h2>
          <StyledButton>CREATE</StyledButton>
          {chars.map((item, index) => {
            return (
              <>
                <button className="btn-aside" key={index}>
                  <h2>{item.name}</h2>
                </button>
                <p>
                  {item.race.name}/{item.classe.name}
                </p>
              </>
            );
          })}
        </>
      ) : (
        <>
          <h2>CHOOSE YOUR RACE</h2>

          {races.map((item, index) => {
            return (
              <button
                onClick={() => defineRace(item)}
                className="btn-aside"
                key={index}
              >
                <h2>{item.name}</h2>
              </button>
            );
          })}
        </>
      )}
    </StyledAside>
  );
}
