import styled from "styled-components";

interface ContainerProps {
  chatWidth: string;
  openChatWidth: String;
}

export const Container = styled.div(
  ({ chatWidth, openChatWidth }: ContainerProps) =>
    `  display: grid;
grid-template-columns: 25% 75%;
height: 100vh;
grid-template-rows: 100vh;
transition: grid-template-columns 0.2s;
@media only screen and (max-width: 990px) {
  /* For everything smaller than 768px */
  grid-template-columns: ${chatWidth} ${openChatWidth};
  grid-template-rows: 100vh;
  overflow-x: hidden;
}`
);
