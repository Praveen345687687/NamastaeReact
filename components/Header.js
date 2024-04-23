import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import {Link }from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const onlineStatus =useOnlineStatus();
    const[btnnameReact , setbtnnameReact ]=useState("Login");

    return(
        <div className="header">
            <div className="logo-contianer">
                <img className="logo"
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Internet Status:{onlineStatus ? "✅": "🚫"}</li>
                   
                    <li>
                    <Link to="/">Home</Link></li>
                    <li><Link to="/About">About us</Link></li>
                    <li> <Link to="/Contact">Contact us</Link></li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>CART</li>
                    <button className="button-login"
                    onClick={ () =>{
                       btnnameReact == "Login" 
                       ? setbtnnameReact("Logout")
                       :setbtnnameReact("Login");
                    }}
                    >
                     {btnnameReact}   
                    </button>
                </ul>
            </div>
        </div>
  );
  };
export default Header;