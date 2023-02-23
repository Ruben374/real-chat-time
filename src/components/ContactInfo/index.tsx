import { Container, Header, Info,Bio} from "./styles";
export function ContactInfo() {
  return (
    <Container>
      <Header>
        <button>
          <img src="/exit-icon.png" alt="Contact image" />
        </button>
        <span>Contact Info</span>
      </Header>
      <Info>
        <img src="/contact.png" alt="Contact image" />
        <span className="contact--name">Ruben André</span>
        <span className="contact--email">rubandre14@gmail.com</span>
      </Info>
      <Bio>
        <span>Biografia</span>
        <span>Boa Pessoa</span>
      </Bio>
    </Container>
  );
}
