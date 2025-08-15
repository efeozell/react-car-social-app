import styles from "./MessageBubble.module.css";

const MessageBubble = ({ message }) => {
  const containerClass =
    message.sender === "me" ? styles.myMessage : styles.theirMessage;

  const bubbleClass =
    message.sender === "me" ? styles.myBubble : styles.theirBubble;

  if (message.type === "listing_card") {
    return (
      <div className={`${styles.bubbleContainer} ${containerClass}`}>
        <div className={styles.listingCard}>
          <p>{message.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.bubbleContainer} ${containerClass}`}>
      <div className={`${styles.bubble} ${bubbleClass}`}>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
