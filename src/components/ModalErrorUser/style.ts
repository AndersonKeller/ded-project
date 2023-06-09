import styled from "styled-components";

export const StyledModal = styled.div`
  width: 300px;
  height: 200px;
  background-color: var(--color-gray-900);
  border: 4px solid var(--color-red-0);
  position: fixed;
  margin: auto;
  border-radius: 16px;
  padding: 16px 22px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  h3,
  p,
  a {
    color: var(--color-text);
  }
  .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    font-weight: 700;
    font-size: 22px;
  }
`;
