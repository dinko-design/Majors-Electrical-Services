import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { 
  Home, Zap, Phone, TicketPercent, LayoutGrid, X, 
  Building2, HardHat, MapPin, ChevronRight, ShieldCheck,
  Info, Briefcase, Clock, Users, Award, Star, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import { serviceCategories } from '@/app/data/navigation';
import { getFeaturedOffers, guarantees } from '@/app/data/offers';

const featuredOffer = getFeaturedOffers()[0];

const bottomTabs = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Services', path: '/services', icon: Zap },
  { name: 'Call', path: 'tel:+19413209868', icon: Phone, isCall: true },
  { name: 'Offers', path: '/offers', icon: TicketPercent },
  { name: 'More', path: '#more', icon: LayoutGrid, isMore: true },
];

const audienceLinks = [
  { name: 'Residential', path: '/who-we-serve/homeowners', icon: Home, desc: 'Home electrical' },
  { name: 'Commercial', path: '/who-we-serve/business-owners', icon: Building2, desc: 'Business solutions' },
  { name: 'Contractors', path: '/who-we-serve/general-contractors', icon: HardHat, desc: 'New construction' },
  { name: 'Property Mgmt', path: '/who-we-serve/property-managers', icon: Briefcase, desc: 'Multi-unit service' },
];

const moreLinks = [
  { name: 'About Us', path: '/about', icon: Info },
  { name: 'Our Team', path: '/about#team', icon: Users },
  { name: 'Careers', path: '/careers', icon: Award },
  { name: 'Service Areas', path: '/locations', icon: MapPin },
];

export function MobileBottomNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Bottom Tab Bar */}
      <div 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--background)] border-t border-[var(--border)]/15"
        style={{ 
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          boxShadow: '0 -2px 12px rgba(0,0,0,0.08)'
        }}
      >
        <div className="flex items-end justify-around px-1 pt-1.5 pb-1.5">
          {bottomTabs.map((tab) => {
            if (tab.isCall) {
              return (
                <a
                  key={tab.name}
                  href={tab.path}
                  className="flex flex-col items-center justify-center -mt-4 relative"
                >
                  <div 
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--primary)] shadow-lg"
                    style={{ boxShadow: '0 4px 14px rgba(14, 126, 192, 0.4)' }}
                  >
                    <Phone className="h-6 w-6 text-[var(--primary-foreground)]" />
                  </div>
                  <span 
                    className="mt-1 text-[var(--primary)]"
                    style={{ fontSize: '10px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Poppins', sans-serif" }}
                  >
                    Call
                  </span>
                </a>
              );
            }

            if (tab.isMore) {
              return (
                <button
                  key={tab.name}
                  onClick={() => setDrawerOpen(true)}
                  className={cn(
                    "flex flex-col items-center justify-center min-w-[56px] py-1 transition-colors",
                    drawerOpen ? "text-[var(--primary)]" : "text-[var(--muted-foreground)]"
                  )}
                >
                  <tab.icon className="h-5 w-5" />
                  <span 
                    style={{ fontSize: '10px', fontWeight: 'var(--font-weight-normal)', fontFamily: "'Poppins', sans-serif" }}
                    className="mt-0.5"
                  >
                    {tab.name}
                  </span>
                </button>
              );
            }

            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={cn(
                  "flex flex-col items-center justify-center min-w-[56px] py-1 transition-colors",
                  isActive(tab.path) ? "text-[var(--primary)]" : "text-[var(--muted-foreground)]"
                )}
              >
                <tab.icon className="h-5 w-5" />
                <span 
                  style={{ fontSize: '10px', fontWeight: isActive(tab.path) ? 'var(--font-weight-medium)' : 'var(--font-weight-normal)', fontFamily: "'Poppins', sans-serif" }}
                  className="mt-0.5"
                >
                  {tab.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* More Drawer / Full-Screen Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-[60] bg-black/40"
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="lg:hidden fixed bottom-0 left-0 right-0 z-[70] bg-[var(--background)] rounded-t-[24px] max-h-[85vh] overflow-hidden flex flex-col"
              style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
            >
              {/* Drag Handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-[var(--border)]/30" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 pb-3 border-b border-[var(--border)]/15">
                <span 
                  className="text-[var(--foreground)]" 
                  style={{ fontSize: '18px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Poppins', sans-serif" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 px-5 pt-5 pb-8">
                
                {/* Audience Quick Links */}
                <div className="mb-6">
                  <span 
                    className="text-[var(--muted-foreground)] uppercase tracking-wider block mb-3"
                    style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Poppins', sans-serif", letterSpacing: '1.5px' }}
                  >
                    I Need An Electrician For…
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    {audienceLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setDrawerOpen(false)}
                        className="flex items-center gap-3 p-3.5 rounded-[var(--radius-card)] bg-[var(--primary)]/5 border border-[var(--primary)]/12 hover:bg-[var(--primary)]/10 transition-colors"
                      >
                        <div className="flex items-center justify-center w-9 h-9 rounded-[var(--radius)] bg-[var(--primary)]/10">
                          <item.icon className="h-4.5 w-4.5 text-[var(--primary)]" />
                        </div>
                        <div>
                          <span 
                            className="block text-[var(--foreground)]"
                            style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Poppins', sans-serif" }}
                          >
                            {item.name}
                          </span>
                          <span 
                            className="block text-[var(--muted-foreground)]"
                            style={{ fontSize: '11px', fontWeight: 'var(--font-weight-normal)', fontFamily: "'Poppins', sans-serif" }}
                          >
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Page Links */}
                <div className="mb-6">
                  <span 
                    className="text-[var(--muted-foreground)] uppercase tracking-wider block mb-3"
                    style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Poppins', sans-serif", letterSpacing: '1.5px' }}
                  >
                    Pages
                  </span>
                  <div className="space-y-0.5">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setDrawerOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-3 py-3 rounded-[var(--radius)] transition-colors",
                          isActive(link.path)
                            ? "bg-[var(--muted)] text-[var(--primary)]"
                            : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <link.icon className="h-4.5 w-4.5 text-[var(--muted-foreground)]" />
                          <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-normal)', fontFamily: "'Poppins', sans-serif" }}>
                            {link.name}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Service Categories */}
                <div className="mb-6">
                  <span 
                    className="text-[var(--muted-foreground)] uppercase tracking-wider block mb-3"
                    style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Poppins', sans-serif", letterSpacing: '1.5px' }}
                  >
                    Browse Services
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {serviceCategories.map((cat) => (
                      <Link 
                        key={cat.id} 
                        to={`/services#${cat.id}`}
                        onClick={() => setDrawerOpen(false)}
                        className="flex flex-col items-center justify-center p-3 rounded-[var(--radius)] bg-[var(--muted)]/50 hover:bg-[var(--muted)] border border-[var(--border)]/10 text-center gap-1.5 transition-colors"
                      >
                        <cat.icon className="h-5 w-5 text-[var(--primary)]" />
                        <span 
                          className="text-[var(--foreground)]"
                          style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Poppins', sans-serif" }}
                        >
                          {cat.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trust / Emergency Badge */}
                <div className="flex items-center gap-3 p-3.5 rounded-[var(--radius-card)] bg-[var(--sidebar)] mb-6">
                  <ShieldCheck className="h-5 w-5 text-[var(--sidebar-accent)] shrink-0" />
                  <div>
                    <span 
                      className="block text-[var(--sidebar-foreground)]"
                      style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Poppins', sans-serif" }}
                    >
                      Licensed & Insured
                    </span>
                    <span 
                      className="block text-[var(--sidebar-foreground)]/60"
                      style={{ fontSize: '11px', fontWeight: 'var(--font-weight-normal)', fontFamily: "'Poppins', sans-serif" }}
                    >
                      FL License #EC 13007355 · 24/7 Emergency
                    </span>
                  </div>
                  <Clock className="h-4 w-4 text-emerald-400 ml-auto animate-pulse" />
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-3.5 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 shadow-md transition-all"
                  style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', fontFamily: "'Poppins', sans-serif" }}
                >
                  Request a Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}