import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loanding";
import { Container } from "./styles";
import { Chats } from "../../components/Chats";
import { OpenChat } from "../../components/OpenChat";

export default function Home() {
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

  return (
    <>
      {isAllowed ? (
        <Container>
          <Chats />
          <OpenChat />
          <div style={{ backgroundColor: "gray" }}>1</div>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
