import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';
import { SEO } from '@/app/components/SEO';
import { LocalBusinessSchema } from '@/app/components/LocalBusinessSchema';
import { getSEOForPath } from '@/app/config/route-seo';

export function Layout() {
  const { pathname } = useLocation();
  const seo = getSEOForPath(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground antialiased">
      <SEO
        title={seo.title}
        description={seo.description}
        path={pathname || '/'}
      />
      <LocalBusinessSchema />
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      {/* Extra padding on mobile so footer content isn't hidden behind bottom nav */}
      <div className="lg:hidden h-20" aria-hidden="true" />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
