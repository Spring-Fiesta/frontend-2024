import { useRef } from "react";
import "../styles/landing.css";
import group from "../images/Group.png";
import path140 from "../images/path140.png";
import group152 from "../images/Group_152.png";
import group104 from "../images/Group_104.png"
import leftcurtain from "../images/leftcurtain.png";
import rightcurtain from "../images/rightcurtain.png";
import group1765731 from "../images/Grop_1765731.png";
import curtains from "../images/curtains.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

console.log(group1765731);

const Home = () => {
  const mainRef = useRef(null);

  const handleScroll = () => {
    let entry = document.querySelector(".entry");
    entry.style.top = "-500vh"; // Moves the curtain up smoothly
  };

  return (
    <>
      {/* Apply smooth scrolling */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="entry" onClick={handleScroll}>
        <img src={curtains} alt="curtain" className="entry_img" />
      </div>
      <Navbar/>

      <div className="main" ref={mainRef}>
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
              Lorem ipsum dolor sit amet consectetur. Duis accumsan tempor
              cursus nulla eros mauris consectetur commodo. Id enim adipiscing
              ultrices enim tellus suscipit. Cursus malesuada convallis
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
              Lorem ipsum dolor sit amet consectetur. Duis accumsan tempor
              cursus nulla eros mauris consectetur commodo. Id enim adipiscing
              ultrices enim tellus suscipit. Cursus malesuada convallis
            </p>
          </div>
        </div>

        <div className="page4">
          <div className="img1">
          <img src={leftcurtain} alt="img" />
          </div>

      <div className="img2">
          <img src={rightcurtain} alt="img" />
          </div>
          <div className="carousel"><Carousel/></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
