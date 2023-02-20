import {
  Container,
  Header,
  SearchContainer,
  SerachArea,
  ChatContainer,
} from "./styles";
import { ChatCard } from "../ChatCard";
export function Chats() {
  return (
    <Container>
      <Header>
        <img src="/person.png" alt="person icon" />
        <div>
          <img src="/message-icon.png" alt="message icon" />
          <img src="/more-icon.png" alt="more icon" />
        </div>
      </Header>
      <SearchContainer>
        <SerachArea>
          <input placeholder="Buscar" type="search" />
          <img src="/search-icon.png" alt="search-icon" />
        </SerachArea>
      </SearchContainer>
      <ChatContainer>
        <p>Conversas</p>
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </ChatContainer>
    </Container>
  );
}
