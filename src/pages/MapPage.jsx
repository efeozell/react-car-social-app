import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { mockLocations } from "../data/mockLocations";
import styles from "./MapPage.module.css";
import { useContext, useState } from "react";
import { CarContext } from "../context/CarContext";
import { useNavigate } from "react-router-dom";

const MapPage = () => {
  const apiKey = import.meta.env.VITE_GoogleMaps_API_KEY;
  const defaultPosition = { lat: 37.7833, lng: 29.0944 };
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const { startOrGoToChat } = useContext(CarContext);
  const navigate = useNavigate();

  const selectedLocation = selectedMarkerId
    ? mockLocations.find((loc) => loc.id === selectedMarkerId)
    : null;

  const handleMessageSend = async () => {
    if (!selectedLocation || !selectedLocation.info.sellerİd) return;

    const chatId = await startOrGoToChat({
      sellerİd: selectedLocation.info.sellerİd,
      sellerName: selectedLocation.info.name,
      model: selectedLocation.info.car,
    });
    navigate(`/sohbet/${chatId}`);
  };

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "80vh", width: "100%" }}>
        <Map
          defaultCenter={defaultPosition}
          defaultZoom={13}
          mapId="YOUR_UNIQUE_MAP_ID"
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          {mockLocations.map((location) => (
            <AdvancedMarker
              key={location.id}
              position={location.position}
              onClick={() => setSelectedMarkerId(location.id)}
            >
              <div
                className={`
                  ${styles.marker} 
                  ${
                    location.type === "friend"
                      ? styles.friendMarker
                      : styles.eventMarker
                  }
                `}
              ></div>
            </AdvancedMarker>
          ))}

          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.position}
              onCloseClick={() => setSelectedMarkerId(null)}
            >
              <div className={styles.infoWindowContent}>
                <h4>{selectedLocation.info.name}</h4>
                {selectedLocation.info.car && (
                  <p>{selectedLocation.info.car}</p>
                )}
                {selectedLocation.info.online && (
                  <p className={styles.onlineStatus}>Çevrimiçi</p>
                )}

                {selectedLocation.type === "friend" && (
                  <button
                    onClick={handleMessageSend}
                    className={styles.messageButton}
                  >
                    Mesaj Gönder
                  </button>
                )}
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapPage;
