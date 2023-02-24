import { Link } from "react-router-dom";
import { Container, GoogleBtn } from "./styles";
export default function Login() {
  return (
    <Container>
      <div className="left--container">
        <p>Real time </p>
        <p>
          Chat <img src="icons/chat-icon.svg" />
        </p>
        <span>©copyright by Ruben André</span>
      </div>
      <div className="right--container">
        <GoogleBtn href="http://localhost:3000/auth/google">
          <img src="/icons/google-logo.svg" alt="Google icon" />
          <span>Continue with Google</span>
        </GoogleBtn>
      </div>
    </Container>
  );
}
