import { Link } from 'react-router';
import { Home, Building2, HardHat, Briefcase, Users } from 'lucide-react';
import { PageHero } from '@/app/components/layout/PageHero';
import { CTASection } from '@/app/components/layout/CTASection';

export function WhoWeServe() {
  const audiences = [
    {
      id: 'homeowners',
      title: 'Homeowners',
      icon: Home,
      desc: 'We treat your home with respect. Our electricians are clean, courteous, and background-checked.',
      needs: ['Safety Inspections', 'Remodels & Additions', 'Smart Home Upgrades', 'Reliable Repairs']
    },
    {
      id: 'business-owners',
      title: 'Business Owners',
      icon: Building2,
      desc: 'Minimize downtime and ensure code compliance for your office, retail space, or facility.',
      needs: ['LED Retrofits', 'Tenant Improvements', 'Data Cabling', 'Maintenance Contracts']
    },
    {
      id: 'property-managers',
      title: 'Property Managers',
      icon: Briefcase,
      desc: 'One call solves your electrical issues. We provide detailed reporting and priority service.',
      needs: ['Rapid Response', 'Detailed Invoicing', 'Multi-Site Service', 'Preventative Maintenance']
    },
    {
      id: 'general-contractors',
      title: 'General Contractors',
      icon: HardHat,
      desc: 'We keep your project on schedule and pass inspections the first time.',
      needs: ['New Construction', 'Renovations', 'Plan Review', 'Scheduling Reliability']
    }
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Who We Serve"
        subtitle="Tailored electrical solutions for every client type. From single-family homes to large commercial complexes."
        badge={{ icon: Users, text: 'Our Clients' }}
        variant="dark"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {audiences.map((audience) => (
              <div key={audience.id} className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <audience.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{audience.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  {audience.desc}
                </p>
                <div>
                  <h3 className="font-semibold text-foreground mb-3 uppercase text-xs tracking-wider">Common Needs</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {audience.needs.map((need, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                   <Link to={`/who-we-serve/${audience.id}`} className="text-primary font-bold hover:underline inline-flex items-center">
                    Learn More <span className="ml-1">&rarr;</span>
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
