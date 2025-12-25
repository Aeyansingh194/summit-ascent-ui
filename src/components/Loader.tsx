import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const words = ['EXPLORE', 'DISCOVER', 'ADVENTURE', 'SUMMIT'];

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onLoadingComplete, 800);
          }, 600);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* SVG Filter for Gooey Effect */}
          <svg className="absolute w-0 h-0">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>

          {/* Morphing Text */}
          <div className="relative gooey-text">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                className="loader-text text-cream block"
                initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Loading Progress */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-48 h-px bg-charcoal-light overflow-hidden">
              <motion.div
                className="h-full bg-cream/60"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.4, ease: 'linear' }}
              />
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-terracotta rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-sage rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
