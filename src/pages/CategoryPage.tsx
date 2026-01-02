import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { ChevronRight } from 'lucide-react';

interface CategoryPageProps {
  category: 'men' | 'women' | 'gear' | 'collections';
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const { subcategory } = useParams<{ subcategory: string }>();

  const formattedSubcategory = subcategory
    ? subcategory.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : '';

  const categoryData = categories.find((c) => c.id === category);

  const filteredProducts = useMemo(() => {
    if (category === 'collections') {
      // Handle special collection pages
      switch (subcategory) {
        case 'new-arrivals':
          return products.filter((p) => p.isNew);
        case 'best-sellers':
          return products.filter((p) => p.isBestseller);
        case 'sale':
          return products.filter((p) => p.originalPrice);
        default:
          return products;
      }
    }

    return products.filter((p) => {
      const matchesCategory = p.category === category;
      const matchesSubcategory = subcategory
        ? p.subcategory === subcategory.replace(/-/g, ' ').toLowerCase() ||
          p.subcategory === subcategory.toLowerCase()
        : true;
      return matchesCategory && matchesSubcategory;
    });
  }, [category, subcategory]);

  const pageTitle = subcategory
    ? formattedSubcategory
    : categoryData?.name || category;

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: categoryData?.name || category, href: `/${category}` },
    ...(subcategory ? [{ name: formattedSubcategory, href: `/${category}/${subcategory}` }] : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative pt-20 pb-8 sm:pb-12 md:pb-16">
        <div className="container-luxury px-4 sm:px-6 md:px-8">
          {/* Breadcrumbs */}
          <motion.nav
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-6 md:mt-8 overflow-x-auto whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                {index > 0 && <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-foreground font-medium">{crumb.name}</span>
                ) : (
                  <Link
                    to={crumb.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.nav>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 sm:mb-4">
              {pageTitle}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subcategory Navigation */}
      {categoryData && categoryData.subcategories.length > 0 && (
        <section className="border-t border-b border-border">
          <div className="container-luxury px-4 sm:px-6 md:px-8">
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6 py-3 sm:py-4 overflow-x-auto no-scrollbar">
              <Link
                to={`/${category}`}
                className={`text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  !subcategory ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                All {categoryData.name}
              </Link>
              {categoryData.subcategories.map((sub) => {
                const subSlug = sub.toLowerCase().replace(' ', '-');
                const isActive = subcategory === subSlug;
                return (
                  <Link
                    key={sub}
                    to={`/${category}/${subSlug}`}
                    className={`text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {sub}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-luxury px-4 sm:px-6 md:px-8">
          {filteredProducts.length > 0 ? (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12 sm:py-16 md:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">
                No products found in this category.
              </p>
              <Link
                to={`/${category}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:opacity-80 transition-opacity"
              >
                View all {categoryData?.name || category}
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
