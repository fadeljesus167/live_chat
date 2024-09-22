import { useState } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

interface Message {
  id: number;
  content: string;
  sender: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {id:1,
        content:"prueba de un mensajes",
        sender: "daztan"
    },
  ]);

  // Función para manejar el envío de nuevos mensajes
  const handleSendMessage = (content: string, sender: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      content,
      sender, // Ahora el sender será el token
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
}

  return (
    <div className='border-black border-2 p-4 max-w-[600px]'>
      <MessageList messages={messages} />
      <MessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
