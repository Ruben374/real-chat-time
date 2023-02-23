import styled from "styled-components";
export const Container = styled.div`
position: relative;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  border-right: 3px solid ${(props) => props.theme.messageBackgroundSecondary};
 
  @media only screen and (max-width: 990px) {
    /* For everything smaller than 768px */
    height: 100vh;
  }
`;
///Header,Search,MessageContainer
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  button {
    background: none;
    outline: none;
    border: none;
  }
`;
export const SearchContainer = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  padding: 0.8rem 1rem;
  border-bottom: 2px solid ${(props) => props.theme.messageBackgroundSecondary};
`;
export const SerachArea = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.messageBackgroundSecondary};
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  gap: 0.5rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  input {
    width: 100%;
    border: none;
    background-color: transparent;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme.textSecondary};
  }
  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    padding: 0.4rem 1rem;
    font-size: 2rem;
    color: ${(props) => props.theme.textPrimary};
  }
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
