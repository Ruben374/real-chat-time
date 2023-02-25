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
type ScreenWidthProviderProps = {
  children: ReactNode;
};
export const ScreenWidthContext = createContext({} as any);

export function ScreenWidthProvider({ children }: ScreenWidthProviderProps) {
  const [chatWidth, setChatWidth] = useState("100%");
  const [openChatWidth, setOpenChatWidth] = useState("0%");

  return (
    <ScreenWidthContext.Provider
      value={{
        chatWidth,
        openChatWidth,
        setChatWidth,
        setOpenChatWidth,
      }}
    >
      {children}
    </ScreenWidthContext.Provider>
  );
}
