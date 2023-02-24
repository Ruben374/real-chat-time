import { createContext, useState, ReactNode, useEffect } from "react";
import { NewChatModal } from "../components/NewChatModal";
import data from "../data.json";
import contact from "../contact.json";
type OpenChatProviderProps = {
  children: ReactNode;
};
export const OpenChatContext = createContext({} as any);
export function OpenChatProvider({ children }: OpenChatProviderProps) {
  const [chatWidth, setChatWidth] = useState("100%");
  const [openChatWidth, setOpenChatWidth] = useState("0%");
  const [chats, setChats] = useState(data);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [openChat, setOpenChat] = useState({});
  const [openChatMessages, setOpenChatMessages] = useState([]);
  const [openChatId, setOpenChatId] = useState("");
  const [contacts, setContact] = useState(contact);
  function OpenNewChat(chatId: string) {
    console.log("é esse:", chatId);
    let chat = chats.filter((item) => item._id === chatId);
    console.log(chat[0]);
    console.log(typeof chat[0]);

    setOpenChat(chat[0]);
    //setOpenChatMessages(chat[0].messages);
    //console.log("abriu o chat: ", chatId);
    console.log(chat[0].messages);
    setIsChatOpen(true);
    setOpenChatId(chatId);
  }
  function resetOpenChat() {
    setOpenChatMessages([]);
    //console.log("abriu o chat: ", chatId);
    setIsChatOpen(false);
    setOpenChatId("");
  }
  function OpenEmptyChat(id: string, name: string, chatId: string) {
    const emptyChat = {
      _id: chatId,
      users: [
        {
          id: "1234",
          name: "Ruben André",
        },
        {
          id: id,
          name: name,
        },
      ],
      messages: [],
    };

    //setOpenChat(emptyChat);
    // console.log( typeof emptyChat.messages)
    //setOpenChatMessages([]);
    //setOpenChatId(chatId);
    //setIsChatOpen(true);
  }

  return (
    <OpenChatContext.Provider
      value={{
        chatWidth,
        openChatWidth,
        setChatWidth,
        setOpenChatWidth,
        chats,
        isChatOpen,
        OpenNewChat,
        openChat,
        openChatMessages,
        openChatId,
        resetOpenChat,
        contact,
        OpenEmptyChat,
      }}
    >
      {children}
    </OpenChatContext.Provider>
  );
}
