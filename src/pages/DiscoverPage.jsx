import { useContext } from "react";
import { CarContext } from "../context/CarContext";

import CardDeck from "../components/CardDeck";
import ActionButton from "../components/ActionButton";
const DiscoverPage = () => {
  const { dispatch } = useContext(CarContext);

  return (
    <div>
      <CardDeck />
      <ActionButton
        onPass={() => dispatch({ type: "SWIPE_LEFT" })}
        onLike={() => dispatch({ type: "SWIPE_RIGHT" })}
      />
    </div>
  );
};

export default DiscoverPage;
