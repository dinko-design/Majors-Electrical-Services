import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { services } from '@/app/data/services';

export function Services() {
  const mainCategories = [
    { id: 'residential', ...services['residential'], link: '/services/residential' },
    { id: 'commercial', ...services['commercial'], link: '/services/commercial' },
    { id: 'maintenance', ...services['maintenance'], link: '/services/maintenance' },
  ];

  const serviceCategories = [
    {
      title: 'Construction & Renovations',
      description: 'Building new or remodeling? We provide complete electrical planning and installation.',
      keys: ['new-construction', 'home-remodels', 'home-additions', 'whole-home-rewire', 'office-build-outs']
    },
    {
      title: 'Lighting Solutions',
      description: 'Interior, exterior, and landscape lighting to enhance beauty and security.',
      keys: ['interior-lighting', 'exterior-lighting', 'landscape-lighting', 'recessed-lighting', 'under-cabinet', 'chandelier-install', 'automatic-timer-lighting', 'led-retrofits', 'signage-power', 'parking-lot-lights', 'security-lighting']
    },
    {
      title: 'Green Energy & Smart Home',
      description: 'Sustainable power and modern control for the connected home.',
      keys: ['solar-systems', 'battery-systems', 'ev-charging', 'energy-management', 'smart-switches', 'data-cabling', 'home-theater']
    },
    {
      title: 'Safety, Security & Emergency',
      description: 'Protecting your family and property with reliable safety systems.',
      keys: ['emergency-service', 'outdoor-security', 'security-cameras', 'generators', 'surge-protection', 'smoke-&-co-detectors', 'safety-inspections', 'arc-fault-breakers']
    },
    {
      title: 'Pools, Spas & General Repair',
      description: 'Powering your amenities and fixing everyday electrical issues.',
      keys: ['swimming-pools', 'spas-and-hot-tubs', 'appliance-circuits', 'dedicated-circuits', 'ceiling-fans', 'outlet-&-switch']
    }
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-muted/30 py-20 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Electrical Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive electrical solutions for homes and businesses across the Gulf Coast. Safe, reliable, and always up to code.
          </p>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainCategories.map((service) => (
              <div key={service.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 overflow-hidden">
                   <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-primary font-medium hover:underline">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized Services */}
      <div className="bg-background">
        {serviceCategories.map((category, idx) => (
          <section key={idx} className={`py-16 ${idx % 2 !== 0 ? 'bg-muted/30' : ''}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">{category.title}</h2>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.keys.map((key) => {
                  const service = services[key as keyof typeof services];
                  if (!service) return null;
                  const Icon = service.icon;
                  
                  return (
                    <Link 
                      key={key} 
                      to={`/services/${key}`} 
                      className="group flex flex-col bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-md overflow-hidden"
                    >
                      <div className="h-40 overflow-hidden relative">
                         <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        <div className="absolute bottom-3 left-3 text-white flex items-center gap-2">
                          <Icon className="h-5 w-5" />
                          <span className="font-bold text-sm shadow-sm">{service.title}</span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                          {service.description}
                        </p>
                        <div className="flex items-center text-primary text-sm font-semibold mt-auto group-hover:underline">
                          View Details <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Need a service not listed here?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We handle custom electrical projects of all types. Contact us to discuss your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
