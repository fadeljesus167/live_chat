import { useSession } from "../hooks/useSession";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
    const { searchToken } = useSession();
    const sessionToken = searchToken();
    console.log("guardian ",sessionToken)

    return sessionToken ? <Outlet /> : <Navigate replace to={"/"} />
}

export default AuthGuard;