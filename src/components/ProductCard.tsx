import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0],
      color: product.colors[0].name,
    });
  };

  return (
    <motion.div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted product-image-swap">
          <img
            src={product.images[0]}
            alt={product.name}
            className="primary-image absolute inset-0 w-full h-full object-cover transition-all duration-500"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className="secondary-image absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Badges */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
            {product.isNew && (
              <span className="bg-sage text-sage-dark text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-terracotta text-cream text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                Bestseller
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-destructive text-destructive-foreground text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart
              className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${
                isWishlisted ? 'fill-terracotta text-terracotta' : 'text-foreground'
              }`}
            />
          </button>

          {/* Quick Add Button - Hidden on mobile, shown on hover for desktop */}
          <motion.div
            className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 hidden sm:block"
            initial={{ opacity: 0, y: 10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <AddToCartButton onClick={handleAddToCart} />
          </motion.div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-2 sm:mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-xs sm:text-sm line-clamp-2 hover:text-terracotta transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center gap-1 sm:gap-2">
          <span className="font-display text-sm sm:text-lg">${product.price}</span>
          {product.originalPrice && (
            <span className="text-[10px] sm:text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        {/* Color Swatches */}
        <div className="mt-1.5 sm:mt-2 flex gap-0.5 sm:gap-1">
          {product.colors.slice(0, 4).map((color) => (
            <div
              key={color.name}
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-border"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Mobile Add to Cart - Visible only on mobile */}
      <button
        onClick={handleAddToCart}
        className="sm:hidden mt-2 w-full py-2 text-xs font-medium bg-charcoal text-cream rounded-md active:bg-charcoal-light transition-colors"
      >
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
