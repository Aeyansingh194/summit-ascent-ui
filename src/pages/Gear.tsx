import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory, categories } from '@/data/products';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { motion } from 'framer-motion';

const Gear: React.FC = () => {
  useSmoothScroll();
  const products = getProductsByCategory('gear');
  const categoryData = categories.find((c) => c.id === 'gear');

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-background">
        {/* Hero */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-cream">
          <div className="container-luxury">
            <motion.div 
              className="text-center mb-8 sm:mb-12" 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light mb-2 sm:mb-4">
                Gear & Equipment
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto px-4">
                Essential gear for every adventure
              </p>
            </motion.div>

            {/* Subcategory Navigation */}
            {categoryData && (
              <motion.div 
                className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {categoryData.subcategories.map((sub) => (
                  <Link
                    key={sub}
                    to={`/gear/${sub.toLowerCase().replace(' ', '-')}`}
                    className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium border border-border rounded-full hover:bg-charcoal hover:text-cream transition-all duration-300"
                  >
                    {sub}
                  </Link>
                ))}
              </motion.div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {products.map((product, i) => (
                <motion.div 
                  key={product.id} 
                  initial={{ opacity: 0, y: 40 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Gear;
