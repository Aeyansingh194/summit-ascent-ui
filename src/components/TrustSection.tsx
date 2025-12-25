import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The quality is unmatched. I've worn my Alpine jacket through three seasons now and it still looks brand new.",
    author: "Sarah M.",
    role: "Mountain Guide",
    rating: 5,
  },
  {
    quote: "Finally, outdoor gear that looks good enough for the city. Perfect for my lifestyle.",
    author: "James K.",
    role: "Adventure Photographer",
    rating: 5,
  },
  {
    quote: "Their commitment to sustainability sold me. The fact that everything performs flawlessly is a bonus.",
    author: "Elena R.",
    role: "Environmental Scientist",
    rating: 5,
  },
];

const stats = [
  { value: '50K+', label: 'Happy Explorers' },
  { value: '30+', label: 'Countries' },
  { value: '100%', label: 'Recycled Packaging' },
  { value: '∞', label: 'Adventures Ahead' },
];

const TrustSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-luxury">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-display text-terracotta mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-terracotta mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-light">
            Loved by <span className="italic">Adventurers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-card rounded-xl p-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
