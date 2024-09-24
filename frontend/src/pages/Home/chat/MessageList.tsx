
interface Message {
  id: number;
  content: string;
  username: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className='bg-gray-500'>
      {messages.map((message) => (
        <div key={message.id}>
          <strong>{message.username}: </strong> {message.content}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
