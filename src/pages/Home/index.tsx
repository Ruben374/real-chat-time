import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loanding";
import { Container } from "./styles";
import { Chats } from "../../components/Chats";
import { OpenChat } from "../../components/OpenChat";
import { ContactInfo } from "../../components/ContactInfo";
import {
  OpenChatContext,
  OpenChatProvider,
} from "../../contexts/OpenChatContext";

import { UserProvider } from "../../contexts/UserContext";
import { UserContext } from "../../contexts/UserContext";
import { ScreenWidthContext } from "../../contexts/ScreenWidthContext";
export default function Home() {
  const { chatWidth, openChatWidth } = useContext(ScreenWidthContext);
  const { getUser, allowedUser } = useContext(UserContext);
  const [isAllowed, setIsAllowed] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    async function verify() {
      const searchParams = new URLSearchParams(window.location.search);
      const encodedToken = searchParams.get("token");
      if (encodedToken) {
        const token = decodeURIComponent(encodedToken);
        //
        await localStorage.setItem("token", token);
        await getUser();
        // allowedUser();
        setIsAllowed(true);
      } else {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          setIsAllowed(false);
        }
        await getUser();
        // console.log(token);
        setIsAllowed(true);
      }
    }
    verify();
  }, []);

  function HandleShow() {}

  return (
    <>
      {isAllowed ? (
        <OpenChatProvider>
          <Container chatWidth={chatWidth} openChatWidth={openChatWidth}>
            <Chats />
            <OpenChat />
          </Container>
        </OpenChatProvider>
      ) : (
        <Loading />
      )}
    </>
  );
}
