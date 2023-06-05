import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 8px;
  height: 40px;
  border-radius: none;
  outline: none;
  padding-left: 12px;
  background-color: transparent;
  color: var(--color-text);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
    -1px -1px 6px rgba(255, 255, 255, 0.4);
  &:focus {
    background-color: var(--color-background);

    border: 2px solid transparent;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
      -1px -1px 6px rgba(255, 255, 255, 0.4),
      inset 3px 3px 10px rgba(0, 0, 0, 1),
      inset -1px -1px 6px rgba(255, 255, 255, 0.4);
  }
`;
export const StyledField = styled.fieldset`
  display: flex;
  border: none;
  flex-direction: column;
  width: 95%;
  label {
    color: var(--color-gray-400);
    font-weight: 600;
    margin-bottom: 8px;
  }
`;
