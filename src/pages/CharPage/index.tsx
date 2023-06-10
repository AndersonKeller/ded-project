import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { useChar } from "../../hooks/useChar";
import { StyledCharPage } from "./style";

export function CharPage() {
  const { myChar } = useChar();
  return (
    <>
      <Header />
      <Container>
        <StyledCharPage>
          <div className="card-clamp">
            <div className="header-clamp">
              <h4>{myChar.name}</h4>
              <p>
                {myChar.classe.name}/{myChar.race.name}
              </p>
            </div>
          </div>
        </StyledCharPage>
      </Container>
    </>
  );
}
