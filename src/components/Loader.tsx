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
          {/* Morphing Text - Using CSS animations for cross-browser support */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                className="block text-cream font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.05 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
            
            {/* Glow effect behind text */}
            <motion.div
              className="absolute inset-0 -z-10 blur-3xl opacity-30"
              style={{
                background: 'radial-gradient(circle, hsl(var(--terracotta)) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Loading Progress */}
          <motion.div
            className="absolute bottom-12 sm:bottom-20 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-32 sm:w-48 h-px bg-charcoal-light overflow-hidden rounded-full">
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
            className="absolute top-1/4 left-[15%] sm:left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-terracotta rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-[15%] sm:right-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-sage rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/2 right-[10%] sm:right-[15%] w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
