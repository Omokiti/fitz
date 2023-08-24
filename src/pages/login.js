import { useState } from "react";
import { BrowserRouter} from "react-router-dom";
import{ useRouter } from "next/router"
import logins from "../styles/logins.module.css";
import { login } from "../appwrite"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate()
  const router=useRouter()
  
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      if(!email || !password){
        alert('Error')
        router.push("/")
      }else{
        router.push("/dashboard");
      }
     
    } catch (error) {
      console.log(error);
    }
  };
   
  return (
   
    <div className="login">
      <form className={logins.form} onSubmit={loginUser}>  
        <div className={logins.centered}>
          <h2 className={logins.header_form}>Log In</h2>

          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              className={logins.input}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              auto-complete="current-password"
              className={logins.input}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </label>
          <button className={logins.btn}>
            Login
          </button>
        </div>
      </form>
    </div>
   
  );
};
export default Login;