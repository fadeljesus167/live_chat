import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/authService";


interface FormData {
    username: string;
    password: string;
}

const Login = () => {
    const [formData, setFormData] = useState<FormData> ({
        username:'',
        password:'',
    })

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

        console.log(result.username)
        if( result?.session_token && result?.username ){
          localStorage.setItem('sessiontoken', result.session_token);
          localStorage.setItem('username', result.username);
            navigate("/home");
            console.log("token generate_session_token guardado", result.session_token)
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