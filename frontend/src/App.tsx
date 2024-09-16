import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
import { useSession } from "./hooks/useSession";



function App() {

  const { sessionToken } = useSession();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* rutas privadas */}

        <Route path={"/home"} element={ sessionToken ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
