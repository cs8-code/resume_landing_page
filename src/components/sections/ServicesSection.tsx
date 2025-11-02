import { useLocalizedData } from '../../hooks/useLocalizedData';
import { ServiceCard } from '../ServiceCard';

export function ServicesSection() {
  const { services, servicesContent } = useLocalizedData();
  return (
    <section id="services" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 animate-fade-in text-center">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-6">
            <span className="text-blue-400 font-mono text-2xl">{servicesContent.sectionNumber}.</span>
            <span className="text-gray-100">{servicesContent.title}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {servicesContent.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
