import styled from "styled-components";
import { NewChatModalStylesTypes } from "../../types";

export const Container = styled.div(
  ({ display }: NewChatModalStylesTypes) =>
    `
       position: absolute;
        top: 0%;
        left: 0%;
        width:100%;
        height: 100vh;
        display:${display};
        background-color:inherit;
        overflow:auto;
      }`
);

export const Header = styled.header`
  display: flex;
  // position: fixed;
  background-color: inherit;
  //width: inherit;
  z-index: 2;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  padding: 0.8rem 1rem;
  border-bottom: 3px solid ${(props) => props.theme.messageBackgroundSecondary};
  font-weight: 600;
  color: ${(props) => props.theme.textPrimary};
  gap: 0.8rem;
  button {
    background: none;
    outline: none;
    border: none;
  }
`;
export const ContactCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  >img{
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  &:hover {
    background-color: ${(props) => props.theme.activeChatBackground};
  }
  &.open--card {
    background-color: ${(props) => props.theme.activeChatBackground};
  }

  //background-color: ${(props) => props.theme.activeChatBackground};
  gap: 0.5rem;
  div {
    flex: 1;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
      "h"
      "f";
    gap: 0.1rem;
    .contact--name {
      grid-area: h;
      font-weight: 600;
      color: ${(props) => props.theme.textPrimary};
    }
    .contact--email {
      grid-area: f;
      color: ${(props) => props.theme.textSecondary};
      font-family: "Nunito Sans", sans-serif;
    }
  }
`;
