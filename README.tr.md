![App Screenshot](./images/carapp.gif)

### 📝 Proje Hakkında

Bu proje, kullanıcıların mobil öncelikli bir arayüzde, araba ilanlarını sağa (beğen) veya sola (geç) kaydırarak keşfetmelerini sağlayan interaktif bir platform prototipidir. Kullanıcılar kendi ilanlarını ekleyebilir, beğendikleri ilanları favorilerine kaydedebilir, ilan sahipleriyle sohbet başlatabilir ve harita üzerinde diğer kullanıcıları veya etkinlikleri görüntüleyebilir ve onlarla etkileşime girebilirsiniz.

Proje, modern React prensipleri ve hooks (`useReducer`, `useContext`) kullanılarak, UI kütüphanesi olmadan sıfırdan `CSS Modules` ile stilize edilmiştir.

### ✨ Özellikler

- **İnteraktif Kart Destesi:** `Framer Motion` ile oluşturulmuş akıcı, kaydırılabilir (swipe) ilan kartları.
- **Gelişmiş State Yönetimi:** `useReducer` ve `Context API` ile merkezi, öngörülebilir ve yönetilebilir state yapısı.
- **Kalıcı Veri Depolama:** Favori ilanlar ve sohbetlerin sayfa yenilendiğinde kaybolmamasını sağlayan `localStorage` entegrasyonu.
- **Çok Sayfalı Gezinti:** `React Router` kullanılarak oluşturulmuş, aralarında geçiş yapılabilen sayfalar (Keşfet, Harita, Sohbet, Profil).
- **Dinamik Rotalar:** Her sohbet ve ilan detayı için dinamik olarak oluşturulan sayfalar.
- **Sohbet Prototipi:** Sahte verilerle çalışan, gerçek zamanlı hissi veren sohbet listesi ve özel sohbet ekranı.
- **Harita Entegrasyonu:** `Google Maps API` kullanılarak oluşturulmuş, üzerinde filtrelenebilir kullanıcı ve etkinlik noktaları gösteren interaktif harita.
- **Modüler ve Sıfırdan CSS:** UI kütüphanesi kullanmadan, `CSS Modules` ve global CSS değişkenleri ile oluşturulmuş, bakımı kolay ve çakışmayan stil mimarisi.

### 🛠️ Kullanılan Teknolojiler

- **Frontend:** React, JavaScript (ES6+)
- **State Management:** React Hooks (`useReducer`, `useContext`, `useState`, `useMemo`)
- **Animasyon:** Framer Motion
- **Routing:** React Router
- **API İletişimi:** Axios, OpenAI API
- **Harita:** Google Maps API (`@vis.gl/react-google-maps`)
- **Depolama:** Tarayıcı `localStorage` API'ı
- **Build Aracı:** Vite

### 🚀 Kurulum

1.  **Projeyi klonlayın:**
    ```bash
    git clone [https://github.com/senin-kullanici-adin/proje-adi.git](https://github.com/senin-kullanici-adin/proje-adi.git)
    ```
2.  **Klasöre gidin ve bağımlılıkları yükleyin:**
    ```bash
    cd proje-adi
    npm install
    ```
3.  **.env dosyasını oluşturun:**
    Projenin ana dizininde `.env` adında bir dosya oluşturun ve içine aşağıdaki değişkenleri kendi API anahtarlarınızla ekleyin:
    ```
    VITE_OPENAI_API_KEY='...'
    VITE_GOOGLE_MAPS_API_KEY='...'
    ```
4.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```

## 👤 Geliştirici / Developer

Bu proje **Efe Özel** tarafından geliştirilmiştir.

- GitHub: [@kullanici-adin](https://github.com/efeozell)
- İnstagram: [Efe Özel](https://www.instagram.com/efeeozell/)
- Portfolio: [efeozel.com](https://www.efeozel.com)
