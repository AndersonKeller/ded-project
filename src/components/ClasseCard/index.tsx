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

export function ClasseCard() {
  const { classes } = useContext(ClassesContext);
  const [hoverClasse, setHoverClasse] = useState<Classe>({} as Classe);
  function hello(classe: Classe) {
    console.log(classe);
    setHoverClasse(classe);
  }
  return (
    <StyledContainerClasses>
      <StyledCardClasse>
        <h2>SELECT YOUR CLASSE</h2>
        {classes.map((classe, index) => {
          return (
            <>
              <StyledClasseTag key={index}>
                <StyledClasseName>{classe.name}</StyledClasseName>

                <StyledWrapFill />
                <StyledStatsClasse onMouseEnter={() => hello(classe)}>
                  <p>MORE</p>
                  <span className="arrow" id="leftArrow"></span>
                  <span className="arrow" id="rightArrow"></span>
                </StyledStatsClasse>
              </StyledClasseTag>
            </>
          );
        })}
      </StyledCardClasse>
      <section>{hoverClasse.name}</section>
    </StyledContainerClasses>
  );
}
