import styled from "styled-components";
import bg from "./../../assets/background.jpg";
export const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blue);
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  p,
  a {
    color: var(--color-text);
  }

 
`;
