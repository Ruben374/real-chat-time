import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loanding";
import { Container } from "./styles";

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
    }
  }, []);

  return (
    <>
      {isAllowed ? (
        <Container>
          <h1>Hello Word</h1>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
