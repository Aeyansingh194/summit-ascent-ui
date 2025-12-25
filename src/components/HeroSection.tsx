import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroMain from '@/assets/hero-main.jpg';
import heroParallax1 from '@/assets/hero-parallax-1.jpg';
import heroParallax2 from '@/assets/hero-parallax-2.jpg';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['inset(20% 30%)', 'inset(0% 0%)']
  );
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const parallax1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const parallax2Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const parallax1Rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const parallax2Rotate = useTransform(scrollYProgress, [0, 1], [0, 3]);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* Fixed Hero Content */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Main Background Image with Clip Path */}
        <motion.div
          className="absolute inset-0"
          style={{ clipPath, scale: imageScale, opacity: imageOpacity }}
        >
          <img
            src={heroMain}
            alt="Mountain adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/70" />
        </motion.div>

        {/* Parallax Layer 1 */}
        <motion.div
          className="absolute top-[15%] left-[8%] w-64 md:w-80 rounded-lg overflow-hidden shadow-elevated"
          style={{ y: parallax1Y, rotate: parallax1Rotate }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img
            src={heroParallax1}
            alt="Valley landscape"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Parallax Layer 2 */}
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-48 md:w-64 rounded-lg overflow-hidden shadow-elevated"
          style={{ y: parallax2Y, rotate: parallax2Rotate }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <img
            src={heroParallax2}
            alt="Hiking gear"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Hero Text Content */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: textY }}
        >
          <div className="text-center px-4">
            <motion.p
              className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-cream/80 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Explore the Unexplored
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-cream tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Where Adventure
              <br />
              <span className="italic text-terracotta-light">Meets Style</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-cream/70 max-w-lg mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Premium outdoor apparel engineered for the modern explorer
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link to="/collections">
                <button className="btn-shimmer px-8 py-4 text-cream rounded-full font-medium tracking-wide flex items-center gap-2 group">
                  Shop Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 text-cream border border-cream/30 rounded-full font-medium tracking-wide hover:bg-cream/10 transition-colors"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-cream/60"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
