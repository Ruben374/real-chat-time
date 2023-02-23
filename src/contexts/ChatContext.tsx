import { createContext, useState, ReactNode, useEffect } from "react";

type ChatProviderProps = {
  children: ReactNode;
};

export const ChatContext = createContext({} as any);

export function ChatProvider({ children }: ChatProviderProps) {
  const [chatWidth, setChatWidth] = useState("100%");
  const [openChatWidth, setOpenChatWidth] = useState("0%");

  function OpenChat() {}

  return (
    <ChatContext.Provider value={{ chatWidth, openChatWidth,setChatWidth,setOpenChatWidth}}>
      {children}
    </ChatContext.Provider>
  );
}
