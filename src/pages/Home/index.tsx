import { useContext } from "react";
import { Aside } from "../../components/Aside";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";

import { RaceContext } from "../../providers/RacesProvider";

export function Home() {
  const { loading } = useAuth();
  const { races } = useContext(RaceContext);

  return (
    <>
      <Header />
      <Container>
        {!loading ? (
          <>
            <Aside list={races} title={"CHOOSE RACE"} />
            <h1>Dash</h1>
          </>
        ) : (
          <div>carregando...</div>
        )}
      </Container>
    </>
  );
}
