import { useState } from "react"
import{ useRouter } from "next/router"
// import account from '../appwrite'
import signups from'../styles/signups.module.css'
import { signUp } from "../appwrite"
import Link from "react-router-dom"
// import Backdrop from "./Backdrop"
const signup = () => {

const[name,setName]= useState('')
const[email,setEmail] = useState('')
const[password,setPassword] = useState('')
const [sucess,setSucess]= useState(false)
const router=useRouter()

const handleSubmit=async(e)=>{
e.preventDefault()
try{
await signUp(email,password,name)
router.push('/login')
alert('User created Sucessfully')
}catch(error){
console.log(error)
}
}
if(handleSubmit === true){
alert('User created Sucessfully')
}
return(
    <>
   
        <div className={signups.centered}>
        <form onSubmit={handleSubmit} className={signups.form}>
        <h2 className={signups.header_form}>Sign Up</h2>
            <label htmlFor="name">
                Name
                <input type="text" 
                id="name"
                name="name"
                value={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }}
                className={signups.input}
                required
                />
            </label>
            <label htmlFor="email">
                Email
                <input type="email" 
                id="email"
                name="email"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                className={signups.input}
                required
                />
             
            </label>
            <label htmlFor="password">
                Password
                <input type="password" 
                id="password"
                name="password"
                auto-complete="new-password"
                value={password}
                onChange={(e)=>{
                 setPassword(e.target.value)
                }}
                className={signups.input}
                required
                />
                <span className={signups.pswdtext}>Password must be at least 8 chars</span>
            </label>
           <button className={signups.btn}>Sign Up</button>
           <p className={signups.linktext}>If you are already sign up,Kindly <a href="/login" className={signups.login}>Login </a></p>
        </form>
      
        </div>
       
        </>
    )
}

export default signup;