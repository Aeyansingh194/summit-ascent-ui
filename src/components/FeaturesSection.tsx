import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Leaf, Mountain, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Premium materials and reinforced construction for years of adventure.',
  },
  {
    icon: Leaf,
    title: 'Sustainably Made',
    description: 'Recycled fabrics and responsible manufacturing practices.',
  },
  {
    icon: Mountain,
    title: 'Trail Tested',
    description: 'Designed and tested by professional mountaineers worldwide.',
  },
  {
    icon: Award,
    title: 'Lifetime Warranty',
    description: 'We stand behind every product with our lifetime guarantee.',
  },
];

const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-light">
            Crafted for <span className="italic">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="card-lift bg-card rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-light mb-6">
                <feature.icon className="w-6 h-6 text-sage-dark" />
              </div>
              <h3 className="text-xl font-display mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
