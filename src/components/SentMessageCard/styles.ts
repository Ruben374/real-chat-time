import styled from "styled-components";

export const MessageCard = styled.div`
  background-color: ${(props) => props.theme.messageBackgroundPrimary};
  max-width: 70%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  .cut {
    position: relative;
    top: 0;
    left: 0;
    border-top: 20px solid transparent;
    border-right: 20px solid ${(props) => props.theme.activeChatBackground};
    width: 0;
  }
  .message--content {
    padding: 0.5rem;
  }
`;
export const MessageTime = styled.span`
  margin-right: 20px;
  align-self: flex;
  text-align: end;
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => props.theme.textSecondary};
`;
