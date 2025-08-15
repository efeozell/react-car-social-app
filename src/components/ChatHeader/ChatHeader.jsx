import { useNavigate } from "react-router-dom";
import styles from "./ChatHeader.module.css";

const ChatHeader = ({ conversationInfo }) => {
  const navigate = useNavigate();

  if (!conversationInfo) {
    return <div className={styles.header}>Yükleniyor...</div>;
  }

  return (
    <header className={styles.header}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <img
        src={conversationInfo.avatarUrl}
        alt={conversationInfo.userName}
        className={styles.avatar}
      />

      <div className={styles.userInfo}>
        <p className={styles.userName}>{conversationInfo.userName}</p>
        {conversationInfo.isOnline && (
          <p className={styles.status}>Çevrimiçi</p>
        )}
      </div>

      <div className={styles.action}>
        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>
    </header>
  );
};

export default ChatHeader;
