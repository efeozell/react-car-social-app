import { useState } from "react";
import styles from "./ChatInput.module.css";

const ChatInput = ({ onSend }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    onSend(newMessage);
    setNewMessage("");
  };

  const handleQuickReplyClick = (replyText) => {
    onSend(replyText);
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.quickReplies}>
        <button
          className={styles.quickReply}
          onClick={() =>
            handleQuickReplyClick("Arabanı Satmayı düşünüyor musun?")
          }
        >
          Arabanı satmayı düşünüyor musun?
        </button>
        <button
          className={styles.quickReply}
          onClick={() =>
            handleQuickReplyClick("Değiş tokuş yapmayı düşünür müsün?")
          }
        >
          Değiş tokuş yapmayı düşünür müsün?
        </button>
      </div>

      <form className={styles.mainInputArea} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.textInput}
          placeholder="Mesajını yaz..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className={styles.sendButton} type="submit">
          <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
