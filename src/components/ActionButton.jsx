import styles from "./ActionButton.module.css";

const ActionButton = ({ onPass, onLike }) => {
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={`${styles.actionButton} ${styles.passButton}`}
        onClick={onPass}
      >
        ❌
      </button>
      <button
        className={`${styles.actionButton} ${styles.likeButton}`}
        onClick={onLike}
      >
        ❤️
      </button>
    </div>
  );
};

export default ActionButton;
