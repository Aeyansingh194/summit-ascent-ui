import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AddToCartButton from '@/components/AddToCartButton';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ProductDetail: React.FC = () => {
  useSmoothScroll();
  const { id } = useParams();
  const product = getProductById(id || '');
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [mainImage, setMainImage] = useState(0);

  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize || product.sizes[0],
      color: selectedColor || product.colors[0].name,
    });
  };

  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Images */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted mb-4">
                  <img src={product.images[mainImage]} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-2">
                  {product.images.map((img, i) => (
                    <button key={i} onClick={() => setMainImage(i)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${mainImage === i ? 'border-terracotta' : 'border-transparent'}`}>
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Details */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="lg:pl-8">
                <p className="text-sm text-terracotta uppercase tracking-wider mb-2">{product.category}</p>
                <h1 className="text-4xl font-display mb-4">{product.name}</h1>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-display">${product.price}</span>
                  {product.originalPrice && <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>}
                </div>
                <p className="text-muted-foreground mb-8">{product.description}</p>

                {/* Colors */}
                <div className="mb-6">
                  <p className="text-sm font-medium mb-3">Color: {selectedColor || product.colors[0].name}</p>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button key={color.name} onClick={() => setSelectedColor(color.name)} className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.name ? 'border-foreground' : 'border-transparent'}`} style={{ backgroundColor: color.hex }} />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-8">
                  <p className="text-sm font-medium mb-3">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 rounded-lg border ${selectedSize === size ? 'bg-foreground text-background' : 'border-border hover:border-foreground'} transition-colors`}>{size}</button>
                    ))}
                  </div>
                </div>

                <AddToCartButton onClick={handleAddToCart} />

                {/* Features */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm font-medium mb-4">Features</p>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-sage" />{f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
