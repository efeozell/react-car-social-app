import MessageBubble from "./MessageBubble";

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return <MessageBubble key={message.id} message={message} />;
      })}
    </div>
  );
};

export default MessageList;
