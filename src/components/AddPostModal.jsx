import { useContext, useState } from "react";
import styles from "./AddPostModal.module.css";
import { CarContext } from "../context/CarContext";

const AddPostModal = ({ onClose }) => {
  const { addPost } = useContext(CarContext);
  const [formData, setFormData] = useState({
    model: "",
    year: "",
    mileage: "",
    location: "Denizli, Türkiye",
    imageUrl: "",
    sellerName: "Siz",
    type: "post",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData || !formData.year || !formData.mileage) {
      alert("Lütfen model, yıl ve kilometre alanlarını doldurun.");
      return;
    }
    addPost(formData);
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h2>Yeni İlan Ekle</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="post">Gönderi</option>
              <option value="listing">İlan</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="model">Model</label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="year">Yıl</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mileage">Kilometre</label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="imageUrl">Resim URL'si</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={onClose}
              className={`${styles.button} ${styles.cancelButton}`}
            >
              İptal
            </button>
            <button
              type="submit"
              className={`${styles.button} ${styles.submitButton}`}
            >
              İlanı Yayınla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPostModal;
