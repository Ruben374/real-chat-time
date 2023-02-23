import { MessageCard, MessageTime } from "./styles";
import { MessageCardTypes } from "../../types";
export function ReceivedMessageCard(props: MessageCardTypes) {
  return (
    <>
      <MessageCard style={{ marginTop: "1.5rem" }}>
        <div className="cut"></div>
        <div className="message--content">
          <span>{props.body}</span>
        </div>
      </MessageCard>
      <MessageTime>{props.time}</MessageTime>
    </>
  );
}
