import styles from "./ProfilePage.module.css";
import AddPostModal from "../components/AddPostModal";
import { useContext, useState } from "react";
import { CarContext } from "../context/CarContext";
import CarListItem from "../components/CarListItem/CarListItem";

const ProfilePage = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("arabalarim");
  const { state } = useContext(CarContext);

  const openModal = () => setIsModelOpen(true);
  const closeModal = () => setIsModelOpen(false);

  return (
    <div className={styles.profileContainer}>
      {/* Başlık */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Profil</h1>
        <span className={styles.settingsIcon}>⚙️</span>
      </header>

      {/* Kullanıcı Bilgileri */}
      <section className={styles.userInfo}>
        <div className={styles.profileImageContainer}>
          <img
            src="https://via.placeholder.com/100"
            alt="Profil Resmi"
            className={styles.profileImage}
          />
          <div className={styles.editIcon}>✏️</div>
        </div>
        <h2 className={styles.userName}>Efe Özel</h2>
        <span className={styles.userLocation}>İstanbul, Türkiye</span>
        <span className={styles.userSince}>Üye: 2023</span>
      </section>

      {/* İstatistikler */}
      <section className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>1284</span>
          <span className={styles.statLabel}>Takipçi</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>567</span>
          <span className={styles.statLabel}>Takip</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>892</span>
          <span className={styles.statLabel}>Beğeni</span>
        </div>
      </section>

      {/* Eylem Butonu */}
      <button className={styles.mainActionButton} onClick={openModal}>
        + Gönderi Paylaş
      </button>

      {/* Tab Navigasyon */}
      <nav className={styles.tabNav}>
        <button
          onClick={() => setActiveTab("arabalarim")}
          className={
            activeTab === "arabalarim" ? styles.tabActive : styles.tabButton
          }
        >
          Arabalarım
        </button>
        <button
          onClick={() => setActiveTab("begendiklerim")}
          className={
            activeTab === "begendiklerim" ? styles.tabActive : styles.tabButton
          }
        >
          Beğendiklerim
        </button>
        <button
          onClick={() => setActiveTab("ilanlarim")}
          className={
            activeTab === "ilanlarim" ? styles.tabActive : styles.tabButton
          }
        >
          İlanlarım
        </button>
      </nav>

      {/* İlan Listesi  */}
      <div className={styles.listingsContainer}>
        {activeTab === "arabalarim" &&
          state.allPosts
            .filter((car) => car.sellerName === "Efe Özel")
            .map((car) => <CarListItem key={car.id} car={car} />)}

        {activeTab === "begendiklerim" &&
          state.likedPosts.map((liked) => (
            <CarListItem key={liked.id} car={liked} />
          ))}

        {activeTab === "ilanlarim" &&
          state.allPosts
            .filter(
              (car) => car.sellerName === "Efe Özel" && car.type === "listing"
            )
            .map((car) => <CarListItem key={car.id} car={car} />)}
      </div>

      {isModalOpen && <AddPostModal onClose={closeModal} />}
    </div>
  );
};

export default ProfilePage;
