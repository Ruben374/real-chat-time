import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  border-left: 3px solid ${(props) => props.theme.messageBackgroundSecondary};
`;

export const Header = styled.div`
  display: flex;
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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-bottom: 3px solid ${(props) => props.theme.messageBackgroundSecondary};
  img {
    width: 124px;
    margin-bottom: 1rem;
  }
  .contact--name {
    font-weight: 600;
    color: ${(props) => props.theme.textPrimary};
  }
  .contact--email {
    font-family: "Nunito Sans", sans-serif;
    color: ${(props) => props.theme.textSecondary};
    font-size: 0.8rem;
  }
`;
export const Bio = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > span:first-child {
    font-weight: 600;
    color: ${(props) => props.theme.textPrimary};
  }
  > span:last-child {
    font-family: "Nunito Sans", sans-serif;
    color: ${(props) => props.theme.textSecondary};
    font-size: 0.8rem;
  }
`;

export const Media = styled.div``;
