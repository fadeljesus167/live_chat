import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/authService";
import { useSession } from "../../hooks/useSession";

interface FormData {
    username: string;
    password: string;
}

const Login = () => {
    const [formData, setFormData] = useState<FormData> ({
        username:'',
        password:'',
    })

    const {sessionToken, setSessionToken} = useSession();
    const navigate = useNavigate();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
      try {
        const result = await loginService(formData)
        if( result?.session_token){
            setSessionToken(result.session_token);
            navigate("/home");
            console.log("token generate_session_tokenuardado", sessionToken)
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

  return (
    <>
        <div className="text-2xl">Login</div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
               <label htmlFor="username">Username: </label>
               <input type="text" name="username" placeholder="pon tu username" value={formData.username}  onChange={handleChange}/>
            </div>
            
            <div>
               <label htmlFor="password">Password: </label>
               <input type="password" name="password" placeholder="pon tu password" value={formData.password} onChange={handleChange}/>
            </div>

            <button type="submit" className="px-4 py-2 bg-blue-500 text-white">Login</button>
            
        </form>
    </>
  )
}
export default Login