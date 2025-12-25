import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';

interface MegaMenuProps {
  category: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const categoryImages: Record<string, string> = {
  Men: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80',
  Women: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
  Gear: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80',
  Collections: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
};

const MegaMenu: React.FC<MegaMenuProps> = ({ category, onMouseEnter, onMouseLeave }) => {
  const categoryData = categories.find((c) => c.name === category);

  if (!categoryData) return null;

  return (
    <motion.div
      className="absolute top-full left-0 right-0 bg-background border-t border-border"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container-luxury px-8 py-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Categories Column */}
          <div className="col-span-3">
            <h3 className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-6">
              Shop {category}
            </h3>
            <ul className="space-y-4">
              {categoryData.subcategories.map((sub, index) => (
                <motion.li
                  key={sub}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={`/${category.toLowerCase()}/${sub.toLowerCase().replace(' ', '-')}`}
                    className="text-lg font-display hover:text-terracotta transition-colors underline-hover"
                  >
                    {sub}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link
              to={`/${category.toLowerCase()}`}
              className="inline-block mt-8 text-sm font-medium text-terracotta underline-hover"
            >
              View All {category}
            </Link>
          </div>

          {/* Featured Column */}
          <div className="col-span-3">
            <h3 className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-6">
              Featured
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/collections/new-arrivals"
                  className="text-lg font-display hover:text-terracotta transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/best-sellers"
                  className="text-lg font-display hover:text-terracotta transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/sale"
                  className="text-lg font-display text-terracotta hover:opacity-70 transition-opacity"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Image Column */}
          <motion.div
            className="col-span-6 relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="aspect-[16/9] relative overflow-hidden">
              <img
                src={categoryImages[category]}
                alt={category}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-cream text-sm font-medium tracking-wide uppercase mb-2">
                  Explore
                </p>
                <h4 className="text-cream text-2xl font-display">
                  {category} Collection
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
