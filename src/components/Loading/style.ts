import styled from "styled-components";

export const StyledLoading = styled.div`
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 2s ease;
  .spinner {
    background-image: linear-gradient(rgb(10, 10, 10) 35%, rgb(159, 21, 21));
    width: 100px;
    height: 100px;
    animation: spinning82341 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;

    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(135, 47, 9),
      0px 5px 20px 0px rgb(10, 10, 10);
  }
  .spinner1 {
    background-color: rgb(36, 36, 36);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);
  }
  p {
    color: var(--fix-white);
  }
  @keyframes spinning82341 {
    to {
      transform: rotate(360deg);
    }
  }
`;
