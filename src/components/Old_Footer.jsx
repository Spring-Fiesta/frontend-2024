import React from "react";
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";
import "../styles/footer.css";
import festLogo from "../images/festLogo.png";
import iiitLogo from "../images/iiit_surat.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="back">
        <div className="links">
          {/* <Heading><Link to="/core-team/developer">Developers</Link></Heading>
          <Heading><Link to="/core-team/management">Management</Link></Heading>
          <Heading><Link to="/core-team/pr">Public Relations</Link></Heading>
          <Heading><Link to="/core-team/artAndDesign">Art & Design</Link></Heading>
          <Heading><Link to="/core-team/Coding">Coding</Link></Heading>
          <Heading><Link to="/core-team/Content">Content</Link></Heading>
          <Heading><Link to="/core-team/Robotics">Robotics</Link></Heading>
          <Heading><Link to="/core-team/Cultural">Cultural</Link></Heading>
          <Heading><Link to="/core-team/ESummit">E-Summit</Link></Heading>
          <Heading><Link to="/core-team/media">Media</Link></Heading>
          <Heading><Link to="/core-team/Sports">Sports</Link></Heading> */}
        </div>
        <div className="logo">
          <div>
            <img src={iiitLogo} alt="" className="iiit-logo" />
          </div>
          <div>
            <img src={festLogo} alt="" className="fest-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Heading = ({ children }) => {
  return <motion.h3 style={{textAlign:"center"}} whileHover={{ scale: [1, 1.1, 1] }}>{children}</motion.h3>;
};

export default Footer;
