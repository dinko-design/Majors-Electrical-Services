import { Link } from 'react-router';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ShieldCheck } from 'lucide-react';
import logo from 'asset/91feb0d897fe4eff5945be1f445e0abfe2d2e4ca.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Majors Electrical Services" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Majors Electrical Services is Florida's trusted partner for residential and commercial electrical solutions. Experience, reliability, and professionalism you can count on.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/residential" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Residential Electrical
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Commercial Electrical
                </Link>
              </li>
              <li>
                <Link to="/services/panel-upgrades" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Panel Upgrades
                </Link>
              </li>
              <li>
                <Link to="/services/lighting" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Lighting Installation
                </Link>
              </li>
              <li>
                <Link to="/services/ev-charging" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  EV Charger Install
                </Link>
              </li>
              <li>
                <Link to="/services/generators" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Generator Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/locations/sarasota" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sarasota
                </Link>
              </li>
              <li>
                <Link to="/locations/bradenton" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Bradenton
                </Link>
              </li>
              <li>
                <Link to="/locations/lakewood-ranch" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Lakewood Ranch
                </Link>
              </li>
              <li>
                <Link to="/locations/venice" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Venice
                </Link>
              </li>
              <li>
                <Link to="/locations/tampa-bay" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tampa Bay
                </Link>
              </li>
              <li>
                <Link to="/locations/north-port" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  North Port
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  4872 Old Ranch Road<br />
                  Sarasota, FL 34241
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+19413209868" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (941) 320-9868
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/50">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Fully Licensed & Insured</p>
                  State License #EC 13007355
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Majors Electrical Services. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link to="/sitemap" className="text-xs text-muted-foreground hover:text-foreground">Sitemap</Link>
            <span className="text-xs text-muted-foreground">
              Partner: <a href="https://www.majorsfiresecurity.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Majors Fire & Security</a>
            </span>
          </div>
        </div>

        {/* Dinko Design Signoff */}
        <div className="pt-4 flex justify-center text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            Sarasota Web Design Agency <a href="https://www.dinkodesign.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary ml-1">DINKO DESIGN</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
