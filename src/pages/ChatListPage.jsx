import { useContext, useState } from "react";
import styles from "./ChatListPage.module.css";
import mockConversation from "../data/mockConversation";
import ConversationItem from "../components/ConversationItem/ConversationItem";
import { CarContext } from "../context/CarContext";

const ChatListPage = () => {
  const { state } = useContext(CarContext);
  const [conversations, setConversations] = useState(state.conversations);
  const [input, setİnput] = useState("");

  const filteredConversations = state.conversations.filter((conversation) =>
    conversation.userName.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <header className={styles.header}>Sohbetler</header>
      <div>
        <label className={styles.label}>
          <input
            className={styles.input}
            placeholder="Sohbet arayın..."
            value={input}
            onChange={(e) => setİnput(e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        {filteredConversations.map((conversation) => {
          return (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatListPage;
