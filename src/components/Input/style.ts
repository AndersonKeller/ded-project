import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 8px;
  height: 40px;
  border-radius: none;
  outline: none;
  padding-left: 8px;
  background-color: transparent;
  color: var(--color-text);
  &:focus {
    background-color: var(--color-background);
    outline: 2px solid var(--color-confirm);
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
