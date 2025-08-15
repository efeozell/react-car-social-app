import { createContext, useEffect, useReducer } from "react";
import mockCars from "../data/mockCars";
import mockConversation from "../data/mockConversation";

//13 AĞUSTOS 18.29 En son aşşağıdaki chatID'de sellerId yazmışız onu sellerİd olarak düzelltim ve suanlık devam edebilirzi

const initialState = {
  allPosts: mockCars, //tüm arabalar
  visiblePosts: mockCars, //karşımıza çıkabilecek arabalar.
  currentIndex: 0, //ilk arabadan başlıyoruz 0. index.
  likedPosts: [], //beğenilenleri tutmak için
  passedPosts: [], //geçilenler birdaha karşımıza çıkmasın diye bunlarıda tutuyoruz.
  conversations:
    JSON.parse(localStorage.getItem("conversationList")) || mockConversation,
};

const carReducer = (state, action) => {
  switch (action.type) {
    case "SWIPE_RIGHT": {
      const currentCar = state.visiblePosts[state.currentIndex];
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        likedPosts: [...state.likedPosts, currentCar],
      };
    }
    case "SWIPE_LEFT": {
      const currentCar = state.visiblePosts[state.currentIndex];
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        passedPosts: [...state.passedPosts, currentCar],
      };
    }
    case "ADD_POST": {
      return {
        ...state,
        allPosts: [action.payload, ...state.allPosts],
        visiblePosts: [action.payload, ...state.visiblePosts],
      };
    }
    case "CREATE_CONVERSATION": {
      return {
        ...state,
        conversations: [action.payload, ...state.conversations],
      };
    }
    default:
      return state;
  }
};

export const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "conversationList",
      JSON.stringify(state.conversations)
    );
  }, [state.conversations]);

  const addPost = (postData) => {
    const newPost = {
      ...postData,
      id: Date.now().toString(),
    };
    dispatch({ type: "ADD_POST", payload: newPost });
  };

  const startOrGoToChat = async (seller) => {
    const existingConversation = state.conversations.find(
      (convo) => convo.id === seller.sellerİd
    );

    if (existingConversation) {
      return existingConversation.id;
    } else {
      const newConversation = {
        id: seller.sellerİd,
        userName: seller.sellerName,
        lastMessage: `${seller.model} arabanız hakkında...`,
        timestamp: `30 saniye önce`,
        unreadCount: 0,
        isOnline: true,
        avatarUrl:
          "https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png",
      };

      dispatch({ type: "CREATE_CONVERSATION", payload: newConversation });

      return newConversation.id;
    }
  };

  return (
    <CarContext.Provider value={{ state, dispatch, addPost, startOrGoToChat }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
