import { MessageCardContainer } from "./styles";
export function ChatCard() {
  return (
    <MessageCardContainer>
      <img src="/person.png" alt="person icon" />
      <div>
        <span className="message--author">Ruben André</span>
        <span className="message--time">17:00</span>
        <span className="message--content">ola meu mano!... </span>
        <span className="new--message">1</span>
      </div>
    </MessageCardContainer>
  );
}
