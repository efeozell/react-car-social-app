## AI Car Discovery - Tinder for Cars

![Türkçe Anlatım İçin Tıklayın](./README.tr.md)

## Can you see live?

https://react-car-social-c9u1qftoa-efeozells-projects.vercel.app/

### 📝 About The Project

This project is an interactive platform prototype that allows users to discover car listings by swiping right (like) or left (pass) on a mobile-first interface, similar to Tinder. Users can add their own listings, save their liked listings as favorites, start chats with listing owners, and view other users or events on a map.

The project was built from scratch using modern React principles and hooks (`useReducer`, `useContext`), and styled with `CSS Modules` without relying on a UI component library.

![App Screenshot](./images/carapp.gif)

### ✨ Features

- **Interactive Card Deck:** Fluid, swipeable listing cards built with `Framer Motion`.
- **Advanced State Management:** A centralized, predictable, and manageable state structure using `useReducer` and `Context API`.
- **Persistent Data:** `localStorage` integration to ensure favorite listings and chats are not lost on page refresh.
- **Multi-Page Navigation:** Navigable pages (Discover, Map, Chat, Profile) created with `React Router`.
- **Dynamic Routes:** Dynamically generated pages for each chat and listing detail.
- **Chat Prototype:** A chat list and private chat screen that feels real-time, working with mock data.
- **Map Integration:** An interactive map built with the `Google Maps API`, displaying filterable user and event markers.
- **Modular CSS from Scratch:** A maintainable and non-conflicting style architecture created with `CSS Modules` and global CSS variables, without any UI library.

### 🛠️ Tech Stack

- **Frontend:** React, JavaScript (ES6+)
- **State Management:** React Hooks (`useReducer`, `useContext`, `useState`, `useMemo`)
- **Animation:** Framer Motion
- **Routing:** React Router
- **API Communication:** Axios, OpenAI API
- **Maps:** Google Maps API (`@vis.gl/react-google-maps`)
- **Storage:** Browser `localStorage` API
- **Build Tool:** Vite

### 🚀 Setup

1.  **Clone the project:**
    ```bash
    git clone [https://github.com/your-username/project-name.git](https://github.com/your-username/project-name.git)
    ```
2.  **Navigate to the directory and install dependencies:**
    ```bash
    cd project-name
    npm install
    ```
3.  **Create the .env file:**
    In the project's root directory, create a file named `.env` and add the following variables with your own API keys:
    ```
    VITE_OPENAI_API_KEY='...'
    VITE_GOOGLE_MAPS_API_KEY='...'
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 👤 Geliştirici / Developer

Bu proje **Efe Özel** tarafından geliştirilmiştir.

- GitHub: [@kullanici-adin](https://github.com/efeozell)
- İnstagram: [Efe Özel](https://www.instagram.com/efeeozell/)
- Portfolio: [efeozel.com](https://www.efeozel.com)
