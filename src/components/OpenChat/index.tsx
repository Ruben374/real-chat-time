import { Container, Header, MessageContainer, Footer } from "./styles";
import { ReceivedMessageCard } from "../ReceivedMessageCard";
import { SentMessageCard } from "../SentMessageCard";

export function OpenChat() {
  return (
    <Container>
      <Header></Header>
      <MessageContainer>
        <ReceivedMessageCard />
        <ReceivedMessageCard />
        <ReceivedMessageCard />
        <SentMessageCard />
        <SentMessageCard />
        <SentMessageCard />
      </MessageContainer>
      <Footer></Footer>
    </Container>
  );
}
