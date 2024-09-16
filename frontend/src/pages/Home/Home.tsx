import { Button } from "../../components";
import { useSession } from "../../hooks/useSession";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const { clearSessionToken } = useSession();
    const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-4xl">Bienvenido a la página Home</h1>
      <Button className="px-4 py-2 bg-blue-500 text-white" onClick={() => {clearSessionToken(); navigate("/")}}> Logout</Button>
    </div>
  )
}
export default Home