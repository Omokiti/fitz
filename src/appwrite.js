import { Client, Account,ID } from "appwrite";

const client = new Client();
export const account = new Account(client);
   
   client
     .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT) // Your API Endpoint
     .setProject(process.env.NEXT_PUBLIC_PROJECT); // Your project ID

     export const signUp=async(email,password,name)=>{
        return await account.create(ID.unique(),email, password, name)
     }
   
     export const login=async(email,password)=>{
      return await account.createEmailSession(email,password)
     }

     export const getUser=async()=>{
      return await account.get()
     }

     
