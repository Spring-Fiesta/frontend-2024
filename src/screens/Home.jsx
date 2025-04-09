import { useRef } from "react";
import "../styles/landing.css";
import path140 from "../images/path140.png";
import group152 from "../images/Group_152.png";
import group104 from "../images/Group_104.png"
import leftcurtain from "../images/leftcurtain.png";
import rightcurtain from "../images/rightcurtain.png";
import group1765731 from "../images/Grop_1765731.png";
import curtains from "../images/curtains.svg";
import Navbar_home from "../components/Navbar_home";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import newlogo from "../images/newlogo.png";

console.log(group1765731);

const Home = () => {
  const mainRef = useRef(null);

  const handleScroll = () => {
    let entry = document.querySelector(".entry");
    entry.style.top = "-500vh"; // Moves the curtain up smoothly
  };

  return (
    <div>
      {/* Apply smooth scrolling */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="entry" onClick={handleScroll}>
        <img src={curtains} alt="curtain" className="entry_img" />
      </div>
      <Navbar_home />

      <div className="main" ref={mainRef}>
        <div className="page1">
          <img src={path140} alt="img" />
          <div className="spring_logo">
            <img src={newlogo} alt="img" />
          </div>
        </div>

        <div className="page2">
          <div className="holder">
            <img src={group152} alt="img" />
          </div>
          <div className="page2_1">
            <h1>About Fest</h1>
            <p>
              Spring Fiesta is the annual techno-cultural heartbeat of IIIT Surat — a high-voltage fusion of innovation, creativity, and celebration.
              Now in its 3rd edition, the fest welcomes students from across India for a three-day carnival of code, culture, and chaos. From electrifying performances to intense competitions, it’s where memories are made and legends begin.
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
          <div className="flex flex-col justify-self-center text-center items-center w-7/12 ">
            <h1 className="text-4xl">Infernal Horizon</h1>
            <blockquote className="font-medium max-md:text-sm my-4">“When the flames of passion meet the dusk-lit skies,
              Spring Fiesta ignites, where the dragon flies.”</blockquote>
            <p className="font-light max-md:text-sm">
              Infernal Horizon represents a world where fiery ambition meets limitless potential.
              The dragon, the flames, the cracking earth — all echo the unstoppable energy of youth.
              This theme isn’t just about fire — it’s about rising through it.
              Are you ready to step into the blaze?
            </p>
          </div>
        </div>

        <div className="page4">
          <div className="Curtains">
            <div className="img1">
              <img src={leftcurtain} alt="img" />
            </div>
            <div className="carousel">
              <Carousel />
            </div>
            <div className="img2">
              <img src={rightcurtain} alt="img" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
