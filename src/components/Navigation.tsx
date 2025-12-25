import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import CartDrawer from './CartDrawer';

const navLinks = [
  { name: 'Men', href: '/men' },
  { name: 'Women', href: '/women' },
  { name: 'Gear', href: '/gear' },
  { name: 'Collections', href: '/collections' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-luxury shadow-soft'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="container-luxury px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
            >
              <motion.div
                className="font-display text-2xl md:text-3xl tracking-wider"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-light">SUMMIT</span>
                <span className="text-terracotta font-medium"> & </span>
                <span className="font-light">CLOUD</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-12">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    onMouseEnter={() => setActiveMenu(link.name)}
                    onMouseLeave={() => setActiveMenu(null)}
                    className="relative"
                  >
                    <Link
                      to={link.href}
                      className="relative py-2 text-sm font-medium tracking-wide uppercase underline-hover"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:flex p-2 hover:opacity-70 transition-opacity">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/account" className="hidden md:flex p-2 hover:opacity-70 transition-opacity">
                <User className="w-5 h-5" />
              </Link>
              <button
                onClick={openCart}
                className="relative p-2 hover:opacity-70 transition-opacity"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta text-cream text-xs rounded-full flex items-center justify-center font-medium"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMenu && (
            <MegaMenu
              category={activeMenu}
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
};

export default Navigation;
