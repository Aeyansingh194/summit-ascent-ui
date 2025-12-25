import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import editorialImage from '@/assets/editorial-1.jpg';

const EditorialSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="section-padding bg-charcoal overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={editorialImage}
                alt="Editorial fashion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 border border-terracotta/30 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-terracotta-light mb-4">
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-cream mb-6 leading-tight">
              Designed for the
              <br />
              <span className="italic text-terracotta-light">Modern Explorer</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8 max-w-lg">
              Every piece is crafted with intention. We believe that exceptional outdoor gear 
              should seamlessly blend performance with timeless style. From the highest peaks 
              to urban streets, our designs move with you.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-terracotta" />
                <span className="text-cream/80">Sustainable materials & processes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-sage" />
                <span className="text-cream/80">Tested in extreme conditions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cream/60" />
                <span className="text-cream/80">Designed to last generations</span>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-cream font-medium group"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
