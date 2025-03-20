// import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "../styles/coreTeam.css";
import Card from "../components/Card";
import { useState } from "react";
import Navbar from "../components/Navbar";
import coreTeam from "../data/coreTeam.json";
import Footer from "../components/Footer";

const alignArray = [-350, 0, 350];
let cardMotion = [];

cardMotion.push({
  multiplier: 1,
  x: 0,
  y: 50,
});

for (let index = 0; index < coreTeam.length - 1; index++) {
  const element = {
    multiplier: Math.floor(Math.random() * (10 - -10 + 1)) + -10,
    x: alignArray[index % 3],
    y: 400 * Math.floor(index / 3) + 450,
  };
  cardMotion.push(element);
}

const alignArrayTab = [-130, 130];
let cardMotionTablet = [];

cardMotionTablet.push({
  multiplier: 1,
  x: -30,
  y: 50,
});

for (let index = 0; index < coreTeam.length - 1; index++) {
  const element = {
    multiplier: Math.floor(Math.random() * (10 - -10 + 1)) + -10,
    x: alignArrayTab[index % 2]-40,
    y: 350 * Math.floor(index / 2) + 360,
  };
  cardMotionTablet.push(element);
}

let cardMotionMobile = [];

cardMotionMobile.push({
  multiplier: 1,
  x: -50,
  y: 0,
});

for (let index = 0; index < coreTeam.length - 1; index++) {
  const element = {
    multiplier: Math.floor(Math.random() * (10 - -10 + 1)) + -10,
    x: -50,
    y: 350 * index + 350,
  };
  cardMotionMobile.push(element);
}

const CoreTeam = () => {
  let rotateArr = [
    -39, -37,-35, -33, -31, -29, -27, -25, -23, -21, -19, -17, -15, -13, -11, -9, -7, -5,
    -3, -1, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33,
    35, 37,39,41,43
  ];

  const { scrollY } = useScroll();

  const [scrollYValue, setScrollYValue] = useState(scrollY.get());

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYValue(latest);
  });

  const deckVariants = {
    first: {
      y: 0,
      transition: {
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
        staggerChildren: 5,
      },
    },
  };

  const deckVariantsTablet = {
    first: {
      y: 0,
      transition: {
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
        staggerChildren: 5,
      },
    },
  };

  const deckVariantsMobile = {
    first: {
      y: 0,
      transition: {
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
        staggerChildren: 5,
      },
    },
  };

  let finalMotion = [];
  let desiredScrollValue = 0;
  let finalDeckvariant;

  if (window.innerWidth > 1150) {
    finalMotion = cardMotion;
    desiredScrollValue = 250;
    finalDeckvariant = deckVariants;
  } else if (window.innerWidth > 550) {
    finalMotion = cardMotionTablet;
    desiredScrollValue = 100;
    finalDeckvariant = deckVariantsTablet;
  } else {
    finalMotion = cardMotionMobile;
    desiredScrollValue = 25;
    finalDeckvariant = deckVariantsMobile;
  }

  return (
    <>
      <Navbar />
      <motion.div
        className="heading"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <h1>Meet The Team</h1>
      </motion.div>

      <motion.div
        className="bg-wrapper"
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div className="card-bg" style={scrollYValue>desiredScrollValue?{border:'none'}:{}} />

        <motion.div
          className="card-wrapper"
          initial={{ y: 400 }}
          animate={"first"}
          variants={finalDeckvariant}
        >
          {coreTeam.map((member, i) => {
            return (
              <Card
                multiply={
                  scrollYValue <= desiredScrollValue
                    ? rotateArr[i] / 4
                    : finalMotion[i].multiplier
                }
                scrollYValue={scrollYValue}
                x={finalMotion[i].x}
                y={finalMotion[i].y}
                photo={`${member.image}`}
                name={`${member.name}`}
                designation={`${member.designation}`}
              />
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        className="dept"
        animate={{ y: finalMotion[finalMotion.length - 1].y + 450 }}
        transition={{ duration:0.3, ease:"easeInOut" }}
      >
        <Footer/>
      </motion.div>
    </>
  );
};

export default CoreTeam;

