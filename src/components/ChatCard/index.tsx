import { MessageCardContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { OpenChatContext } from "../../contexts/OpenChatContext";
import { ChatTypes } from "../../types";
export function ChatCard(props: ChatTypes) {
  const { setChatWidth, setOpenChatWidth, OpenNewChat, openChatId } =
    useContext(OpenChatContext);
  const [isOpen, setIsOpen] = useState(false);
  function OpenChat() {
    setChatWidth("0%");
    setOpenChatWidth("100%");
    OpenNewChat(props._id);
  }
  useEffect(() => {
    if (openChatId == props._id) setIsOpen(true);
    else setIsOpen(false);
  }, [openChatId]);

  return (
    <MessageCardContainer
      onClick={OpenChat}
      className={isOpen ? "open--card" : ""}
    >
      <img src="/person.png" alt="person icon" />
      <div>
        <span className="message--author">{props.author}</span>
        <span className="message--time">{props.time}</span>
        <span className="message--content">{props.body}</span>
        <span className="new--message">1</span>
      </div>
    </MessageCardContainer>
  );
}
