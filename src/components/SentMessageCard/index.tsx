import { MessageCard, MessageTime } from "./styles";
export function SentMessageCard() {
  return (
    <>
      <MessageCard>
        <div className="message--content">
           <span style={{background:"red"}}>
            ola meu amigo dod dodd dojdjs odjdojsodj dodojd ojdojd dojdodj
            dojsodj odjsdj osjdsojso odjsdo
          </span>
        </div>
        <div className="cut"></div>
      </MessageCard>
      <MessageTime>17:00</MessageTime>
    </>
  );
}
