import { useContext } from "react";
import styles from "./CarCard.module.css";
import { CarContext } from "../context/CarContext";
import { useNavigate } from "react-router-dom";

//17.51 12 ağustost en son hatada kalmıştım.

const CarCard = ({ car }) => {
  const { startOrGoToChat } = useContext(CarContext);
  const navigate = useNavigate();

  const handleMessageClick = async (e) => {
    e.stopPropagation();

    const chatId = await startOrGoToChat({
      sellerİd: car.sellerİd,
      sellerName: car.sellerName,
      model: car.model,
    });

    console.log("dönen şey:", chatId);
    navigate(`/sohbet/${chatId}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={car.imageUrl} alt={car.model} className={styles.image} />
        {car.type === "listing" && (
          <span className={styles.listingTag}>İlan</span>
        )}

        {car.type === "premium" && (
          <span className={styles.premiumTag}>Premium</span>
        )}
      </div>
      <div className={styles.infoSection}>
        <h2 className={styles.model}>{car.model}</h2>
        <p className={styles.seller}>{car.sellerName}</p>
        <div className={styles.detailsRow}>
          <div className={styles.detailItem}>
            {/* Takvim İkonu */}
            <svg fill="white" width="16" height="16" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zM5 8V6h14v2H5z" />
            </svg>
            <span>{car.year}</span>
          </div>
          <div className={styles.detailItem}>
            {/* Kilometre İkonu */}
            <svg fill="white" width="16" height="16" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-1-8v4h2V9h-2z" />
            </svg>
            <span>{car.mileage} km</span>
          </div>
          <div className={styles.detailItem}>
            {/* Konum İkonu */}
            <svg fill="white" width="16" height="16" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S1.12 7 2.5 7 5 8.12 5 9.5 3.88 12 2.5 12z" />
            </svg>
            <span>{car.location}</span>
          </div>
        </div>
        <div className={styles.cardActions}>
          <button className={styles.messageButton} onClick={handleMessageClick}>
            🗨️ Mesaj
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
