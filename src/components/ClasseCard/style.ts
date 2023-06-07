import { styled } from "styled-components";

export const StyledCardClasse = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 32px;
  border: 1px solid wheat;
  padding: 32px;
  /* background-color: var(--color-background); */
  background: linear-gradient(302deg, #d11212ab, #0c0909);
  h2 {
    color: var(--color-text);
    font-size: 1rem;
  }
`;
export const StyledClasseName = styled.h3`
  color: var(--color-gray-200);
  align-self: center;
  text-align: center;
`;
export const StyledClasseTag = styled.div`
  display: flex;
  padding: 8px 22px;
  flex-direction: column;
  position: relative;
  border-radius: 16px;
  backdrop-filter: sepia(1);
`;
export const StyledWrapFill = styled.div`
  border-left: 1px solid var(--fix-white);
  height: 24px;
  position: absolute;
  bottom: -24px;
  border-bottom: 1px solid var(--fix-white);
  width: 200px;
`;
export const StyledStatsClasse = styled.div`
  border: 1px solid wheat;
  width: 100px;
  height: 48px;
  position: absolute;
  right: -139px;
  bottom: -48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    color: var(--fix-white);
  }
  .arrow {
    position: absolute;
    transition: 0.2s;
    background-color: var(--color-red);
    top: 35%;
    width: 11%;
    height: 30%;
  }

  #leftArrow {
    right: -3.5%;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
  }

  #rightArrow {
    -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
    right: 92%;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
  }
  @keyframes leftArrow8 {
    from {
      transform: translate(0px);
    }

    to {
      transform: translateX(10px);
    }
  }

  @keyframes rightArrow8 {
    from {
      transform: translate(0px);
    }

    to {
      transform: translateX(-10px);
    }
  }
`;
export const StyledContainerClasses = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  justify-content: space-between;
  section {
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
