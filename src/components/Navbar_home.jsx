import React, {useRef} from "react";
import "../styles/navbar_home.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import newlogo from "../images/newlogo.png";

const Navbar_home = () => {
  const location = useLocation();
  const menuBtn = useRef();
  const navUl = useRef();

  const HandleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }
   
  const menuBtnHandler = () => {
    menuBtn.current.classList.toggle("open");
    navUl.current.classList.toggle("active");
  };

  return (
    <motion.div 
      className="nav-main_h"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.6 }}
    >
      <div className="nav-logo_h">
        <Link to="/">
          <img src={newlogo} alt="newlogo" />
        </Link>
      </div>
      <ul className="nav-ul_h" ref={navUl}>
        <li className="nav-li_h">
          <Link to="/">Home</Link>
          {location.pathname === "/" && <div className="border-cross_h"></div>}
        </li>
        <li className="nav-li_h">
          <Link to="/events">Event Schedule</Link>
          {location.pathname === "/events" && (
            <div className="border-cross_h"></div>
          )}
        </li>
        <li className="nav-li_h">
          <Link to="/core-team">Core Members</Link>
          {location.pathname === "/core-team" && (
            <div className="border-cross_h"></div>
          )}
        </li>
        <li className="nav-li_h">
          <Link to="/sponsors">Sponsors</Link>
          {location.pathname === "/sponsors" && (
            <div className="border-cross_h"></div>
          )}
        </li>
        <li className="nav-li_h">
          <Link to="/gallery">Gallery</Link>
          {location.pathname === "/gallery" && (
            <div className="border-cross_h"></div>
          )}
        </li>
        <li className="nav-li_h"> 
          {!localStorage.getItem("token") ? 
            <>
              <Link to="/register">Login</Link>
              {location.pathname === "/register" && (
                <div className="border-cross_h"></div>
              )} 
            </>
            :
            <>
              <Link to="/" onClick={HandleLogout}>Logout</Link>
            </>
          }
        </li>
      </ul>
      <div className="menu-btn_h" ref={menuBtn} onClick={menuBtnHandler}>
        <div className="menu-btn__burger_h"></div>
      </div>
    </motion.div>
  );
};

export default Navbar_home;