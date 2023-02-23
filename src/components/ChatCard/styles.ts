import styled from "styled-components"
export const MessageCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  &:hover{
    background-color:${(props)=>props.theme.activeChatBackground};
  }
  &.open--card{
    background-color:${(props)=>props.theme.activeChatBackground};
  }
  
  //background-color: ${(props) => props.theme.activeChatBackground};
  gap: 0.5rem;
  div {
    flex: 1;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-areas:
      "h b"
      "f g";
    gap: 0.1rem;
    .message--author {
      grid-area: h;
      font-weight: 600;
      color: ${(props) => props.theme.textPrimary};
    }
    .message--time {
      grid-area: b;
      justify-self: flex-end;
      font-size: 0.9rem;
      color: ${(props) => props.theme.textPrimary};
      font-family: "Nunito Sans", sans-serif;
    }
    .message--content {
      grid-area: f;
      color: ${(props) => props.theme.textSecondary};
      font-family: "Nunito Sans", sans-serif;
    }
    .new--message {
      grid-area: g;
      justify-self: flex-end;
      height: 16px;
      width: 16px;
      padding: 7px;
      border-radius: 16px;
      background-color: beige;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.7rem;
    }
  }
`;
