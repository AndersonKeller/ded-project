import { styled } from "styled-components";

export const StyledRaceCard = styled.section`
  width: 500px;
  max-height: 700px;
  margin-left: 64px;
  min-height: 500px;
  background-image: radial-gradient(rgb(71 64 64), rgb(41 4 4));
  //background-image: radial-gradient(#bd0c0c, #270c0c);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p,
  li {
    color: var(--color-text);
  }
  ul {
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    border-radius: 50%;
    margin: 0 auto;
    height: 160px;
    width: 250px;
    position: relative;
    transition: all 1s ease;
  }
  .div-stats-li {
    display: flex;
    align-items: center;
    padding: 24px;
    justify-content: space-evenly;
    width: 100%;
  }
  ul li:first-child {
    position: absolute;
    top: 0;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  li p {
    width: 50px;
    height: 50px;
    padding: 16px;
    border-radius: 50%;
    filter: drop-shadow(6px -6px 20px var(--color-red50));
  }
  .strength-stats {
    background-color: var(--color-red);
  }
  .dexterity-stats {
    background-color: var(--color-confirm);
  }
  .inteligence-stats {
    background-color: var(--color-blue);
  }
`;
export const StyledImg = styled.img`
  width: 50%;
  height: 50%;
  align-self: center;
  object-fit: contain;
  /* filter: drop-shadow(25px 9px 100px red); */
  filter: sepia(1);
  //background-image: radial-gradient(#bd0c0c, #270c0c);
  animation: animationImg 1s ease;
  overflow: hidden;
  transition: all 1s ease;
  cursor: zoom-in;
  margin-top: 40px;
  @keyframes animationImg {
    0% {
      opacity: 0;
      margin-top: 50px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }
  &:hover {
    transform: scale(1.2);
  }
`;
