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
export default function Home() {
  const { chatWidth, openChatWidth } = useContext(OpenChatContext);
  const [isAllowed, setIsAllowed] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAllowed(true);
    } else {
      console.log("token not found");
      //navigate("/login");
      setIsAllowed(true);
    }
  }, []);

  function HandleShow() {}

  return (
    <>
      {isAllowed ? (
        <Container chatWidth={chatWidth} openChatWidth={openChatWidth} >  
          <Chats />
          <OpenChat />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
