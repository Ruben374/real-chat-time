import { MessageCard, MessageTime } from "./styles";
import { MessageCardTypes } from "../../types";
export function SentMessageCard(props: MessageCardTypes) {
  return (
    <>
      <MessageCard>
        <div className="message--content">
          <span>{props.body}</span>
        </div>
        <div className="cut"></div>
      </MessageCard>
      <MessageTime>{props.time}</MessageTime>
    </>
  );
}
