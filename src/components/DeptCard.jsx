import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/coreTeamCard.css";

import back from "../images/back.png";
import front from "../images/front.png";

const Card = ({ photo, designation, name }) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return ( 
    <motion.div
      className="flip-card-dept"
      onClick={handleFlip}
      whileHover={{ scale: 1.1 }}
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
          >
          </div>
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
