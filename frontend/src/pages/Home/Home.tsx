import { Button } from "../../components";
import Chat from "./chat/Chat";

const logout = () => {
  localStorage.removeItem('sessiontoken');
  window.location.href = '/';
};

const messages_url = 'http://localhost:3000/messages'

const Home = () => {

  const sender = localStorage.getItem('username')

  return (
    <div className="max-w-[1200px] flex-col items-center justify-center">
      <header className="flex-col">
      <h1 className="text-4xl">Bienvenido a la página Home</h1>
      <Button className="px-4 py-2 bg-blue-500 text-white" onClick={logout}> Logout</Button>
      </header>

      <div>
        
      </div>

      <div className="flex items-center justify-center">
      <Chat />
      </div>
    </div>
  )
}
export default Home