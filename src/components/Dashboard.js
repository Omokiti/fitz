
import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { account } from "../appwrite";
// import "../styles/Dashboard.css";

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
    <BrowserRouter>
    <div className="dashbaord">
      <div className="nav_dash">
        <li>Home</li>
        <li>Account</li>
        <li>Services</li>
      </div>
      
      <div className="maindash">
        {user ? (
          <p >Hello {user.name} Welcome to your dashboard!!!</p>
        ) : (
          <p>
            Please <Link to="/signup" /> Sign up
          </p>
        )}
      </div>
    </div>
    </BrowserRouter>
  );
};
export default Dashboard;