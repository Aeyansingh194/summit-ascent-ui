import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Search, User, Heart } from 'lucide-react';
import { categories } from '@/data/products';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-charcoal/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-20 left-0 right-0 bottom-0 bg-background z-40 lg:hidden overflow-y-auto"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-6">
              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-3 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30"
                />
              </div>

              {/* Categories */}
              <div className="space-y-6">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/${category.id}`}
                      className="flex items-center justify-between py-3 text-xl font-display"
                      onClick={onClose}
                    >
                      {category.name}
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </Link>
                    <div className="pl-4 space-y-2 mt-2">
                      {category.subcategories.slice(0, 4).map((sub) => (
                        <Link
                          key={sub}
                          to={`/${category.id}/${sub.toLowerCase().replace(' ', '-')}`}
                          className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={onClose}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-border" />

              {/* Secondary Links */}
              <div className="space-y-4">
                <Link
                  to="/account"
                  className="flex items-center gap-3 py-2 text-lg"
                  onClick={onClose}
                >
                  <User className="w-5 h-5" />
                  Account
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-3 py-2 text-lg"
                  onClick={onClose}
                >
                  <Heart className="w-5 h-5" />
                  Wishlist
                </Link>
              </div>

              {/* Featured Banner */}
              <motion.div
                className="mt-8 relative rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80"
                  alt="Featured"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent flex items-end p-4">
                  <div>
                    <p className="text-cream text-xs uppercase tracking-wider mb-1">New Season</p>
                    <p className="text-cream text-lg font-display">Winter Collection</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
