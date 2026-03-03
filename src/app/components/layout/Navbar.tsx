import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { 
  Phone, Clock, ShieldCheck, TicketPercent, MapPin, 
  ChevronRight, ChevronDown, Home, Building2, Info, Users, 
  Award, Briefcase, Star, Percent, ArrowRight,
  Menu, X, Zap, HardHat
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import logo from 'asset/91feb0d897fe4eff5945be1f445e0abfe2d2e4ca.png?w=400&format=webp';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger
} from '@/app/components/ui/navigation-menu';
import { serviceCategories } from '@/app/data/navigation';
import { locations } from '@/app/data/locations';
import { 
  getFeaturedOffers, 
  guarantees, 
  residentialMegaMenuServices, 
  commercialMegaMenuServices 
} from '@/app/data/offers';

const featuredOffers = getFeaturedOffers();
const topOffer = featuredOffers[0];

const FONT = "'Poppins', sans-serif";

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedSection(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleSection = (id: string) => {
    setExpandedSection(prev => prev === id ? null : id);
  };

  const isActive = (path: string) => location.pathname === path;
  const isActivePrefix = (path: string) => location.pathname.startsWith(path);

  // Reusable nav item with icon (used for Residential, Commercial, About)
  const NavIconItem = ({ 
    icon: Icon, 
    label, 
    active 
  }: { 
    icon: typeof Home; 
    label: string; 
    active: boolean;
  }) => (
    <div className="flex items-center gap-2">
      <div className={cn(
        "flex items-center justify-center w-7 h-7 rounded-md transition-colors",
        active ? "bg-[var(--primary)]/12" : "bg-[var(--muted)] group-hover:bg-[var(--primary)]/10"
      )}>
        <Icon className="h-4 w-4 text-[var(--primary)]" />
      </div>
      <span style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full relative z-50">
      {/* ─── Pencil Bar — Trust Signals & Quick Contact ─── */}
      <div className="hidden lg:block bg-[var(--sidebar)] text-[var(--sidebar-foreground)]" style={{ fontSize: '13px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-9">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-emerald-400" style={{ fontWeight: 'var(--font-weight-medium)' }}>
              <Clock className="h-3.5 w-3.5 animate-pulse" />
              <span>24/7 Emergency Service</span>
            </div>
            <span className="text-[var(--sidebar-border)]">·</span>
            <div className="flex items-center gap-1.5 text-[var(--sidebar-foreground)]/70">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--sidebar-primary)]" />
              <span>Licensed & Insured #EC 13007355</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link 
              to="/offers" 
              className="flex items-center gap-1.5 text-[var(--secondary)] hover:text-white transition-colors"
              style={{ fontWeight: 'var(--font-weight-medium)' }}
            >
              <TicketPercent className="h-3.5 w-3.5" />
              <span>Special Offers</span>
            </Link>
            <span className="text-[var(--sidebar-border)]">·</span>
            <a 
              href="tel:+19413209868" 
              className="flex items-center gap-1.5 text-[var(--sidebar-foreground)] hover:text-white transition-colors"
              style={{ fontWeight: 'var(--font-weight-medium)' }}
            >
              <Phone className="h-3.5 w-3.5" />
              <span>941-320-9868</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── Mobile-only: Minimal Top Bar ─── */}
      <div className="lg:hidden bg-[var(--sidebar)] text-[var(--sidebar-foreground)] px-4 py-2 flex items-center justify-between" style={{ fontSize: '12px' }}>
        <div className="flex items-center gap-1.5 text-emerald-400" style={{ fontWeight: 'var(--font-weight-medium)' }}>
          <Clock className="h-3 w-3 animate-pulse" />
          <span>24/7 Emergency</span>
        </div>
        <a 
          href="tel:+19413209868" 
          className="flex items-center gap-1.5 text-[var(--sidebar-foreground)]"
          style={{ fontWeight: 'var(--font-weight-medium)' }}
        >
          <Phone className="h-3 w-3" />
          <span>941-320-9868</span>
        </a>
      </div>

      {/* ─── Main Navigation ─── */}
      <nav className="sticky top-0 w-full bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)]/15 shadow-[var(--elevation-sm)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src={logo} 
                alt="Majors Electrical Services" 
                className="h-10 lg:h-11 w-auto object-contain"
              />
            </Link>

            {/* ─── Desktop Nav Items ─── */}
            <div className="hidden lg:flex items-center gap-0 flex-1 justify-center">
              <NavigationMenu>
                <NavigationMenuList>

                  {/* ━━━ RESIDENTIAL MEGA MENU ━━━ */}
                  <NavigationMenuItem className="group">
                    <NavigationMenuTrigger 
                      className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent px-3 h-auto py-2"
                    >
                      <NavIconItem 
                        icon={Home} 
                        label="Residential" 
                        active={isActivePrefix('/who-we-serve/homeowners')} 
                      />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[820px] p-0">
                        {/* Top: Service Columns */}
                        <div className="grid grid-cols-4 gap-0 p-5 pb-4">
                          {residentialMegaMenuServices.map((group) => (
                            <div key={group.category}>
                              <div 
                                className="text-[var(--foreground)] mb-2 px-2"
                                style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT, letterSpacing: '0.5px', textTransform: 'uppercase' }}
                              >
                                {group.category}
                              </div>
                              <ul className="space-y-0">
                                {group.items.map((item) => (
                                  <li key={item.title}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={item.href}
                                        className="block select-none rounded-[var(--radius-sm)] px-2 py-1.5 no-underline outline-none transition-colors hover:bg-[var(--primary)]/8 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                                        style={{ fontSize: '13px', fontFamily: FONT }}
                                      >
                                        {item.title}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Bottom: Offer + Guarantee Strip */}
                        <div className="border-t border-[var(--border)]/10 bg-[var(--muted)]/30 px-5 py-3 flex items-center justify-between gap-4">
                          {/* Current Offer */}
                          {topOffer && (
                            <Link 
                              to={`/offers/${topOffer.slug}`}
                              className="flex items-center gap-3 group/offer"
                            >
                              <div className="flex items-center justify-center w-8 h-8 rounded-[var(--radius)] bg-[var(--primary)]/10">
                                <TicketPercent className="h-4 w-4 text-[var(--primary)]" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span 
                                    className="text-[var(--foreground)]"
                                    style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                                  >
                                    {topOffer.title}
                                  </span>
                                  <span 
                                    className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600"
                                    style={{ fontSize: '10px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                                  >
                                    STACKABLE
                                  </span>
                                </div>
                                <span 
                                  className="text-[var(--secondary)] group-hover/offer:underline"
                                  style={{ fontSize: '11px', fontFamily: FONT }}
                                >
                                  View all offers →
                                </span>
                              </div>
                            </Link>
                          )}

                          {/* Guarantee Badges */}
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
                              <Star className="h-3.5 w-3.5 text-[var(--primary)]" />
                              <span style={{ fontSize: '11px', fontFamily: FONT }}>100% Satisfaction</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
                              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                              <span style={{ fontSize: '11px', fontFamily: FONT }}>2-Year Warranty</span>
                            </div>
                          </div>

                          {/* CTA */}
                          <NavigationMenuLink asChild>
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 transition-all shadow-sm"
                              style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                            >
                              Schedule Service
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* ━━━ COMMERCIAL MEGA MENU ━━━ */}
                  <NavigationMenuItem className="group">
                    <NavigationMenuTrigger 
                      className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent px-3 h-auto py-2"
                    >
                      <NavIconItem 
                        icon={Building2} 
                        label="Commercial" 
                        active={isActivePrefix('/who-we-serve/business-owners')} 
                      />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[680px] p-0">
                        {/* Top: Service Columns + Value Prop */}
                        <div className="grid grid-cols-3 gap-0 p-5 pb-4">
                          {commercialMegaMenuServices.map((group) => (
                            <div key={group.category}>
                              <div 
                                className="text-[var(--foreground)] mb-2 px-2"
                                style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT, letterSpacing: '0.5px', textTransform: 'uppercase' }}
                              >
                                {group.category}
                              </div>
                              <ul className="space-y-0">
                                {group.items.map((item) => (
                                  <li key={item.title}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={item.href}
                                        className="block select-none rounded-[var(--radius-sm)] px-2 py-1.5 no-underline outline-none transition-colors hover:bg-[var(--primary)]/8 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                                        style={{ fontSize: '13px', fontFamily: FONT }}
                                      >
                                        {item.title}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {/* Why Commercial CTA Card */}
                          <div className="flex flex-col justify-between">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/who-we-serve/business-owners"
                                className="flex flex-col h-full rounded-[var(--radius)] bg-[var(--primary)]/5 border border-[var(--primary)]/10 p-4 hover:bg-[var(--primary)]/8 transition-colors no-underline"
                              >
                                <div 
                                  className="text-[var(--foreground)] mb-2"
                                  style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                                >
                                  Why Majors for Business?
                                </div>
                                <p 
                                  className="text-[var(--muted-foreground)] flex-1"
                                  style={{ fontSize: '12px', fontFamily: FONT }}
                                >
                                  Priority response, after-hours work, and energy-efficient solutions that pay for themselves.
                                </p>
                                <div className="mt-3 flex items-center gap-1 text-[var(--secondary)]" style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                                  Learn more <ChevronRight className="h-3 w-3" />
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>

                        {/* Bottom: Commercial Offer + CTA */}
                        <div className="border-t border-[var(--border)]/10 bg-[var(--muted)]/30 px-5 py-3 flex items-center justify-between gap-4">
                          <Link 
                            to="/offers/commercial-led-retrofit"
                            className="flex items-center gap-3 group/offer"
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-[var(--radius)] bg-[var(--primary)]/10">
                              <Percent className="h-4 w-4 text-[var(--primary)]" />
                            </div>
                            <div>
                              <span 
                                className="text-[var(--foreground)] block"
                                style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                              >
                                20% Off LED Retrofits
                              </span>
                              <span 
                                className="text-[var(--secondary)] group-hover/offer:underline"
                                style={{ fontSize: '11px', fontFamily: FONT }}
                              >
                                See commercial offers →
                              </span>
                            </div>
                          </Link>

                          <div className="flex items-center gap-1.5 text-[var(--muted-foreground)]">
                            <Clock className="h-3.5 w-3.5 text-[var(--primary)]" />
                            <span style={{ fontSize: '11px', fontFamily: FONT }}>After-hours scheduling available</span>
                          </div>

                          <NavigationMenuLink asChild>
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 transition-all shadow-sm"
                              style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                            >
                              Get Commercial Quote
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Thin Divider */}
                  <div className="h-7 w-px bg-[var(--border)]/12 mx-1" aria-hidden="true" />

                  {/* ━━━ ALL SERVICES DROPDOWN ━━━ */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="bg-transparent hover:bg-transparent text-[var(--foreground)] hover:text-[var(--primary)] data-[state=open]:text-[var(--primary)] px-3"
                      style={{ fontSize: '14px', fontWeight: 'var(--font-weight-normal)', fontFamily: FONT }}
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[780px] gap-3 p-4 grid-cols-3">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-[var(--radius)] bg-[var(--muted)]/50 p-6 no-underline outline-none focus:shadow-md transition-colors hover:bg-[var(--muted)]"
                              to="/services"
                            >
                              <div className="mt-4 mb-2 flex items-center gap-2 text-[var(--foreground)]" style={{ fontSize: '17px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                                <ShieldCheck className="h-5 w-5 text-[var(--primary)]" />
                                Browse All Services
                              </div>
                              <p className="text-[var(--muted-foreground)]" style={{ fontSize: '13px', fontFamily: FONT }}>
                                Professional electrical solutions for residential, commercial, and new construction.
                              </p>
                              <div className="mt-4 inline-flex items-center text-[var(--primary)]" style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                                View All <ChevronRight className="ml-0.5 h-3.5 w-3.5" />
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {serviceCategories.map((category) => (
                          <li key={category.id} className="col-span-1">
                            <div className="text-[var(--foreground)] mb-2 flex items-center gap-2" style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                              <category.icon className="h-3.5 w-3.5 text-[var(--primary)]" />
                              {category.title}
                            </div>
                            <ul className="space-y-0.5">
                              {category.items.slice(0, 3).map((item) => (
                                <li key={item.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={item.href}
                                      className="block select-none rounded-[var(--radius-sm)] px-2 py-1.5 no-underline outline-none transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] text-[var(--muted-foreground)]"
                                      style={{ fontSize: '13px', fontFamily: FONT }}
                                    >
                                      {item.title}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link 
                                    to={`/services#${category.id}`} 
                                    className="block text-[var(--secondary)] px-2 pt-0.5"
                                    style={{ fontSize: '11px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                                  >
                                    More →
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* ━━━ AREAS DROPDOWN ━━━ */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="bg-transparent hover:bg-transparent text-[var(--foreground)] hover:text-[var(--primary)] data-[state=open]:text-[var(--primary)] px-3"
                      style={{ fontSize: '14px', fontWeight: 'var(--font-weight-normal)', fontFamily: FONT }}
                    >
                      Areas
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[380px] gap-2 p-4 md:w-[460px] md:grid-cols-2">
                        {Object.values(locations).map((loc) => (
                          <li key={loc.slug}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={`/locations/${loc.slug}`}
                                className="block select-none space-y-0.5 rounded-[var(--radius)] p-2.5 no-underline outline-none transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                              >
                                <div className="flex items-center gap-2 text-[var(--foreground)]" style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                                  <MapPin className="h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                                  {loc.name}
                                </div>
                                <p className="line-clamp-1 text-[var(--muted-foreground)] pl-5.5" style={{ fontSize: '11px', fontFamily: FONT }}>
                                  {loc.tagline}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                        <li className="col-span-2 border-t border-[var(--border)]/15 pt-2 mt-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/locations"
                              className="block select-none rounded-[var(--radius)] p-2 text-center text-[var(--secondary)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                              style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                            >
                              View All Areas
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>

              {/* Thin Divider */}
              <div className="h-7 w-px bg-[var(--border)]/12 mx-1" aria-hidden="true" />

              {/* ━━━ ABOUT DROPDOWN — own NavigationMenu for proper right-alignment ━━━ */}
              <NavigationMenu className="relative" viewportAlign="right">
                <NavigationMenuList>
                  <NavigationMenuItem className="group">
                    <NavigationMenuTrigger 
                      className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent px-3 h-auto py-2"
                    >
                      <NavIconItem 
                        icon={Info} 
                        label="About" 
                        active={isActive('/about') || isActive('/careers')} 
                      />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[380px] p-4 space-y-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about"
                            className="flex items-center gap-3 p-3 rounded-[var(--radius)] hover:bg-[var(--muted)] transition-colors no-underline"
                          >
                            <div className="flex items-center justify-center w-9 h-9 rounded-[var(--radius)] bg-[var(--primary)]/10">
                              <Users className="h-4 w-4 text-[var(--primary)]" />
                            </div>
                            <div>
                              <div className="text-[var(--foreground)]" style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                                Our Story
                              </div>
                              <p className="text-[var(--muted-foreground)]" style={{ fontSize: '12px', fontFamily: FONT }}>
                                Family-owned since 2015. Meet the team.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link
                            to="/careers"
                            className="flex items-center gap-3 p-3 rounded-[var(--radius)] hover:bg-[var(--muted)] transition-colors no-underline"
                          >
                            <div className="flex items-center justify-center w-9 h-9 rounded-[var(--radius)] bg-emerald-500/10">
                              <Briefcase className="h-4 w-4 text-emerald-500" />
                            </div>
                            <div>
                              <div className="text-[var(--foreground)]" style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                                Careers
                              </div>
                              <p className="text-[var(--muted-foreground)]" style={{ fontSize: '12px', fontFamily: FONT }}>
                                Join our growing team of skilled electricians.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <Link
                            to="/about#certifications"
                            className="flex items-center gap-3 p-3 rounded-[var(--radius)] hover:bg-[var(--muted)] transition-colors no-underline"
                          >
                            <div className="flex items-center justify-center w-9 h-9 rounded-[var(--radius)] bg-[var(--primary)]/10">
                              <Award className="h-4 w-4 text-[var(--primary)]" />
                            </div>
                            <div>
                              <div className="text-[var(--foreground)]" style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                                Certifications & Reviews
                              </div>
                              <p className="text-[var(--muted-foreground)]" style={{ fontSize: '12px', fontFamily: FONT }}>
                                A+ BBB, 5-star Google, Generac authorized.
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>

                        {/* Guarantee Callout */}
                        <div className="mt-2 pt-3 border-t border-[var(--border)]/10">
                          <div className="flex items-center gap-3 px-3 py-2">
                            <Star className="h-4 w-4 text-[var(--primary)] shrink-0" />
                            <span 
                              className="text-[var(--muted-foreground)]"
                              style={{ fontSize: '12px', fontFamily: FONT }}
                            >
                              <strong className="text-[var(--foreground)]">Our Guarantee:</strong> 100% satisfaction, 2-year warranty, upfront pricing
                            </span>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* ─── Mobile Hamburger Button ─── */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-[var(--radius)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* ─── Desktop CTA ─── */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-[var(--radius)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 h-10 px-5 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                style={{ fontSize: '14px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Slide-Out Menu ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-[80] bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 z-[90] w-[85vw] max-w-[380px] bg-[var(--background)] shadow-2xl flex flex-col"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-[var(--border)]/15 flex-shrink-0">
                <span
                  className="text-[var(--foreground)]"
                  style={{ fontSize: '18px', fontWeight: 'var(--font-weight-semibold)', fontFamily: FONT }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="py-3">

                  {/* Primary Links */}
                  <div className="px-4 mb-1">
                    <Link
                      to="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-[var(--radius)] transition-colors",
                        isActive('/') ? "bg-[var(--primary)]/8 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                      )}
                    >
                      <Home className="h-5 w-5" />
                      <span style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                        Home
                      </span>
                    </Link>
                  </div>

                  {/* Who We Serve - Expandable */}
                  <div className="px-4 mb-1">
                    <button
                      onClick={() => toggleSection('who-we-serve')}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-3 rounded-[var(--radius)] transition-colors",
                        isActivePrefix('/who-we-serve') ? "bg-[var(--primary)]/8 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5" />
                        <span style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                          Who We Serve
                        </span>
                      </div>
                      <ChevronDown className={cn("h-4 w-4 text-[var(--muted-foreground)] transition-transform", expandedSection === 'who-we-serve' && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {expandedSection === 'who-we-serve' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-5 pr-2 pt-1 pb-1 space-y-0.5">
                            {[
                              { name: 'Homeowners', path: '/who-we-serve/homeowners', icon: Home },
                              { name: 'Business Owners', path: '/who-we-serve/business-owners', icon: Building2 },
                              { name: 'General Contractors', path: '/who-we-serve/general-contractors', icon: HardHat },
                              { name: 'Property Managers', path: '/who-we-serve/property-managers', icon: Briefcase },
                            ].map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                  "flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius)] transition-colors",
                                  isActive(item.path) ? "text-[var(--primary)] bg-[var(--primary)]/5" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
                                )}
                              >
                                <item.icon className="h-4 w-4" />
                                <span style={{ fontSize: '14px', fontFamily: FONT }}>{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Services - Expandable */}
                  <div className="px-4 mb-1">
                    <button
                      onClick={() => toggleSection('services')}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-3 rounded-[var(--radius)] transition-colors",
                        isActivePrefix('/services') ? "bg-[var(--primary)]/8 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5" />
                        <span style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                          Services
                        </span>
                      </div>
                      <ChevronDown className={cn("h-4 w-4 text-[var(--muted-foreground)] transition-transform", expandedSection === 'services' && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {expandedSection === 'services' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-5 pr-2 pt-1 pb-1">
                            <Link
                              to="/services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 px-3 py-2.5 mb-1 rounded-[var(--radius)] text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-colors"
                              style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                            >
                              Browse All Services <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                            {serviceCategories.map((cat) => (
                              <div key={cat.id} className="mb-2">
                                <div
                                  className="flex items-center gap-2 px-3 py-1.5 text-[var(--foreground)]"
                                  style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT, letterSpacing: '0.5px', textTransform: 'uppercase' as const }}
                                >
                                  <cat.icon className="h-3.5 w-3.5 text-[var(--primary)]" />
                                  {cat.title}
                                </div>
                                <div className="space-y-0.5">
                                  {cat.items.slice(0, 3).map((item) => (
                                    <Link
                                      key={item.href}
                                      to={item.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block px-3 py-2 rounded-[var(--radius)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                                      style={{ fontSize: '14px', fontFamily: FONT }}
                                    >
                                      {item.title}
                                    </Link>
                                  ))}
                                  {cat.items.length > 3 && (
                                    <Link
                                      to={`/services#${cat.id}`}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block px-3 py-1 text-[var(--secondary)]"
                                      style={{ fontSize: '12px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                                    >
                                      +{cat.items.length - 3} more →
                                    </Link>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Service Areas - Expandable */}
                  <div className="px-4 mb-1">
                    <button
                      onClick={() => toggleSection('areas')}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-3 rounded-[var(--radius)] transition-colors",
                        isActivePrefix('/locations') ? "bg-[var(--primary)]/8 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5" />
                        <span style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                          Service Areas
                        </span>
                      </div>
                      <ChevronDown className={cn("h-4 w-4 text-[var(--muted-foreground)] transition-transform", expandedSection === 'areas' && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {expandedSection === 'areas' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-5 pr-2 pt-1 pb-1 space-y-0.5">
                            {Object.values(locations).map((loc) => (
                              <Link
                                key={loc.slug}
                                to={`/locations/${loc.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                  "flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius)] transition-colors",
                                  isActive(`/locations/${loc.slug}`) ? "text-[var(--primary)] bg-[var(--primary)]/5" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
                                )}
                              >
                                <MapPin className="h-4 w-4" />
                                <span style={{ fontSize: '14px', fontFamily: FONT }}>{loc.name}</span>
                              </Link>
                            ))}
                            <Link
                              to="/locations"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 text-[var(--secondary)]"
                              style={{ fontSize: '13px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                            >
                              View All Areas <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Offers */}
                  <div className="px-4 mb-1">
                    <Link
                      to="/offers"
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-[var(--radius)] transition-colors",
                        isActivePrefix('/offers') ? "bg-[var(--primary)]/8 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                      )}
                    >
                      <TicketPercent className="h-5 w-5" />
                      <span style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                        Special Offers
                      </span>
                    </Link>
                  </div>

                  <div className="mx-4 my-2 border-t border-[var(--border)]/15" />

                  {/* About / Company Links */}
                  <div className="px-4 mb-1">
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-[var(--radius)] transition-colors",
                        isActive('/about') ? "bg-[var(--primary)]/8 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                      )}
                    >
                      <Info className="h-5 w-5" />
                      <span style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                        About Us
                      </span>
                    </Link>
                  </div>

                  <div className="px-4 mb-1">
                    <Link
                      to="/careers"
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-[var(--radius)] transition-colors",
                        isActive('/careers') ? "bg-[var(--primary)]/8 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                      )}
                    >
                      <Award className="h-5 w-5" />
                      <span style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                        Careers
                      </span>
                    </Link>
                  </div>

                  <div className="px-4 mb-1">
                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-[var(--radius)] transition-colors",
                        isActive('/contact') ? "bg-[var(--primary)]/8 text-[var(--primary)]" : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                      )}
                    >
                      <Phone className="h-5 w-5" />
                      <span style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}>
                        Contact
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="flex-shrink-0 border-t border-[var(--border)]/15 p-4 space-y-3" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 16px)' }}>
                <div className="flex items-center gap-3 px-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="text-[var(--muted-foreground)]" style={{ fontSize: '12px', fontFamily: FONT }}>
                    Licensed & Insured · FL #EC 13007355
                  </span>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-4 py-3 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 shadow-md transition-all"
                  style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+19413209868"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-[var(--radius)] border border-[var(--border)]/20 text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                  style={{ fontSize: '15px', fontWeight: 'var(--font-weight-medium)', fontFamily: FONT }}
                >
                  <Phone className="h-4 w-4" />
                  941-320-9868
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
