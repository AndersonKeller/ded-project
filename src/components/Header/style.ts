import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  background-color: var(--color-black);
  filter: drop-shadow(7px -1px 42px var(--color-red-50));
  h1 {
    color: var(--color-red-50);
    filter: drop-shadow(2px 4px 6px black);
    backdrop-filter: opacity(0.2);
  }
  nav {
    display: flex;
    justify-content: space-between;
    width: 20%;
  }
`;
