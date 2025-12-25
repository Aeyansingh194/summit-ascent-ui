import React, { useState } from 'react';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductGrid from '@/components/ProductGrid';
import EditorialSection from '@/components/EditorialSection';
import CategoriesSection from '@/components/CategoriesSection';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useSmoothScroll();

  return (
    <>
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navigation />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ProductGrid />
          <EditorialSection />
          <CategoriesSection />
          <TrustSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
