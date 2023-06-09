import styled from "styled-components";

export const StyledModalCharCreate = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  section {
    width: 100%;
    max-width: 400px;
    height: max-content;
    background-color: var(--fix-white);
    border-radius: 16px;
    position: relative;
    .close-modal {
      position: absolute;
      top: 0;
      right: 0;
      background: transparent;
      font-weight: 700;
      z-index: 1;
    }
  }
  form {
    background-color: var(--color-gray-900);
    h3 {
      color: var(--color-text);
      align-self: baseline;
    }
  }
`;
