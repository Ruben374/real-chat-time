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
import { UserContext } from "../../contexts/UserContext";
export default function Home() {
  const { chatWidth, openChatWidth } = useContext(OpenChatContext);
  const { setUserData } = useContext(UserContext);
  const [isAllowed, setIsAllowed] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const encodedToken = searchParams.get("token");
    /* vindo da url de login */
    if (encodedToken) {
      const token = decodeURIComponent(encodedToken);
      //console.log(token);
      localStorage.setItem("token", token);
      setIsAllowed(true);
    } else {
      /* vindo normal */
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        setIsAllowed(false);
      }
      setIsAllowed(true);
    }

    /*   */
  }, []);

  function HandleShow() {}

  return (
    <>
      {isAllowed ? (
        <Container chatWidth={chatWidth} openChatWidth={openChatWidth}>
          <Chats />
          <OpenChat />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
