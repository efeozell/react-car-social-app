// Gerekli importları yapıyoruz. Sadece stil dosyamıza ihtiyacımız var.
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Keşfet</h1>

      <button className={styles.filterButton}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M3 4h18v2H3V4zm2 7h14v2H5v-2zm2 7h10v2H7v-2z"></path>
        </svg>
        <span>Filtreler</span>
      </button>
    </header>
  );
}

export default Header;
