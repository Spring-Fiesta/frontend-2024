import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import "../styles/coreTeamCard.css";

import back from "../images/back.png";

const Card = ({ multiply, scrollYValue, x, y, photo, designation, name }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  useMemo(() => {
    if (scrollYValue > 250) {
      setIsFlipped(true);
    }
  }, [scrollYValue]);

  const variant = {
    shuffle: {
      rotate: multiply * 2 + "deg",
      x: multiply * 25,
      y: Math.abs(multiply * 5),
      transition: {
        delay: 1,
        ease: "easeOut",
        duration: 0.4,
      },
    },
    pack: {
      rotate: multiply + "deg",
      x: x,
      y: y,
      scale: 1.1,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  const variantTablet = {
    shuffle: {
      rotate: multiply * 2 + "deg",
      x: multiply * 15 - 40,
      y: Math.abs(multiply * 3.5),
      transition: {
        delay: 1,
        ease: "easeOut",
        duration: 0.4,
      },
    },
    pack: {
      rotate: multiply + "deg",
      x: x,
      y: y,
      scale: 0.85,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  const variantMobile = {
    shuffle: {
      rotate: multiply + "deg",
      x: multiply * 2 - 50,
      y: Math.abs(multiply * 2),
      transition: {
        delay: 1,
        ease: "easeOut",
        duration: 0.4,
      },
    },
    pack: {
      rotate: multiply + "deg",
      x: x,
      y: y,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  let finalVariant;
  let desiredScrollValue = 0;

  if (window.innerWidth > 1150) {
    finalVariant = variant;
    desiredScrollValue = 250;
  } else if (window.innerWidth > 480) {
    finalVariant = variantTablet;
    desiredScrollValue = 100;
  } else {
    finalVariant = variantMobile;
    desiredScrollValue = 25;
  }

  // console.log(scrollYValue);

  return (
    <motion.div
      className="flip-card"
      onClick={handleFlip}
      whileHover={{ scale: 1.2 }}
      animate={scrollYValue >= desiredScrollValue ? "pack" : "shuffle"}
      // animate='shuffle'
      variants={finalVariant}
      // transition={{ delay: 1, ease: "easeOut", duration: 1 }}
    >
      <motion.div
        className="flip-card-inner"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.2, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="flip-card-front" style={{ backgroundColor: "white" }}>
          <div
            className="mem-image"
            style={{ backgroundImage: `url(${back})` }}
          ></div>
        </div>

        <div className="flip-card-back" style={{ backgroundColor: "white" }}>
          <div
            className="mem-image"
            style={{ backgroundImage: `url(${photo})` }}
          >
            <div className="details">
              <div className="card-name">{name}</div>
              <div className="card-designation">{designation}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
