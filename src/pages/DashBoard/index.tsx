import { useContext } from "react";
import { RaceContext } from "../../providers/RacesProvider";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { ClassesContext } from "../../providers/ClassesProvider";

export function DashBoard() {
  const { selectRace } = useContext(RaceContext);
  const { classes, setSelectClasse } = useContext(ClassesContext);
  console.log(selectRace);
  return (
    <>
      <Header />
      <Container>
        {classes.map((cl, index) => {
          return <p key={index}>{cl.name}</p>;
        })}
      </Container>
    </>
  );
}
