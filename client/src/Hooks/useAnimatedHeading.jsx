import { useState, useEffect } from "react";

export default function useAnimatedHeading(words, intervalTime = 2000, animationDuration = 300) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); 

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false); 
      }, animationDuration); 
    }, intervalTime);

    return () => clearInterval(interval);
  }, [words, intervalTime, animationDuration]);
console.log("yes")
  return { word: words[index], isAnimating };
}
