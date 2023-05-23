import { Race } from "../../providers/RacesProvider";
import { StyledAside } from "./style";
interface AsideProps {
  title: string;
  list: Race[];
}

export function Aside({ title, list }: AsideProps) {
  return (
    <>
      <StyledAside>
        <h2>{title}</h2>

        {list.map((item, index) => {
          return (
            <button key={index}>
              <h2>{item.name}</h2>
            </button>
          );
        })}
      </StyledAside>
    </>
  );
}
