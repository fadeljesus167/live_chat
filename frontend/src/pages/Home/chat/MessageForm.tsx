import { useState } from 'react';

interface MessageFormProps {
    onSendMessage: (content: string, sender: string) => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ onSendMessage }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('sessiontoken');
    const sender = localStorage.getItem('username')
    console.log(token)
    if (content.trim() && token && sender) {
        onSendMessage(content, token);
        setContent(''); // Limpiar campo después de enviar
      } else {
        console.error("No hay token disponible o el contenido está vacío.");
      }
    };

  return (
    <form onSubmit={handleSubmit} className="border-2 border-r-4 my-4" >
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escribe tu mensaje"
        required
      />
      <button type="submit" className=" bg-blue-500">Enviar</button>
    </form>
  );
};

export default MessageForm;
