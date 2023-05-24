import { useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import { RaceContext } from "../../providers/RacesProvider";
import { StyledAside } from "./style";
import { StyledButton } from "../Button/Button";

export function Aside() {
  const { chars } = useAuth();
  const { races } = useContext(RaceContext);
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
              <button className="btn-aside" key={index}>
                <h2>{item.name}</h2>
              </button>
            );
          })}
        </>
      )}
    </StyledAside>
  );
}
