import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string;
  delay?: number;
  onClick?: () => void;
}

const ProductCard = ({ 
  title, 
  subtitle, 
  description, 
  icon: Icon, 
  features, 
  color,
  delay = 0,
  onClick 
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group relative bg-white rounded-2xl p-8 border border-blue-100 shadow-sm cursor-pointer transition-all duration-500 hover:border-primary/30 hover:shadow-lg overflow-hidden"
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${color}10 0%, transparent 70%)`
        }}
      />

      {/* Icon */}
      <div 
        className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-8 h-8" style={{ color }} />
      </div>

      {/* Content */}
      <div className="relative">
        <p className="text-sm text-muted-foreground mb-1">{subtitle}</p>
        <h3 className="text-2xl font-bold mb-3" style={{ color }}>{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span 
                className="w-1.5 h-1.5 rounded-full" 
                style={{ backgroundColor: color }}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
        <svg 
          className="w-6 h-6" 
          style={{ color }}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </motion.div>
  );
};

export default ProductCard;
