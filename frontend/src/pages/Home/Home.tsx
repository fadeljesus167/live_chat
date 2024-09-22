import { Button } from "../../components";
import Chat from "./chat/Chat";

const logout = () => {
  localStorage.removeItem('sessionToken');
  window.location.href = '/';
};

const messages_url = 'http://localhost:3000/messages'

const Home = () => {

  return (
    <div className="max-w-[1200px] flex justify-center">
      <h1 className="text-4xl">Bienvenido a la página Home</h1>
      <Button className="px-4 py-2 bg-blue-500 text-white" onClick={logout}> Logout</Button>

      <Chat />
    </div>
  )
}
export default Home