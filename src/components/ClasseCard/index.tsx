import { useContext, useState } from "react";
import { Classe, ClassesContext } from "../../providers/ClassesProvider";
import {
  StyledCardClasse,
  StyledClasseName,
  StyledClasseTag,
  StyledContainerClasses,
  StyledStatsClasse,
  StyledWrapFill,
} from "./style";
import { StatsCard } from "../Stats";
import { Button } from "../Button";
import { Race, RaceContext } from "../../providers/RacesProvider";

export function ClasseCard() {
  const { classes } = useContext(ClassesContext);
  const { selectRace } = useContext(RaceContext);
  const [hoverClasse, setHoverClasse] = useState<Classe>({} as Classe);
  function hover(classe: Classe) {
    console.log(classe);
    setHoverClasse(classe);
  }
  function defineChar() {
    const classe: Classe = hoverClasse;
    const race: Race = selectRace;
  }
  return (
    <StyledContainerClasses>
      <StyledCardClasse>
        <h2>SELECT YOUR CLASSE</h2>
        {classes.map((classe, index) => {
          return (
            <div key={index}>
              <StyledClasseTag>
                <StyledClasseName>{classe.name}</StyledClasseName>

                <StyledWrapFill />
                <StyledStatsClasse onMouseEnter={() => hover(classe)}>
                  <p>MORE</p>
                  <span className="arrow" id="leftArrow"></span>
                  <span className="arrow" id="rightArrow"></span>
                </StyledStatsClasse>
              </StyledClasseTag>
            </div>
          );
        })}
      </StyledCardClasse>
      <section>
        <StatsCard name={hoverClasse.name} stats={hoverClasse.stats} />
        <Button label="select" type="button" onClick={defineChar} />
      </section>
    </StyledContainerClasses>
  );
}
