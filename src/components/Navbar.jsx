import React, {useRef} from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Spring from "../images/Spring.png";

const Navbar = () => {
  const location = useLocation();
  const menuBtn = useRef();

  const HandleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }
   
  const menuBtnHandler = () => {
      menuBtn.current.classList.toggle("open");
      document.querySelector(".nav-ul").style.display = document.querySelector(".nav-ul").style.display === "flex" ? "none" : "flex";
  };

  return (
    <motion.div 
      className="nav-main"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.6 }}
    >
      <div className="nav-logo">
        <Link to="/">
          <img src={Spring} alt="Spring" />
        </Link>
      </div>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">Home</Link>
          {location.pathname === "/" && <div className="border-cross"></div>}
        </li>
        <li className="nav-li">
          <Link to="/events">Event Schedule</Link>
          {location.pathname === "/events" && (
            <div className="border-cross"></div>
          )}
        </li>
        <li className="nav-li">
          <Link to="/core-team">Core Members</Link>
          {location.pathname === "/core-team" && (
            <div className="border-cross"></div>
          )}
        </li>
        <li className="nav-li">
          <Link to="/voting">Voting Page</Link>
          {location.pathname === "/voting" && (
            <div className="border-cross"></div>
          )}
        </li>
        <li className="nav-li">
          <Link to="/gallery">Gallery</Link>
          {location.pathname === "/gallery" && (
            <div className="border-cross"></div>
          )}
        </li>
        <li className="nav-li"> 
          
          {!localStorage.getItem("token") ? 
          <>
            <Link to="/register">Login</Link>
            {location.pathname === "/register" && (
              <div className="border-cross"></div>
            )} 
          </>
          :
          <>
            <Link to="/" onClick={HandleLogout}>Logout</Link>
          </>
          }
        </li>
      </ul>
      <div className="menu-btn" ref={menuBtn} onClick={menuBtnHandler} >
        <div className="menu-btn__burger"></div>
      </div>
    </motion.div>
  );
};

export default Navbar;
