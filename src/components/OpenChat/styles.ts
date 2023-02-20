import styled from "styled-components";
export const Container = styled.div`
  background-color: ${(props) => props.theme.activeChatBackground};
  display: flex;
  flex-direction: column;
`;
export const Header = styled.header`
  height: 50px;
  background-color: ${(props) => props.theme.primary};
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
  height: 60px;
  background-color: blue;
`;
