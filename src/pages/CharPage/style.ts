import styled from "styled-components";
export const StyledCharPage = styled.div`
  height: 600px;
  width: 600px;
  margin: 0 auto;
  filter: drop-shadow(2px 4px 6px var(--color-red-50));
  background-color: var(--color-black-50);
  margin-top: 40px;
  border-radius: 0 8% 0 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
  overflow: hidden;
  .card-clamp {
    width: 100%;
    height: 100%;
    /* filter: drop-shadow(2px 4px 6px var(--color-red-50)); */
    background-color: var(--color-black);
    border: 6px double var(--color-text);
    .header-clamp {
      height: 50px;
      width: 100%;
      backdrop-filter: brightness(3);
      display: flex;
      align-items: center;
      justify-content: space-around;
      p,
      h4 {
        color: var(--color-text);
      }
    }
  }
`;
