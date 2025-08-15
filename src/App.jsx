import { NavLink, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import DiscoverPage from "./pages/DiscoverPage";
import styles from "./App.module.css";
import { useState } from "react";
import AddPostModal from "./components/AddPostModal";
import ChatListPage from "./pages/ChatListPage";
import ChatDetailPage from "./pages/ChatDetailPage";
import MapPage from "./pages/MapPage";

function App() {
  const [isModalOpen, setIsModelOpen] = useState(false);

  const openModal = () => setIsModelOpen(true);
  const closeModal = () => setIsModelOpen(false);

  return (
    <div className={styles.appContainer}>
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/sohbetler" element={<ChatListPage />} />
          <Route path="/sohbet/:sohbetId" element={<ChatDetailPage />} />
          <Route path="/harita" element={<MapPage />} />
        </Routes>
      </main>

      <button className={styles.addPostButton} onClick={openModal}>
        +
      </button>

      <nav className={styles.navbar}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search stroke-2"
            aria-hidden="true"
          >
            <path d="m21 21-4.34-4.34"></path>
            <circle cx="11" cy="11" r="8"></circle>
          </svg>
          Keşfet
        </NavLink>
        <NavLink
          to="/harita"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin stroke-1.5"
            aria-hidden="true"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Harita
        </NavLink>
        <NavLink
          to="/sohbetler"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle stroke-1.5"
            aria-hidden="true"
          >
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
          </svg>
          Sohbet
        </NavLink>
        <NavLink
          to="/profil"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user stroke-1.5"
            aria-hidden="true"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Profil
        </NavLink>
      </nav>

      {isModalOpen && <AddPostModal onClose={closeModal} />}
    </div>
  );
}

export default App;
