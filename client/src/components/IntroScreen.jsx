import { useState, useEffect, useMemo } from "react";
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
      if (index >= fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, [fullText]);

  // Generate bubble properties once (memoized)
  const bubbleCount = 25;
  const bubbles = useMemo(() => {
    return Array.from({ length: bubbleCount }).map(() => {
      const size = Math.random() * 20 + 10; // 10px–30px
      const left = Math.random() * 100; // %
      const duration = Math.random() * 15 + 10; // 10–25s
      const delay = -Math.random() * duration; // negative but bounded by duration
      const opacity = Math.random() * 0.4 + 0.1; // 0.1–0.5
      return { size, left, duration, delay, opacity };
    });
  }, [bubbleCount]);

  return (
    <div className="h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      {/* Floating Bubbles */}
      {bubbles.map((b, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            bottom: "-50px",
            opacity: b.opacity,
            filter: "blur(2px)",
            animation: `bubbleRise ${b.duration}s ease-in-out ${b.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}

      {/* Magical Name with typing */}
      <motion.h1
        className="relative z-10 text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
        style={{ fontFamily: "'Cinzel Decorative', cursive" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {displayedText}
        <span className="animate-blink">|</span>
      </motion.h1>

      {/* Tagline with delayed entrance */}
      <motion.p
        className="relative z-10 mt-6 text-lg md:text-2xl text-gray-300 italic tracking-wide drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
      >
        Crafting dreams into reality with code & creativity
      </motion.p>

      {/* CSS for cursor and bubbles */}
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
            0% { transform: translateY(0); }
            50% { opacity: 0.7; }
            100% { transform: translateY(-120vh); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
