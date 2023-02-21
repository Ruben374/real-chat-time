import styled from "styled-components";

export const MessageCard = styled.div`
  background-color: ${(props) => props.theme.messageBackgroundSecondary};
  max-width: 70%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  .cut {
    position: relative;
    top: 0;
    left: 0;
    border-top: 20px solid transparent;
    border-left: 20px solid ${(props) => props.theme.activeChatBackground};
    width: 0;
  }
  .message--content {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const MessageTime = styled.span`
  margin-left: 20px;
  align-self: flex;
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => props.theme.textSecondary};
`;
