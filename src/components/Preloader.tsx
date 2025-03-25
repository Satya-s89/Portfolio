import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

const Preloader = () => {
  const [text, setText] = useState('');
  const fullText = "Shinzou wo Sasageyo!";
  const [playTheme] = useSound('https://assets.codepen.io/sound/aot-theme.mp3', { volume: 80 });
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    // Play theme music when preloader starts
    playTheme();

    return () => clearInterval(interval);
  }, [playTheme]);

  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center relative">
        <motion.div 
          className="w-48 h-48 mb-8 mx-auto relative overflow-hidden rounded-lg"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.codepen.io/video/titan-transform.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 to-transparent"></div>
        </motion.div>
        
        <motion.h2 
          className="text-4xl font-bold text-red-500 mb-6 tracking-wider"
          animate={{
            textShadow: ["0 0 8px rgb(239 68 68 / 0.5)", "0 0 16px rgb(239 68 68 / 0.8)", "0 0 8px rgb(239 68 68 / 0.5)"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.h2>
        
        <div className="w-72 h-4 bg-gray-800 rounded-full mx-auto overflow-hidden relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-red-700 via-red-500 to-red-700"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear"
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://assets.codepen.io/image/wall-pattern.png')] bg-repeat-x opacity-30 animate-[wall-pattern_20s_linear_infinite]"></div>
        </div>

        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
          {[0, 0.3, 0.6, 0.9].map((delay, i) => (
            <motion.div
              key={i}
              className="steam-particle"
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: -100,
                opacity: [0, 0.8, 0],
                scale: [1, 2, 3]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: delay,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute inset-0 bg-red-500/10"
          animate={{
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;