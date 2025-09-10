import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroScreen() {
  const fullText = "Hiruni Yasoda";
  const [displayedText, setDisplayedText] = useState("");

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Generate bubbles
  const bubbleCount = 35;
  const bubbles = Array.from({ length: bubbleCount });

  return (
    <div className="h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      
      {/* Floating Bubbles */}
      {bubbles.map((_, i) => {
        const size = Math.random() * 20 + 10; // 10px to 30px
        const left = Math.random() * 100; // percent
        const duration = Math.random() * 15 + 5; // 10s to 25s
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.4 + 0.1; // 0.1 to 0.5
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size + "px",
              height: size + "px",
              left: left + "%",
              bottom: "-50px",
              opacity: opacity,
              filter: "blur(2px)",
              animation: `bubbleRise ${duration}s linear ${delay}s infinite`,
            }}
          ></span>
        );
      })}

      {/* Magical Name with typing */}
      <motion.h1
        className="relative z-10 text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        style={{ fontFamily: "'Cinzel Decorative', cursive" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {displayedText}
        <span className="animate-blink">|</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="relative z-10 mt-6 text-lg md:text-2xl text-gray-300 italic tracking-wide drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        Crafting dreams into reality with code & creativity
      </motion.p>

      {/* CSS for cursor blink and bubble animation */}
      <style>
        {`
          .animate-blink {
            display: inline-block;
            margin-left: 2px;
            width: 1ch;
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }

          @keyframes bubbleRise {
            0% {
              transform: translateY(0);
              opacity: inherit;
            }
            50% {
              opacity: calc(var(--opacity) + 0.1);
            }
            100% {
              transform: translateY(-120vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
