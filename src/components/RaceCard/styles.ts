import { styled } from "styled-components";

export const StyledName = styled.h3`
  color: var(--color-text);
  position: absolute;
  left: -50px;
  &.transform-btn {
    animation: animationBtn 2s ease both;
  }
`;

export const StyledRaceCard = styled.section`
  width: 50%;
  max-height: 700px;
  margin-left: 64px;
  min-height: 500px;
  // background-image: radial-gradient(rgb(71 64 64), rgb(41 4 4));
  //background-image: radial-gradient(#bd0c0c, #270c0c);
  display: flex;
  padding: 24px 0;
  background-color: var(--color-black-50);
  border-right: 2px solid var(--color-gray-500);
  border-radius: 50%;
  filter: drop-shadow(0px 0px 30px black);
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: all 2s ease;
  animation: onSection 2s ease;
  p,
  h3,
  li {
    color: var(--color-text);
  }
  @keyframes onSection {
    0% {
      opacity: 0;
      margin-top: 50px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
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
  .div-not-select {
    width: 100%;
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

    background-image: radial-gradient(#4a4a4a2e, #0b0101);
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
  &.transform-left {
    position: relative;
    /* left: 100px;  */
    animation: animationChoose 2s ease both;
  }
  @keyframes animationChoose {
    0% {
      position: relative;
      left: 0;
    }
    100% {
      position: relative;
      left: 100px;
      border-right: none;
    }
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
  //animation: animationImg 1s ease;
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
export const StyledStatsCard = styled.section`
  width: 50%;
  min-height: 500px;
  max-height: 700px;
  background-color: var(--color-black-50);
  padding: 24px;
  border-left: 2px solid var(--color-gray-500);
  border-radius: 50%;
  filter: drop-shadow(0px 0px 30px black);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  animation: onSection 2s ease;
  
  h3,
  p,
  li {
    color: var(--color-text);
  }
  .infos-race-div {
    display: flex;
    position: absolute;
    bottom: 10px;
  }
  .stat-name {
    color: var(--fix-white);
  }
  .stat-value {
    color: var(--color-red-50);
    margin-left: 16px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 16px;
  }
  button {
    position: fixed;
    left: -50px;
    top: 45%;
    &.transform-btn {
      animation: animationBtn 2s ease both;
    }
  }
  @keyframes animationBtn {
    0% {
      position: absolute;
      left: -50px;
    }
    100% {
      left: 50px;
    }
  }
  &.transform-rigth {
    animation: animationChooser 2s ease both;
  }
  @keyframes animationChooser {
    0% {
      position: relative;
      right: 0;
    }
    100% {
      position: relative;
      right: 100px;
      border-left: none;
    }
  }
`;
export const StyledNotSelect = styled.div`
  width: 100%;
  text-align: center;
  padding: 32px;
  p {
    color: var(--color-text);
    font-size: 1.5rem;
  }
`;
