
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from 'react';

export const AuthGuard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('sessionToken');
        if (!token) {
          navigate('/login'); // Redirige al login si no hay token
        }
      }, [navigate]);

    return <Outlet /> 
}

export default AuthGuard;