import { useParams } from "react-router-dom";
import mockMessage from "../data/mockMessage";
import mockConversation from "../data/mockConversation";
import MessageList from "../components/MessageList";
import ChatHeader from "../components/ChatHeader/ChatHeader";
import { useContext, useEffect, useState } from "react";
import ChatInput from "../ChatInput/ChatInput";

import styles from "./ChatDetailPage.module.css";
import { CarContext } from "../context/CarContext";

const ChatDetailPage = () => {
  const { sohbetId } = useParams();
  const { state } = useContext(CarContext);
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem(`chat_${sohbetId}`);

    if (savedMessages) {
      return JSON.parse(savedMessages);
    }

    return mockMessage[sohbetId] || [];
  });

  const currentConversation = state.conversations.find(
    (convo) => convo.id === sohbetId
  );

  useEffect(() => {
    localStorage.setItem(`chat_${sohbetId}`, JSON.stringify(messages));
  }, [messages, sohbetId]);

  const handleSend = (messageText) => {
    const newMessage = {
      id: `m${Date.now()}`,
      text: messageText,
      sender: "me",
      timestamp: new Date().toLocaleDateString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div className={styles.chatPage}>
      <ChatHeader conversationInfo={currentConversation} />

      <div className={styles.messageListContainer}>
        <MessageList messages={messages} />
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatDetailPage;
