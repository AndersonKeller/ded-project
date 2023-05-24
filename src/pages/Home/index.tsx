import { Aside } from "../../components/Aside";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";

export function Home() {
  const { loading } = useAuth();

  return (
    <>
      <Header />
      <Container>
        {!loading ? (
          <>
            <Aside />
          </>
        ) : (
          <div>carregando...</div>
        )}
      </Container>
    </>
  );
}
