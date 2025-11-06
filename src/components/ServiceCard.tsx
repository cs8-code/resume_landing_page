import { Globe, Layout, ShoppingCart, Check, Cloud } from 'lucide-react';
import type { Service } from '../types';

const iconMap = {
  globe: Globe,
  layout: Layout,
  shoppingCart: ShoppingCart,
  cloud: Cloud
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
          <Icon size={32} className="text-blue-400 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-all duration-300" />
        </div>

        <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
          {service.title}
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-400">
              <Check size={18} className="text-cyan-400 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
