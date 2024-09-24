import { useEffect, useRef, useState } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

interface Message {
  id: number;
  content: string;
  username: string;
}

const ws = new WebSocket('ws://localhost:3000/cable');
    
const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  
  const token = localStorage.getItem('sessiontoken');
  const messagesUrl = "http://localhost:3000/messages";

  ws.onopen = () => {
    console.log("connected to websocket server");
    
    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          channel: "ChatChannel",
          session_token: localStorage.getItem('sessiontoken'),
        }),
      })
    );
  };
  
  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    const newMessage = data.message;
    console.log(data.message);
    setMessages([...messages, newMessage]);
  }
  
  async function fetchMessages(){
    const response = await fetch(messagesUrl + `?session_token=${token}`)
    const dbmessages = await response.json()
    setMessages(dbmessages);
  }

  useEffect(() => {
    fetchMessages()

    // Cerramos la conexión cuando el componente se desmonta
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

   async function sendMessage(content: string , token: string){
    console.log(JSON.stringify({
        "message": {
          "content": content,
          "session_token": token
        }
    }))
    const response = await fetch(messagesUrl + `?session_token=${token}`, {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        "message": {
          "content": content,
          "session_token": token
        }
      })
    })
    
  }

  // Función para manejar el envío de nuevos mensajes
  const handleSendMessage = (content: string, token: string) => {
    sendMessage(content, token)
  };

  return (
    <div className='flex-col border-black border-2 p-4 max-w-[600px]'>
      <MessageList messages={messages} />
      <MessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;