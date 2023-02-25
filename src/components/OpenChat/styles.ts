import styled from "styled-components";
export const Container = styled.div`
  background-color: ${(props) => props.theme.activeChatBackground};
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 990px) {
    /* For everything smaller than 768px */
    display: ${(props) => props.color};
    //height: 100vh;
    z-index: 2;
    //position: relative;
    //left:1000px;
  }
`;
export const Header = styled.header`
  position: fixed;
  width: 75%;
  z-index: 1;
  height: 60px;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  border-bottom: 3px solid ${(props) => props.theme.messageBackgroundSecondary};
  > div {
    display: flex;
    align-items: center;
    > img {
      width: 40px;
      height: 40px;
      border-radius: 40px;
    }
  }
  .left {
    gap: 0.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.textPrimary};
  }
  .right {
    gap: 1rem;
  }
  button {
    background: none;
    outline: none;
    border: none;
  }
  .left button:first-child {
    display: none;
  }
  @media only screen and (max-width: 990px) {
    /* For everything smaller than 768px */
    width: 100%;
    .left button:first-child {
      display: block;
    }
  }
`;

export const MessageContainer = styled.main`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    //background: orange; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme.textSecondary}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    //border: 3px solid red; /* creates padding around scroll thumb */
  }
`;

export const Footer = styled.footer`
  position: fixed;
  width: 75%;
  z-index: 1;
  bottom: 0;
  height: 70px;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  .input--area {
    background-color: ${(props) => props.theme.messageBackgroundSecondary};
    padding: 1rem;
    flex: 1;
    height: 35px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    input {
      background: none;
      border: none;
      outline: none;
      flex: 1;
    }
  }
  button {
    background: none;
    outline: none;
    border: none;
  }
  @media only screen and (max-width: 990px) {
    /* For everything smaller than 768px */
    width: 100%;
  }
`;
export const DefaultBackground = styled.div`
  background-color: greenyellow;
  flex: 1;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textPrimary};
  @media only screen and (max-width: 990px) {
    /* For everything smaller than 768px */
    width: 100%;
    display: none;
  }
`;
