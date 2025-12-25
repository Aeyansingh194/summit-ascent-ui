import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube, Mail, ArrowRight } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Gear', href: '/gear' },
    { name: 'Collections', href: '/collections' },
    { name: 'Sale', href: '/collections/sale' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);

  const brandName = 'SUMMIT & CLOUD';

  return (
    <footer ref={containerRef} className="bg-charcoal text-cream relative overflow-hidden">
      {/* Large Brand Text with Hover Effect */}
      <div className="container-luxury pt-20 pb-12 border-b border-cream/10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center flex-wrap gap-x-4 text-4xl md:text-6xl lg:text-7xl font-display font-light tracking-tight">
            {brandName.split('').map((letter, index) => (
              <motion.span
                key={index}
                className="relative cursor-default transition-colors duration-300"
                style={{
                  color: hoveredLetter === index ? 'hsl(var(--terracotta))' : 'inherit',
                }}
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
                whileHover={{ scale: 1.1 }}
              >
                {letter === ' ' ? '\u00A0' : letter}
                {hoveredLetter === index && (
                  <motion.span
                    className="absolute -inset-2 bg-terracotta/20 rounded-lg -z-10"
                    layoutId="hover-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.span>
            ))}
          </div>
          <p className="mt-6 text-cream/60 max-w-md mx-auto">
            Premium outdoor apparel for the modern explorer
          </p>
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <div className="container-luxury py-12 border-b border-cream/10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="text-xl font-display mb-2">Join the Journey</h3>
            <p className="text-cream/60 text-sm">
              Subscribe for exclusive offers and adventure stories
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <div className="relative flex-1 md:w-80">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-cream/10 border border-cream/20 rounded-full text-cream placeholder:text-cream/40 focus:outline-none focus:border-terracotta transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-terracotta text-cream rounded-full font-medium hover:bg-terracotta-dark transition-colors flex items-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Links Grid */}
      <div className="container-luxury py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Shop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs font-medium tracking-wider uppercase text-cream/50 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/80 hover:text-cream transition-colors underline-hover"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xs font-medium tracking-wider uppercase text-cream/50 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/80 hover:text-cream transition-colors underline-hover"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-xs font-medium tracking-wider uppercase text-cream/50 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/80 hover:text-cream transition-colors underline-hover"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-xs font-medium tracking-wider uppercase text-cream/50 mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-luxury py-6 border-t border-cream/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
          <p>© 2024 Summit & Cloud. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cream transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
