import { MessageCard,MessageTime } from "./styles";
export function ReceivedMessageCard() {
  return (
    <>
      <MessageCard style={{ marginTop: "1.5rem" }}>
        <div className="cut"></div>
        <div className="message--content">
          <p>
            ola meu amigo dod dodd dojdjs odjdojsodj dodojd ojdojd dojdodj
            dojsodj odjsdj osjdsojso odjsdo
          </p>
        </div>
      </MessageCard>
     <MessageTime>
      17:00
     </MessageTime>
    </>
  );
}
