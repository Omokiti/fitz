
import { BrowserRouter, Link } from "react-router-dom";
import {logout} from "../appwrite"
import{ useRouter } from "next/router"


const logout=()=>{
    const router=useRouter()

    const logoutUser=async(e)=>{
        
        
    }
    return(
        <div>
            you have successfully log out go back to <Link href="/login">Login</Link>
        </div>
    )
}

export default logout;