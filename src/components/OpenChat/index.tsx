import {
  Container,
  Header,
  MessageContainer,
  Footer,
  DefaultBackground,
} from "./styles";
import { ReceivedMessageCard } from "../ReceivedMessageCard";
import { SentMessageCard } from "../SentMessageCard";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext, useState } from "react";
import { OpenChatContext } from "../../contexts/OpenChatContext";
import { UserContext } from "../../contexts/UserContext";

export function OpenChat() {
  const [message, setMessage] = useState("");
  const {
    setOpenChatWidth,
    setChatWidth,
    isChatOpen,
    openChat,
    openChatMessages,
    resetOpenChat,
    SendMessage,
  } = useContext(OpenChatContext);
  const { userData } = useContext(UserContext);
  function openChatCard() {
    setOpenChatWidth("0%");
    setChatWidth("100%");
    resetOpenChat();
  }
  function sendMessage(msg: any) {
    console.log(msg)
    console.log(msg)
    const obj = {
      type: "text",
      body: message,
      author: userData._id,
      receiver: msg._id,
      chatId: openChat.id,
    };
    SendMessage(obj);
    setMessage("");
  }
  const name = "Ruben André";
  return (
    <Container>
      {isChatOpen ? (
        <>
          <Header>
            <div className="left">
              <button onClick={openChatCard}>
                <img src="/back-icon.png" width="25px" />
              </button>
              <img src={openChat.with.avatar} />
              <span>{openChat.with.name}</span>
            </div>
            <div className="right">
              <button>
                <img src="search-icon.png" alt="search icon" />
              </button>
              <button>
                <img src="more-icon.png" alt="more icon" />
              </button>
            </div>
          </Header>
          <MessageContainer>
            {openChat._id != "empty" &&
              openChatMessages.map((item: any, key: number) =>
                item.author == name ? (
                  <SentMessageCard body={item.body} time={item.time} key={2} />
                ) : (
                  <ReceivedMessageCard
                    body={item.body}
                    time={item.time}
                    key={2}
                  />
                )
              )}
          </MessageContainer>
          <Footer>
            <button>
              <img src="/emoji-icon.png" alt="emoji icon" />
            </button>
            <button>
              <img src="/file-icon.png" alt="file icon" />
            </button>

            <div className="input--area">
              <input
                type="text"
                placeholder="Escreva uma mensagem"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button onClick={() => sendMessage(openChat.with)}>
              <img src="/micro-icon.png" alt="micro icon" />
            </button>
          </Footer>
        </>
      ) : (
        <DefaultBackground>
          <span>Clique e comece um bate papo!</span>
        </DefaultBackground>
      )}
    </Container>
  );
}
