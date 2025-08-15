import { useContext } from "react";
import { CarContext } from "../context/CarContext";
import { motion } from "framer-motion";
import CarCard from "./CarCard";
import styles from "./CardDeck.module.css";

const CardDeck = () => {
  const { state, dispatch } = useContext(CarContext);

  const { visiblePosts, currentIndex } = state;
  const currentCar = visiblePosts ? visiblePosts[currentIndex] : undefined;

  const handleDragEnd = (event, info) => {
    const swipeThresold = 100;

    if (info.offset.x > swipeThresold) {
      console.log("Beğenildi");
      dispatch({ type: "SWIPE_RIGHT" });
    } else if (info.offset.x < -swipeThresold) {
      console.log("Geçildi!");
      dispatch({ type: "SWIPE_LEFT" });
    }
  };

  if (!currentCar) {
    return <div>Keşfedilecek başka araba kalmadı.</div>;
  }

  return (
    <div className={styles.deckContainer}>
      <motion.div
        className={styles.cardWrapper}
        drag="x"
        onDragEnd={handleDragEnd}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <CarCard car={currentCar} />
      </motion.div>
    </div>
  );
};

export default CardDeck;
