export interface ChatTypes {
  _id: string;
  author: string;
  time: string;
  body: number;
  type: string;
}

export interface MessageCardTypes {
  body: string;
  time: string;
}
export interface NewChatModalTypes {
  display: string;
  onclick: () => void;
}

export interface NewChatModalStylesTypes {
  display: string;
}
