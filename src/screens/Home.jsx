import { useEffect} from 'react';
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // ✅ Import CSS
import '../styles/landing.css'
import group from "../images/Group.png";
import path140 from "../images/path140.png";
import group152 from "../images/Group_152.png";
import group104 from "../images/Group_104.png";
import group1765731 from "../images/Grop_1765731.png";
import group226 from "../images/Group_226.png";
import curtains from "../images/curtains.svg";
import Navbar from '../components/Navbar';
// import { SplineEvent } from '@splinetool/react-spline';
import Footer from '../components/Footer';
const Home = () => {
    const mainRef = useRef(null);
    const scrollRef = useRef(null);
  
    useEffect(() => {
      if (mainRef.current) {
        scrollRef.current = new LocomotiveScroll({
          el: mainRef.current,
          smooth: true,
        });
  
        return () => {
          if (scrollRef.current) scrollRef.current.destroy();
        };
      }
    }, []);
  
    const handleScroll = () => {
      let entry = document.querySelector(".entry");
      entry.style.top = "-200vh"; // Moves the curtain up smoothly
  
      // ✅ Update Locomotive Scroll after content change
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.update();
        }
      }, 500);
    };
  
    

   

    return (
        <>
      <div className="entry" onClick={handleScroll}>
        <img src={curtains} alt="curtain" className="entry_img" />
      </div>
      <Navbar />
      {/* ✅ Added data-scroll-container */}
      <div className="main" ref={mainRef} data-scroll-container>
        <div className="page1">
          <img src={path140} alt="img" />
          <div className="spring_logo">
            <img src={group} alt="img" />
          </div>
        </div>

        <div className="page2">
          <div className="holder">
            <img src={group152} alt="img" />
          </div>
          <div className="page2_1">
            <h1>About Fest</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Duis accumsan tempor cursus nulla eros mauris consectetur commodo.
              Id enim adipiscing ultrices enim tellus suscipit. Cursus malesuada convallis
            </p>
          </div>
          <div className="page2_2">
            <img src={group104} alt="img" />
          </div>
        </div>

        <div className="page3">
          <div className="holder">
            <img src={group152} alt="img" />
          </div>
          <div className="page3_text">
            <h1>About Fest</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Duis accumsan tempor cursus nulla eros mauris consectetur commodo.
              Id enim adipiscing ultrices enim tellus suscipit. Cursus malesuada convallis
            </p>
          </div>
        </div>

        <div className="page4">
          <img src={group1765731} alt="img" />
        </div>
        
        <Footer className="footer"></Footer>
       
      </div>
    </>
    );    
}
export default Home;
