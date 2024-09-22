
interface Message {
  id: number;
  content: string;
  sender: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className='bg-gray-500'>
      {messages.map((message) => (
        <div key={message.id}>
          <strong>{message.sender}: </strong> {message.content}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
