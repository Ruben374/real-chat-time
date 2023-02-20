import styled from "styled-components";
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  display: grid;
  gap: 4rem;
  grid-template-columns: 50% 40%;
  .left--container {
    p {
      font-weight: 700;
      font-size: 7rem;
      text-align: start;
      img {
        width: 6rem;
      }
    }
  }
  .right--container {
    background-color: #e5e5e5;
    border-radius: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    /* For everything smaller than 768px */
    grid-template-columns: 100%;
    gap: 2rem;
    .left--container {
      text-align: center;
      p {
        font-size: 4rem;
        text-align: center;
        img {
          width: 3rem;
        }
      }
    }
    .right--container {
      background-color: transparent;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1100px) {
    /* Insira o seu código CSS aqui */
    grid-template-columns: 40% 50%;
    gap: 2rem;
    .left--container {
      p {
        font-size: 5rem;
        img {
          width: 4rem;
        }
      }
    }
  }
`;

export const GoogleBtn = styled.a`
  width: 65%;
  display: flex;
  align-items: flex-start;
  background-color: #ffff;
  flex-wrap: nowrap;
  padding: 1rem;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: RGBA(0, 0, 0, 0.6);
  img {
    width: 1.25rem;
    margin-right: 0.7rem;
  }
  box-shadow: 1px 1px 3px black;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    /* For everything smaller than 768px */
    width: 100%;
    padding: 1.5rem;
  }
`;
