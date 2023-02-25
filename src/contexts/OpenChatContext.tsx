import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { useApi } from "../services/useApi";
import io from "socket.io-client";
import data from "../data.json";
import contact from "../contact.json";
import { UserContext } from "./UserContext";
type OpenChatProviderProps = {
  children: ReactNode;
};
export const OpenChatContext = createContext({} as any);
const socket = io("http://localhost:3000");
socket.on("connect", () => {});

function allowedUser() {
  socket.emit("token", localStorage.getItem("token"));
}

export function OpenChatProvider({ children }: OpenChatProviderProps) {
  const { userData } = useContext(UserContext);
  const Api = useApi();
  const [chats, setChats] = useState<any>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [openChat, setOpenChat] = useState<any>({});
  const [openChatMessages, setOpenChatMessages] = useState<any>([]);
  const [openChatId, setOpenChatId] = useState("");
  const [contacts, setContact] = useState<any>([]);
  function resetOpenChat() {
    setOpenChatMessages([]);
    //console.log("abriu o chat: ", chatId);
    setIsChatOpen(false);
    setOpenChatId("");
  }
  function OpenNewChat(chatId: string) {
    resetOpenChat();
    console.log("é esse:", chatId);
    let chat = chats.filter((item: any) => item._id === chatId);
    console.log(chat[0]);
    console.log(typeof chat[0]);

    setOpenChat(chat[0]);
    //setOpenChatMessages(chat[0].messages);
    //console.log("abriu o chat: ", chatId);
    console.log(chat[0].messages);
    setIsChatOpen(true);
    setOpenChatId(chatId);
  }

  function OpenEmptyChat(id: string, name: string, avatar: string) {
    resetOpenChat();
    const emptyChat = {
      _id: "empty",
      with: {
        _id: id,
        name: name,
        avatar: avatar,
      },
      messages: [],
    };
    setOpenChat(emptyChat);
    // console.log( typeof emptyChat.messages)
    setOpenChatMessages([]);
    setOpenChatId("empty");
    setIsChatOpen(true);
  }

  async function SendMessage(msg: any) {
    console.log("aqui eu chego");
    if (openChatId == "empty") {
      const chat = await Api.createChat(msg.author, msg.receiver)
        .then((data: any) => data)
        .catch((error: Error) => console.log(error.message));
      setOpenChat(chat.data);
      // console.log( typeof emptyChat.messages)
      setOpenChatMessages((prevMessages: any) => [...prevMessages, msg]);
      setOpenChatId(chat.data.id);
      setIsChatOpen(true);
      msg.chatId = chat.data.id;
      socket.emit("chat message", msg);
    } else {
      socket.emit("chat message", msg);
    }
  }
  async function getChats() {
    const chats = await Api.getChat()
      .then((data: any) => data)
      .catch((error: Error) => console.log(error.message));
    console.log(chats.data);
    await setChats(chats.data);
  }
  async function getContacts() {
    const contacts = await Api.getContacts()
      .then((data: any) => data)
      .catch((error: Error) => console.log(error.message));
    console.log(contacts.data);
    await setContact(contacts.data);
  }
  useEffect(() => {
    socket.on("received", (data) => {
      setOpenChatMessages((prevMessages: any) => [...prevMessages, data]);
    });
    getChats();
    getContacts();
  }, []);
  return (
    <OpenChatContext.Provider
      value={{
        chats,
        isChatOpen,
        OpenNewChat,
        openChat,
        openChatMessages,
        openChatId,
        resetOpenChat,
        contacts,
        OpenEmptyChat,
        SendMessage,
        allowedUser,
      }}
    >
      {children}
    </OpenChatContext.Provider>
  );
}
