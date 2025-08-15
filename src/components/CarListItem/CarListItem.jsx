import styles from "./CarListItem.module.css";

const CarListItem = ({ car }) => {
  const imageUrl = car.imageUrl || "https://via.placeholder.com/80";

  return (
    <div className={styles.itemContainer}>
      <img src={imageUrl} alt={car.model} className={styles.image} />

      <div className={styles.info}>
        <h3>{car.model}</h3>
        <p>
          {car.year} • {car.milage} km
        </p>

        {car.tags && car.tags.length > 0 && (
          <div className={styles.tags}>
            {car.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <button className={styles.editButton}>
        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      </button>
    </div>
  );
};

export default CarListItem;
