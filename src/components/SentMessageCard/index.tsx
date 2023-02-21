import { MessageCard, MessageTime } from "./styles";
export function SentMessageCard() {
  return (
    <>
      <MessageCard>
        <div className="message--content">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            commodi laborum facere! Asperiores temporibus reprehenderit nisi
            ullam veniam. Hic amet est necessitatibus eligendi recusandae
            consectetur consequatur nostrum perspiciatis a quidem? Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Perspiciatis earum
            sint omnis iste qui aliquid animi architecto ab, repellendus ratione
            provident neque, cumque aspernatur! Qui placeat vel nihil voluptate
            nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius saepe eaque quasi, possimus magni rerum quibusdam quia
            reiciendis ipsum, ipsa doloremque ratione esse blanditiis in
            molestiae dolor vero. Magni, at! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam repellendus atque tenetur
            tempora? Labore vel inventore, suscipit mollitia dignissimos nobis
            repellat ad ratione magnam animi ipsa, enim quos perferendis
            perspiciatis! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quaerat, deserunt! Voluptas soluta pariatur perspiciatis
            cupiditate eveniet reprehenderit quia corporis blanditiis architecto
            aspernatur dolores repellat voluptatibus rerum, esse doloremque
            dicta iure?
          </span>
        </div>
        <div className="cut"></div>
      </MessageCard>
      <MessageTime>17:00</MessageTime>
    </>
  );
}
