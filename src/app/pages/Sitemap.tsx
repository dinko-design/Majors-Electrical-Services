import { Link } from 'react-router';
import { services } from '@/app/data/services';
import { locations } from '@/app/data/locations';

export function Sitemap() {
  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Special Offers', path: '/offers' },
    { name: 'Who We Serve', path: '/who-we-serve' },
    { name: 'Services', path: '/services' },
    { name: 'Locations', path: '/locations' },
  ];

  const segments = [
    { name: 'Homeowners', path: '/who-we-serve/homeowners' },
    { name: 'Business Owners', path: '/who-we-serve/business-owners' },
    { name: 'Property Managers', path: '/who-we-serve/property-managers' },
    { name: 'General Contractors', path: '/who-we-serve/general-contractors' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Sitemap', path: '/sitemap' },
  ];

  // Group services by category for better display?
  // The data structure is flat object with keys. Let's just list them alphabetically or by insertion order.
  const serviceLinks = Object.entries(services).map(([slug, service]) => ({
    name: service.title,
    path: `/services/${slug}`
  }));

  const locationLinks = Object.entries(locations).map(([slug, location]) => ({
    name: `${location.name}, FL`,
    path: `/locations/${slug}`
  }));

  return (
    <div className="w-full bg-background min-h-screen">
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Sitemap</h1>
          <p className="text-muted-foreground mt-2">Overview of all pages on our website.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Main Pages */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Company</h2>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Serve */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Who We Serve</h2>
            <ul className="space-y-2">
              {segments.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Service Areas</h2>
            <ul className="space-y-2">
              {locationLinks.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Full Width on Mobile, spans 2 cols on large if needed, but let's just keep it in flow */}
          <div className="space-y-4 md:col-span-2 lg:col-span-3">
             <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Services</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                {serviceLinks.map((page) => (
                  <div key={page.path}>
                    <Link to={page.path} className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                      {page.name}
                    </Link>
                  </div>
                ))}
             </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">Legal</h2>
            <ul className="space-y-2">
              {legalPages.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
