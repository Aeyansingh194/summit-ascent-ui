export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  subcategory: string;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  features: string[];
  materials: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: 'alpine-jacket-1',
    name: 'Alpine Summit Jacket',
    price: 329,
    originalPrice: 399,
    description: 'Premium waterproof jacket engineered for extreme alpine conditions. Features advanced breathable membrane technology and reinforced stress points.',
    category: 'men',
    subcategory: 'jackets',
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Storm Grey', hex: '#5C5C5C' },
      { name: 'Forest', hex: '#2D4A3E' },
      { name: 'Midnight', hex: '#1A1A2E' },
    ],
    features: ['Waterproof', 'Breathable', 'Windproof', 'Sealed seams'],
    materials: '100% Recycled Polyester with DWR finish',
    isNew: true,
  },
  {
    id: 'trek-pants-1',
    name: 'Expedition Trek Pants',
    price: 189,
    description: 'Durable hiking pants with articulated knees and quick-dry fabric. Perfect for multi-day adventures.',
    category: 'men',
    subcategory: 'pants',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Stone', hex: '#A49E93' },
      { name: 'Olive', hex: '#5C604D' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    features: ['Quick-dry', 'UPF 50+', 'Stretch fabric', 'Zip pockets'],
    materials: '94% Nylon, 6% Elastane',
    isBestseller: true,
  },
  {
    id: 'fleece-pullover-1',
    name: 'Cloud Fleece Pullover',
    price: 149,
    description: 'Ultra-soft fleece pullover with a relaxed fit. Your perfect mid-layer for any adventure.',
    category: 'women',
    subcategory: 'fleece',
    images: [
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Cream', hex: '#F5F0E8' },
      { name: 'Dusty Rose', hex: '#D4A5A5' },
      { name: 'Sage', hex: '#9CAF88' },
    ],
    features: ['Recycled materials', 'Pill-resistant', 'Thumbholes', 'Kangaroo pocket'],
    materials: '100% Recycled Polyester Fleece',
    isNew: true,
  },
  {
    id: 'hiking-boots-1',
    name: 'Trailmaster Pro Boots',
    price: 269,
    description: 'Professional-grade hiking boots with superior ankle support and Vibram outsoles for maximum grip.',
    category: 'gear',
    subcategory: 'footwear',
    images: [
      'https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    ],
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    colors: [
      { name: 'Brown', hex: '#6B4423' },
      { name: 'Graphite', hex: '#4A4A4A' },
    ],
    features: ['Vibram sole', 'Waterproof', 'Gore-Tex lining', 'EVA midsole'],
    materials: 'Full-grain leather and synthetic',
    isBestseller: true,
  },
  {
    id: 'backpack-1',
    name: 'Summit 45L Pack',
    price: 229,
    description: 'Technical backpack designed for multi-day treks. Features adjustable suspension and multiple access points.',
    category: 'gear',
    subcategory: 'packs',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
    ],
    sizes: ['S/M', 'M/L'],
    colors: [
      { name: 'Ember', hex: '#C45C26' },
      { name: 'Slate', hex: '#708090' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    features: ['Rain cover included', 'Hydration compatible', 'Hip belt pockets', 'Load lifters'],
    materials: '420D Ripstop Nylon',
    isNew: true,
  },
  {
    id: 'down-jacket-1',
    name: 'Arctic Down Parka',
    price: 449,
    originalPrice: 549,
    description: 'Expedition-ready down parka with 800-fill power goose down. Built for extreme cold conditions.',
    category: 'women',
    subcategory: 'jackets',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Burgundy', hex: '#722F37' },
      { name: 'Navy', hex: '#1B2838' },
      { name: 'Cream', hex: '#F5F0E8' },
    ],
    features: ['800-fill down', 'Fur-trimmed hood', 'Two-way zip', 'Internal pockets'],
    materials: 'Recycled Nylon with RDS Down',
    isBestseller: true,
  },
  {
    id: 'base-layer-1',
    name: 'Merino Base Layer',
    price: 89,
    description: 'Premium merino wool base layer that regulates temperature and resists odor naturally.',
    category: 'men',
    subcategory: 'base-layers',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Navy', hex: '#1B2838' },
      { name: 'Oatmeal', hex: '#D4C8B8' },
    ],
    features: ['Temperature regulating', 'Odor resistant', 'Moisture-wicking', 'Flatlock seams'],
    materials: '100% Merino Wool (18.5 micron)',
  },
  {
    id: 'rain-jacket-1',
    name: 'Storm Shell Jacket',
    price: 279,
    description: 'Lightweight packable rain jacket with 3-layer construction for all-weather protection.',
    category: 'women',
    subcategory: 'jackets',
    images: [
      'https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Coral', hex: '#FF7F50' },
      { name: 'Teal', hex: '#008080' },
      { name: 'Black', hex: '#1A1A1A' },
    ],
    features: ['3-layer construction', 'Packable', 'Pit zips', 'Adjustable hood'],
    materials: '100% Recycled Nylon with PFC-free DWR',
    isNew: true,
  },
];

export const categories = [
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    subcategories: ['Jackets', 'Pants', 'Fleece', 'Base Layers', 'Shirts'],
  },
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
    subcategories: ['Jackets', 'Pants', 'Fleece', 'Base Layers', 'Dresses'],
  },
  {
    id: 'gear',
    name: 'Gear',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80',
    subcategories: ['Packs', 'Footwear', 'Accessories', 'Tents', 'Sleeping Bags'],
  },
  {
    id: 'collections',
    name: 'Collections',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    subcategories: ['New Arrivals', 'Best Sellers', 'Sale', 'Sustainability'],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.isNew);
};

export const getBestsellers = (): Product[] => {
  return products.filter((product) => product.isBestseller);
};
