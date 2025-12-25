import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

interface AddToCartButtonProps {
  onClick: () => void;
  fullWidth?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick, fullWidth = true }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      };
      setParticles((prev) => [...prev.slice(-10), newParticle]);
    }, 200);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distX = (e.clientX - centerX) * 0.1;
    const distY = (e.clientY - centerY) * 0.1;
    
    mouseX.set(distX);
    mouseY.set(distY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    setParticles([]);
  };

  const handleClick = () => {
    onClick();
    // Create burst of particles
    const burst = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.cos((i / 8) * Math.PI * 2) * 60,
      y: Math.sin((i / 8) * Math.PI * 2) * 60,
    }));
    setParticles(burst);
    setTimeout(() => setParticles([]), 500);
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`relative overflow-visible bg-charcoal text-cream py-3 px-6 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-colors hover:bg-charcoal-light ${
        fullWidth ? 'w-full' : ''
      }`}
      style={{ x: springX, y: springY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
    >
      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-cream/80 rounded-full pointer-events-none"
          initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
      
      <ShoppingBag className="w-4 h-4" />
      <span>Add to Cart</span>
    </motion.button>
  );
};

export default AddToCartButton;
