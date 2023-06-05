import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  backdrop-filter: brightness(0.5);
  border-radius: 16px;
  padding: 22px;
  width: 100%;
  max-width: 400px;
  span {
    color: var(--color-red-50);
    font-weight: 500;
    text-transform: uppercase;
  }
  button {
    width: 95%;
  }
`;
