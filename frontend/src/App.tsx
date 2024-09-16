import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
import AuthGuard from "./guards/auth.guard";



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* rutas privadas */}

        <Route element={ <AuthGuard />}>
          <Route path={"/home"}  element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
