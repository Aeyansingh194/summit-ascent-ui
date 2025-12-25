import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { categories } from '@/data/products';

const categoryImages = [
  'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
  'https://images.unsplash.com/photo-1609333902660-0123cce702dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1706625674606-3a666c444885?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const CategoriesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="section-padding bg-cream-dark">
      <div className="container-luxury">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-4">
            Shop By Category
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-light">
            Find Your <span className="italic">Essentials</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/${category.id}`}
                className="group block relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <img
                  src={categoryImages[index]}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display text-cream mb-2">
                    {category.name}
                  </h3>
                  <p className="text-cream/70 text-sm">
                    {category.subcategories.slice(0, 3).join(' • ')}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
