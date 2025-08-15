import { Link } from "react-router-dom";
import styles from "./ConversationItem.module.css";

const ConversationItem = ({ conversation }) => {
  return (
    <Link to={`/sohbet/${conversation.id}`} className={styles.itemContainer}>
      <div className={styles.avatarContainer}>
        <img
          src={
            conversation.avatarUrl ||
            "https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
          }
          alt={conversation.userName}
          className={styles.avatar}
        />
        {conversation.isOnline && (
          <div className={styles.onlineIndicator}></div>
        )}
      </div>

      <div className={styles.content}>
        <span className={styles.userName}>{conversation.userName}</span>
        <p className={styles.lastMessage}>{conversation.lastMessage}</p>
      </div>

      <div className={styles.meta}>
        <span className={styles.timestamp}>{conversation.timestamp}</span>
        {conversation.unreadCount > 0 && (
          <span className={styles.unreadBadge}>{conversation.unreadCount}</span>
        )}
      </div>
    </Link>
  );
};

export default ConversationItem;
