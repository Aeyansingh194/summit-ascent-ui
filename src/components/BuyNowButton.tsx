import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BuyNowButton: React.FC<{ to?: string }> = ({ to = '/collections' }) => {
  return (
    <Link to={to}>
      <motion.button
        className="btn-shimmer relative overflow-hidden px-10 py-4 text-cream rounded-full font-medium tracking-wide flex items-center gap-3 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Shop Now</span>
        <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </Link>
  );
};

export default BuyNowButton;
