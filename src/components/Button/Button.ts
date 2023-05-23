import styled from "styled-components";

export const StyledButton = styled.button`
  color: var(--fix-white);
  background-color: var(--color-blue);
  border-radius: 22px;
  &:focus,
  &:hover {
    background-image: radial-gradient(#6b61618c, #0b0101);
  }
  &:disabled {
    opacity: 0.5;
  }
`;
