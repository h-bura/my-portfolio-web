"use client";

import React, { useEffect, useState } from "react";

const AnimatedText = () => {
  const text = "Hi, I'm Hüseyin BURA";
  const [animatedText, setAnimatedText] = useState("");
  const [index, setIndex] = useState(0);

  const typeWriter = () => {
    if (index < text.length) {
      setAnimatedText((prevText) => prevText + text.charAt(index));
      setIndex(index + 1);
    }
  };

  const startAnimation = () => {
    setAnimatedText("");
    setIndex(0);
  };

  useEffect(() => {
    const typingInterval = setInterval(typeWriter, 100);

    if (index === text.length) {
      setTimeout(startAnimation, 7000);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [index]);

  return <h1 className="py-4 text-[#5651e5]">{animatedText}</h1>;
};

export default AnimatedText;
