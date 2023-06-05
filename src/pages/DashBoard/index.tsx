import { useContext } from "react";
import { RaceContext } from "../../providers/RacesProvider";
import { Header } from "../../components/Header";

import { ContainerDash } from "./style";
import { ClasseCard } from "../../components/ClasseCard";

export function DashBoard() {
  const { selectRace } = useContext(RaceContext);

  return (
    <>
      <Header />
      <ContainerDash>
        <h3>RACE: {selectRace.name}</h3>
        <ClasseCard />
      </ContainerDash>
    </>
  );
}
