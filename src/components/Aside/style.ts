import styled from "styled-components";

export const StyledAside = styled.aside`
  width: 150px;
  position: fixed;
  left: 0;
  padding: 50px;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--color-text);
  text-align: center;
  height: 100vh;
  background-color: var(--color-red-0);
  transition: all 1s ease;
  &:hover {
    width: 250px;
    transition: all 1s ease;
    background-color: var(--color-red-0);
  }
  h2 {
    width: max-content;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-black-50);
    color: var(--color-text);
    border-radius: 32px;
    border: 4px double var(--color-red-50);
    cursor: pointer;
  }
  button:hover,
  button:focus {
    transform: scale(0.9);
    background-color: var(--color-black);
    h2 {
      transform: scale(1.2);
      font-weight: 800;
    }
  }
  button:focus {
    background-color: var(--color-red);
  }
  small {
    font-size: 1rem;
  }
  img {
    width: max-content;
    height: 100%;
    max-height: 200px;
    object-fit: contain;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
