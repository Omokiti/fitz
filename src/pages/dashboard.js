import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { account } from "../appwrite";
import dashboard from"../styles/dashboard.module.css";
import Sidenav from "../components/Sidenav";


const Dashboard = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = account.get();
    getUser.then(
      function (response) {
        setUser(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);


  return (
    // <BrowserRouter>
    <div className={dashboard.dashboard}>
      <Sidenav/>
    <div className='flex justify-between px-4 pt-4'>
        {user ? (
          <p className={dashboard.text}>Hello {user.name}, Welcome to your Fitz dashboard!!!</p>
        ) : (
          <p>
           Please <a href="/signup">Sign Up</a>
            {/* Please <Link ="/signup" /> Sign up */}
          </p>
        )}
      </div>
    </div>
    /* </BrowserRouter> */
  );
  
};
export default Dashboard;