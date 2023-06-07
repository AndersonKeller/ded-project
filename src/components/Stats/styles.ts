import { styled } from "styled-components";

export const StyledStatsUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 22px;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  li {
    color: var(--color-text);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 50%;
  }
  .li-name-stat {
    width: 50%;
    align-self: flex-start;
    text-transform: uppercase;
  }
  .li-value-stat {
    align-self: flex-end;
    color: var(--fix-white);
    text-align: right;
  }
  h3 {
    position: absolute;
    top: 0;
  }
`;
export const StyledCardStatsHover = styled.div`
  width: 100%;
  height: 400px;
  transition: all 0.2s;
  position: relative;
  transform: translate3d(0, 0, 0);
  animation: rotate_500 6s ease infinite;
  border-radius: 16px;
  cursor: pointer;
  .card__texture {
    background-image: linear-gradient(
      -80deg,
      hsl(0deg 81.15% 39.23% / 32%) 25%,
      hsla(0, 0%, 100%, 0) 45%
    );
  }
  &:hover {
    transform: scale(1.04);
  }
  @keyframes rotate_500 {
    from,
    to {
      animation-timing-function: ease-in;
      box-shadow: 0 0 0 hsl(0, 88%, 49%), 0.1rem 0 0 hsl(0, 58.8%, 39%),
        -0.2rem 0 0.75rem 0 hsla(0, 0%, 0%, 0.3);
      transform: rotateY(-10deg);
    }

    25%,
    75% {
      animation-timing-function: ease-out;
      box-shadow: 0 0 0 hsl(0, 81.6%, 40.6%), 0 0 0 hsl(0, 93.1%, 39.6%),
        -0.25rem -0.05rem 1rem 0.15rem hsla(0, 0%, 0%, 0.3);
      transform: rotateY(0deg);
    }

    50% {
      animation-timing-function: ease-in;
      box-shadow: -0.1rem 0 0 hsl(0, 77.3%, 41.4%), 0 0 0 hsl(0, 88.7%, 38.2%),
        -0.3rem -0.1rem 1.5rem 0.3rem hsla(0, 0%, 0%, 0.3);
      transform: rotateY(10deg);
    }
  }

  .circle {
    width: 100px;
    height: 100px;
    background: radial-gradient(#ff4900, #da242494);
    border-radius: 50%;
    position: absolute;
    animation: move-up6 6s ease-in infinite alternate-reverse;
  }

  .circle:nth-child(1) {
    top: -25px;
    left: -25px;
  }

  .circle:nth-child(2) {
    bottom: -25px;
    right: -25px;
    animation-name: move-down1;
  }

  @keyframes move-up6 {
    to {
      transform: translateY(60px);
    }
  }

  @keyframes move-down1 {
    to {
      transform: translateY(-60px);
    }
  }
`;
