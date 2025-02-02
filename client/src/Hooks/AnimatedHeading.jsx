import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedHeading({ words, intervalTime = 2000 }) {
  const [index, setIndex] = useState(0);

  return (
    <motion.span
      key={index} 
      initial={{ opacity: 0, scale: 0.8 , y:20 }}
      animate={{ opacity: 1, scale: 1 , y:0 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.3  }}
      onAnimationComplete={() => {
        setTimeout(() => setIndex((prev) => (prev + 1) % words.length), intervalTime);
      }}
      className="inline-block"
    >
      {words[index]}
    </motion.span>
  );
}
