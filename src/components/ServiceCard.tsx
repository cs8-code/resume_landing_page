import { useState, memo } from 'react';
import { ChevronDown, Check, Cloud, Layout, ShoppingCart, BarChart3 } from 'lucide-react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  cloud: Cloud,
  layout: Layout,
  shoppingCart: ShoppingCart,
  barChart: BarChart3,
};

export const ServiceCard = memo(function ServiceCard({ service }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = iconMap[service.icon];

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 hover:border-blue-500/50 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-900/50 transition-colors duration-300 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <Icon size={24} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-100">{service.title}</h3>
        </div>
        <ChevronDown
          size={24}
          className={`text-blue-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-3 pt-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-400">
                <Check size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});
