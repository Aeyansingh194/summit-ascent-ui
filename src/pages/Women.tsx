import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { motion } from 'framer-motion';

const Women: React.FC = () => {
  useSmoothScroll();
  const products = getProductsByCategory('women');

  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="section-padding bg-cream">
          <div className="container-luxury">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl md:text-6xl font-display font-light mb-4">Women's Collection</h1>
              <p className="text-muted-foreground max-w-lg mx-auto">Designed for the modern explorer</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <motion.div key={product.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
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

export default Women;
