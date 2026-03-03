import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Home as HomeIcon,
  Building2,
  Wrench,
  Star,
  MapPin,
  Phone,
  Lightbulb,
  Battery,
  AlertTriangle,
  User,
  Briefcase,
  Users,
  Fan,
  Hammer,
  ShieldCheck,
  Bell,
  FileCheck,
  Sun,
  Eye,
  Wifi,
  Network,
  Video,
  Cable,
  Tv,
  Store,
  ExternalLink,
  Flame,
  Lock,
  Award,
  Sparkles,
  TrendingUp,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { OfferCallout } from '@/app/components/OfferCallout';
import majorsFireLogo from 'asset/149aa2ea7c5e0ef47fbd0d34aa8b1031df980b36.png?w=300&format=webp';
import heroImage from 'asset/24aa3548a5c2e32e0211db0e2b82c11ea67462b6.png?w=1200&format=webp';
import heroSrcSet from 'asset/24aa3548a5c2e32e0211db0e2b82c11ea67462b6.png?w=640;1024;1920&format=webp&as=srcset';
import residentialServiceImage from 'asset/39117b4a0ee024f3f2917d6f1da2a484045a3880.png?w=800&format=webp';
import residentialSrcSet from 'asset/39117b4a0ee024f3f2917d6f1da2a484045a3880.png?w=400;800;1200&format=webp&as=srcset';
import commercialServiceImage from 'asset/8f86d79c84ed378c935f4997798a28af21e33447.png?w=800&format=webp';
import commercialSrcSet from 'asset/8f86d79c84ed378c935f4997798a28af21e33447.png?w=400;800;1200&format=webp&as=srcset';
import careersImage from 'asset/e0d30f32cd7dc3920f11289a6cc003395c2642b3.png?w=800&format=webp';
import founderImage from 'asset/f45c62813a9a5d7b086aebd23e7f247db10a3921.png?w=800&format=webp';
import mikeImage from 'asset/72ba1c2260228eba1852b49cff83f5b869d6a035.png?w=600&format=webp';
import customerInteractionImage from 'asset/dc09f862e9fb2c9320b863e2a257807480d402e8.png?w=600&format=webp';
import panelTechImage from 'asset/6db98eed149d3991fa29d8cd2a1cb28648559a31.png?w=600&format=webp';
import teamBackImage from 'asset/fa192ccea6990bf21a815f365a6a71e2fe041d4a.png?w=600&format=webp';
import projectKitchen from 'asset/68d7140666521ac46ae1d65e1d45910472dbc85a.png?w=800&format=webp';
import projectOffice from 'asset/f42ed4e746c4c65ff1fb2011fbbe25c16fdc4e7e.png?w=800&format=webp';
import projectTech from 'asset/720377ac9610b8bd67f65e8a33a3361b5a8b55d9.png?w=800&format=webp';
import maintenanceImage from 'asset/859060effc5b00def49f2dda83f739383b7ba848.png?w=800&format=webp';
import projectSmartHome from 'asset/635d6e983d41d6188362ccf44610c1102fea01d1.png?w=800&format=webp';

export function Home() {
  const [activeTab, setActiveTab] = useState('essential');
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Enhanced animation variants with stagger
  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemFadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smoothness
      }
    }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Service categories with image mappings
  const serviceCategories = [
    {
      id: 'essential',
      label: 'Home Essentials',
      icon: HomeIcon,
      image: residentialServiceImage,
      color: 'from-sky-500 to-blue-600'
    },
    {
      id: 'safety',
      label: 'Safety & Protection',
      icon: ShieldCheck,
      image: panelTechImage,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'lighting',
      label: 'Lighting & Decor',
      icon: Lightbulb,
      image: projectKitchen,
      color: 'from-cyan-400 to-sky-500'
    },
    {
      id: 'tech',
      label: 'Smart Tech & EV',
      icon: Wifi,
      image: projectSmartHome,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'commercial',
      label: 'Commercial',
      icon: Building2,
      image: commercialServiceImage,
      color: 'from-slate-600 to-slate-800'
    },
  ];

  const specializedServices = {
    essential: [
      { title: 'Panel Upgrades', icon: Zap, desc: '200A service upgrades & fuse replacements.', image: panelTechImage },
      { title: 'Outlet & Switch', icon: Wrench, desc: 'Repair dead outlets and install dimmers.', image: customerInteractionImage },
      { title: 'Ceiling Fans', icon: Fan, desc: 'Installation, balancing & control wiring.', image: residentialServiceImage },
      { title: 'Whole Home Rewire', icon: Cable, desc: 'Replace old cloth or aluminum wiring.', image: projectTech },
      { title: 'Appliance Circuits', icon: Hammer, desc: 'Dedicated power for dryers, ranges, AC.', image: maintenanceImage },
    ],
    safety: [
      { title: 'Generators', icon: AlertTriangle, desc: 'Whole-home standby & portable interlocks.', image: panelTechImage },
      { title: 'Surge Protection', icon: Shield, desc: 'Whole-house defense against spikes.', image: projectTech },
      { title: 'Smoke & CO Detectors', icon: Bell, desc: 'Hardwired systems with battery backup.', image: residentialServiceImage },
      { title: 'Safety Inspections', icon: FileCheck, desc: 'Comprehensive NEC code compliance audits.', image: customerInteractionImage },
      { title: 'Arc Fault Breakers', icon: Zap, desc: 'Advanced fire prevention technology.', image: maintenanceImage },
    ],
    lighting: [
      { title: 'Recessed Lighting', icon: Lightbulb, desc: 'Modern, efficient LED can lighting.', image: projectKitchen },
      { title: 'Landscape Lighting', icon: Sun, desc: 'Low-voltage pathway & garden lights.', image: residentialServiceImage },
      { title: 'Security Lighting', icon: Eye, desc: 'Motion-activated floodlights.', image: commercialServiceImage },
      { title: 'Under Cabinet', icon: Zap, desc: 'Task lighting for kitchens & workspaces.', image: projectKitchen },
      { title: 'Chandelier Install', icon: Star, desc: 'Expert hanging for high ceilings.', image: projectOffice },
    ],
    tech: [
      { title: 'EV Charging', icon: Battery, desc: 'Level 2 chargers for Tesla & all EVs.', image: projectSmartHome },
      { title: 'Smart Switches', icon: Wifi, desc: 'Lutron Caseta & voice control setups.', image: projectSmartHome },
      { title: 'Data Cabling', icon: Network, desc: 'Cat6 ethernet & mesh wifi backhaul.', image: projectOffice },
      { title: 'Security Cameras', icon: Video, desc: 'Ring, Nest, & POE camera wiring.', image: projectSmartHome },
      { title: 'Home Theater', icon: Tv, desc: 'Mounted TVs with concealed wiring.', image: projectOffice },
    ],
    commercial: [
      { title: 'Office Build-outs', icon: Briefcase, desc: 'Power & data for new workspaces.', image: projectOffice },
      { title: 'LED Retrofits', icon: Lightbulb, desc: 'Energy saving upgrades for warehouses.', image: commercialServiceImage },
      { title: 'Dedicated Circuits', icon: Zap, desc: 'Clean power for sensitive equipment.', image: projectTech },
      { title: 'Parking Lot Lights', icon: Sun, desc: 'Pole lighting repair & maintenance.', image: commercialServiceImage },
      { title: 'Signage Power', icon: Store, desc: 'Electrical feeds for business signs.', image: commercialServiceImage },
    ]
  };

  const clientTypes = [
    {
      title: 'Homeowners',
      description: 'From simple repairs to full renovations, we treat your home with respect.',
      icon: User,
      link: '/who-we-serve/homeowners',
      image: residentialServiceImage
    },
    {
      title: 'Business Owners',
      description: 'Keep your operations running smoothly with reliable power solutions.',
      icon: Briefcase,
      link: '/who-we-serve/business-owners',
      image: commercialServiceImage
    },
    {
      title: 'Property Managers',
      description: 'Responsive service for your tenants and rental properties.',
      icon: Building2,
      link: '/who-we-serve/property-managers',
      image: projectOffice
    },
    {
      title: 'General Contractors',
      description: 'Partnering on new builds and remodels with strict timeline adherence.',
      icon: Users,
      link: '/who-we-serve/general-contractors',
      image: teamBackImage
    }
  ];

  const recentProjects = [
    {
      title: 'Modern Kitchen Remodel',
      category: 'Residential',
      image: projectKitchen,
      specs: 'Recessed lighting, under-cabinet LEDs'
    },
    {
      title: 'Commercial Office Build-out',
      category: 'Commercial',
      image: projectOffice,
      specs: 'Data cabling, power distribution'
    },
    {
      title: 'Panel Upgrade & Rewiring',
      category: 'Safety',
      image: projectTech,
      specs: '200A panel, whole-home surge'
    },
    {
      title: 'Smart Home Integration',
      category: 'Technology',
      image: projectSmartHome,
      specs: 'Smart switches, EV charger, cameras'
    }
  ];

  const teamMembers = [
    {
      name: "Mike Majors",
      role: "Operations Manager",
      image: mikeImage,
      specialty: "Commercial Projects"
    },
    {
      name: "Residential Team",
      role: "Customer First Service",
      image: customerInteractionImage,
      specialty: "Home Services"
    },
    {
      name: "Lead Technicians",
      role: "Master Electricians",
      image: panelTechImage,
      specialty: "Panel Upgrades"
    },
    {
      name: "Installation Crew",
      role: "New Construction Experts",
      image: teamBackImage,
      specialty: "Build-outs"
    }
  ];

  // Get active category data
  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

  return (
    <div className="w-full">
      {/* Hero Section - Enhanced with parallax */}
      <section className="relative w-full min-h-[100dvh] md:min-h-[700px] flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            opacity: heroOpacity,
            scale: heroScale
          }}
        >
          <ImageWithFallback
            src={heroImage}
            srcSet={heroSrcSet}
            sizes="100vw"
            priority
            alt="Majors Electrical Vans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

          {/* Animated grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(251,188,5,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,188,5,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            {/* Staggered content reveal */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerStagger}
              className="space-y-8"
            >
              <motion.div variants={itemFadeInUp}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/15 px-5 py-2 text-sm font-bold text-[var(--primary-light)] backdrop-blur-md shadow-lg shadow-[var(--primary)]/10 mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="h-4 w-4" />
                  </motion.div>
                  Sarasota's #1 Electrical Team • Serving Tampa Bay & Beyond
                </div>
              </motion.div>

              <motion.h1
                variants={itemFadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-2xl"
              >
                Professional Electrical<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] via-[var(--primary-lighter)] to-[var(--primary-light)]">
                  You Can Trust
                </span>
              </motion.h1>

              <motion.p
                variants={itemFadeInUp}
                className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-medium"
              >
                Residential & Commercial. From complex installations to routine maintenance, Majors Electrical delivers inspection-ready work with professional reliability.
              </motion.p>

              <motion.div
                variants={itemFadeInUp}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center rounded-xl text-lg font-black ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white hover:shadow-2xl hover:shadow-[var(--primary)]/50 h-14 px-10 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Request a Quote
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href="tel:+19413209868"
                  className="inline-flex items-center justify-center rounded-xl text-lg font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-2 border-white bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black h-14 px-10"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  941-320-9868
                </a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                variants={containerStagger}
                className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {[
                  { icon: ShieldCheck, text: 'Licensed & Insured #EC 13007355', color: 'text-emerald-400' },
                  { icon: MapPin, text: 'Locally Owned & Operated', color: 'text-blue-400' },
                  { icon: Star, text: 'Top-Rated in Sarasota', color: 'text-[var(--primary-light)]' }
                ].map((badge, i) => (
                  <motion.div
                    key={i}
                    variants={itemFadeInUp}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20"
                  >
                    <badge.icon className={`h-6 w-6 ${badge.color}`} />
                    <span className="text-sm font-semibold text-white">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-2 h-2 bg-[var(--primary-light)] rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Google Reviews Section - Enhanced */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border-y border-blue-100 py-12 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-20" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-xl border-2 border-gray-100"
            >
              <span className="text-3xl font-black text-gray-900">Google</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <Star className="h-6 w-6 fill-[#FBBC05] text-[#FBBC05]" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="text-center md:text-left">
              <p className="text-2xl font-black text-gray-900 mb-1">Perfect 5.0 Star Rating</p>
              <p className="text-gray-600 font-medium">Based on 17 verified customer reviews</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview - Enhanced with images */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerStagger}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.div variants={itemFadeInUp} className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-900 rounded-full text-sm font-bold uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                Complete Solutions
              </span>
            </motion.div>
            <motion.h2 variants={itemFadeInUp} className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">
              Electrical Excellence,<br />Every Project
            </motion.h2>
            <motion.p variants={itemFadeInUp} className="text-xl text-gray-600 leading-relaxed">
              We handle projects of all scales with the same commitment to safety, quality, and code compliance.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
          >
            {/* Residential Card */}
            <motion.div variants={itemFadeInUp} className="h-full group">
              <Link to="/services/residential" className="block h-full relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <ImageWithFallback
                    src={residentialServiceImage}
                    srcSet={residentialSrcSet}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt="Residential Home Service"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="h-14 w-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-[var(--primary)] shadow-xl">
                      <HomeIcon className="h-7 w-7" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[var(--primary)] transition-colors">Residential Electrical</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Whole-home rewiring, panel upgrades, lighting design, and safety inspections for homeowners who value quality.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--primary)] font-bold">
                    Explore Services
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Commercial Card */}
            <motion.div variants={itemFadeInUp} className="h-full group">
              <Link to="/services/commercial" className="block h-full relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <ImageWithFallback
                    src={commercialServiceImage}
                    srcSet={commercialSrcSet}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt="Commercial Construction"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="h-14 w-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-blue-600 shadow-xl">
                      <Building2 className="h-7 w-7" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Commercial Electrical</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Reliable power solutions for offices, retail, warehouses, and new construction projects. Keeping your business running.
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-bold">
                    Explore Services
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Maintenance Card */}
            <motion.div variants={itemFadeInUp} className="h-full group">
              <Link to="/services/maintenance" className="block h-full relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <ImageWithFallback
                    src={maintenanceImage}
                    alt="Electrical Maintenance"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="h-14 w-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-emerald-600 shadow-xl">
                      <Wrench className="h-7 w-7" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">Service & Maintenance</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Troubleshooting, repairs, and scheduled maintenance to prevent outages and ensure safety compliance.
                  </p>
                  <span className="inline-flex items-center gap-2 text-emerald-600 font-bold">
                    Explore Services
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Specialized Services Tabs with Images */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                <Zap className="h-4 w-4" />
                Specialized Services
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Browse by Category
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We have the expertise for every electrical need. Select a category to explore our capabilities.
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              {/* Enhanced Tabs Navigation */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {serviceCategories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      relative group flex items-center gap-3 px-6 py-4 rounded-2xl text-base font-bold transition-all duration-300 overflow-hidden
                      ${activeTab === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-2xl scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                      }
                    `}
                  >
                    {activeTab === category.id && (
                      <motion.div
                        layoutId="activeTab"
                        className={`absolute inset-0 bg-gradient-to-r ${category.color}`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <category.icon className="h-5 w-5 relative z-10" />
                    <span className="relative z-10">{category.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Enhanced Tab Content with Image Header */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Category Header with Image */}
                  <motion.div
                    className="relative h-80 rounded-3xl overflow-hidden shadow-2xl"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageWithFallback
                      src={activeCategory?.image || residentialServiceImage}
                      alt={activeCategory?.label || 'Services'}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${activeCategory?.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <activeCategory.icon className="h-16 w-16 mx-auto mb-4" />
                        <h4 className="text-4xl font-black mb-2">{activeCategory?.label}</h4>
                        <p className="text-lg opacity-90 max-w-md mx-auto px-4">
                          Professional solutions tailored to your needs
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {specializedServices[activeTab as keyof typeof specializedServices].map((service: any, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          to={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                          className="group block relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full"
                        >
                          {/* Service image background */}
                          <div className="aspect-square overflow-hidden">
                            <ImageWithFallback
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent`} />
                          </div>

                          {/* Content overlay */}
                          <div className="absolute inset-0 p-5 flex flex-col justify-end">
                            <div className={`h-12 w-12 bg-white rounded-xl flex items-center justify-center mb-3 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                              <service.icon className="h-6 w-6 text-gray-900" />
                            </div>
                            <h4 className="font-black text-white text-lg mb-2">{service.title}</h4>
                            <p className="text-sm text-white/90 leading-snug">{service.desc}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Fire & Security Sister Business Callout - Enhanced */}
      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#1a0505] to-[#0a0a0a] text-white border-y border-red-900/20 relative overflow-hidden py-24">
        {/* Animated background effects */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-1/2 h-full bg-[#C9252C]/10 blur-3xl rounded-full"
        />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #C9252C 0px, #C9252C 1px, transparent 1px, transparent 20px)' }}></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerStagger}
              className="lg:w-1/2 space-y-8"
            >
              <motion.div variants={itemFadeInUp}>
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#C9252C] bg-[#C9252C]/10 px-5 py-2 text-sm font-black text-[#ff4d5e] uppercase tracking-wide">
                  <ShieldCheck className="h-5 w-5" />
                  Sister Company
                </span>
              </motion.div>

              <motion.h2 variants={itemFadeInUp} className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
                Total Protection with<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9252C] to-[#ff4d5e]">
                  Majors Fire & Security
                </span>
              </motion.h2>

              <motion.p variants={itemFadeInUp} className="text-xl text-gray-300 leading-relaxed">
                Beyond electrical, we provide comprehensive life safety and security solutions for your home and business. Experience the same trusted quality, now for your peace of mind.
              </motion.p>

              <motion.div
                variants={containerStagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              >
                {[
                  { label: "Fire Alarm Systems", icon: Flame },
                  { label: "Low-Voltage Security", icon: Lock },
                  { label: "24/7 Surveillance", icon: Video },
                  { label: "Code Compliance", icon: FileCheck }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={itemFadeInUp}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-xl px-5 py-4 border border-[#C9252C]/20 hover:border-[#C9252C]/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-[#C9252C]/20 border border-[#C9252C]/30 flex items-center justify-center text-[#ff4d5e] group-hover:bg-[#C9252C] group-hover:text-white transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-white text-lg">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemFadeInUp} className="pt-6">
                <a
                  href="https://www.majorsfiresecurity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-2xl text-lg font-black transition-all bg-[#C9252C] text-white hover:bg-[#A01D22] h-16 px-10 shadow-2xl shadow-[#C9252C]/30 hover:shadow-[#C9252C]/50 hover:scale-105"
                >
                  <span>Visit MajorsFireSecurity.com</span>
                  <ExternalLink className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#C9252C] blur-3xl opacity-30 transform rotate-6 scale-110 animate-pulse"></div>
                <motion.div
                  whileHover={{ y: -10, rotate: 2 }}
                  className="relative bg-white p-12 rounded-3xl shadow-2xl w-full max-w-lg"
                >
                  <img
                    src={majorsFireLogo}
                    alt="Majors Fire & Security Logo"
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Callout Section - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              {/* Decorative background shapes */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[var(--primary)]/20 to-blue-500/20 rounded-[3rem] transform -rotate-3 blur-sm"></div>
              <div className="absolute -inset-4 bg-white rounded-[2.5rem] transform rotate-2 shadow-xl"></div>

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto border-4 border-white">
                <ImageWithFallback
                  src={founderImage}
                  alt="Justin Majors, Founder"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerStagger}
              className="lg:w-1/2 space-y-8"
            >
              <motion.div variants={itemFadeInUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-900 rounded-full text-sm font-bold uppercase tracking-wider">
                  <Users className="h-4 w-4" />
                  Family Owned & Operated
                </span>
              </motion.div>

              <motion.h2 variants={itemFadeInUp} className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                Meet the Founder:<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]">
                  Justin Majors
                </span>
              </motion.h2>

              <motion.div variants={containerStagger} className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <motion.p variants={itemFadeInUp}>
                  Founded in <span className="font-black text-[var(--primary)]">October 2015</span>, Majors Electrical Services was built on a simple promise: to provide Sarasota families and businesses with electrical work they can trust, from a family they can know.
                </motion.p>
                <motion.p variants={itemFadeInUp}>
                  As a native Sarasota family, we are deeply rooted in this community. We aren't just contractors; we are your neighbors. We understand the specific needs of Florida homes—from hurricane preparedness to salt air corrosion—and we build our systems to last.
                </motion.p>
                <motion.div
                  variants={itemFadeInUp}
                  className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border-l-4 border-[var(--primary)] italic"
                >
                  <p className="text-xl text-gray-900 font-medium">
                    "We treat every home we enter as if it were our own. No shortcuts, no compromises, just honest work done right."
                  </p>
                  <p className="font-black text-2xl text-[var(--primary)] mt-4">
                    — Justin Majors, Founder
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced with Images */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%)' }}></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-900 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              <Users className="h-4 w-4" />
              Our Expert Team
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">
              Meet the Professionals<br />Behind Every Project
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a dedicated group of 15 certified professionals committed to excellence. Small enough to care, big enough to deliver.
            </p>
          </motion.div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemFadeInUp}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-[var(--primary)] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2">
                      {member.specialty}
                    </div>
                    <h3 className="font-black text-xl mb-1">{member.name}</h3>
                    <p className="text-sm text-white/90 font-medium">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center bg-gray-50 rounded-2xl p-8"
          >
            <p className="text-lg text-gray-700 font-medium">
              Plus <span className="font-black text-[var(--primary)]">11 more</span> dedicated technicians, apprentices, and support staff working hard for you every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recent Projects Gallery - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/20 text-[var(--primary-light)] rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                <TrendingUp className="h-4 w-4" />
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Recent Projects
              </h2>
              <p className="text-xl text-gray-400">See our craftsmanship in action across the Suncoast.</p>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 text-[var(--primary-light)] font-bold text-lg hover:gap-4 transition-all"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemFadeInUp}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden shadow-2xl aspect-video cursor-pointer"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="inline-block bg-[var(--primary)] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-white font-black text-3xl mb-2 group-hover:text-[var(--primary-light)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 font-medium">{project.specs}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Serve - Enhanced with Images */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-900 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              <Users className="h-4 w-4" />
              Who We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">
              Dedicated Solutions<br />for Every Sector
            </h2>
            <p className="text-xl text-gray-600">
              Professional electrical services tailored to your unique needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {clientTypes.map((client, index) => (
              <motion.div
                key={index}
                variants={itemFadeInUp}
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                <Link
                  to={client.link}
                  className="block h-full relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image background */}
                  <div className="aspect-[4/5] overflow-hidden">
                    <ImageWithFallback
                      src={client.image}
                      alt={client.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xl">
                      <client.icon className="h-7 w-7 text-gray-900" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[var(--primary-light)] transition-colors">
                      {client.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {client.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[var(--primary-light)] font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust, Certifications & Community - Enhanced */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              <Award className="h-4 w-4" />
              Recognized Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Certified, Accredited & Trusted
            </h2>
            <p className="text-lg text-gray-600">
              Leading industry platforms validate our commitment to quality.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerStagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center"
          >
            {[
              {
                name: 'BuildZoom',
                badge: 'Top 1% Contractor',
                color: 'text-emerald-600 bg-emerald-50',
                icon: Star
              },
              {
                name: 'BBB',
                badge: 'A+ Accredited',
                color: 'text-blue-600 bg-blue-50',
                icon: ShieldCheck
              },
              {
                name: 'Angi',
                badge: 'Super Service',
                color: 'text-orange-600 bg-orange-50',
                icon: Award
              },
              {
                name: 'Sarasota Chamber',
                badge: 'Proud Member',
                color: 'text-purple-600 bg-purple-50',
                icon: Building2
              }
            ].map((cert, i) => (
              <motion.div
                key={i}
                variants={itemFadeInUp}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className={`h-20 w-20 rounded-2xl ${cert.color} flex items-center justify-center group-hover:shadow-xl transition-shadow`}>
                  <cert.icon className="h-10 w-10" />
                </div>
                <div className="text-center">
                  <p className="font-black text-lg text-gray-900">{cert.name}</p>
                  <p className="text-sm text-gray-600 font-semibold">{cert.badge}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Careers Section - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={careersImage}
            alt="Electrician Team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerStagger}
              className="lg:w-1/2 space-y-8"
            >
              <motion.div variants={itemFadeInUp}>
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--primary)] bg-[var(--primary)]/10 px-5 py-2 text-sm font-black text-[var(--primary-light)] uppercase tracking-wide">
                  <Users className="h-5 w-5" />
                  Join Our Family
                </span>
              </motion.div>

              <motion.h2 variants={itemFadeInUp} className="text-5xl md:text-6xl font-black leading-tight">
                More Than Just a Job.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]">
                  It's a Career.
                </span>
              </motion.h2>

              <motion.p variants={itemFadeInUp} className="text-xl text-gray-300 leading-relaxed">
                At Majors Electrical, we invest in our people. From paid apprenticeships to master electrician certification paths, we provide the tools and training you need to succeed.
              </motion.p>

              <motion.div
                variants={containerStagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  "Top-Tier Pay Scale",
                  "401(k) with Match",
                  "Take-Home Vehicle",
                  "Paid Time Off",
                  "Health, Dental, Vision",
                  "Ongoing Training"
                ].map((perk, i) => (
                  <motion.div
                    key={i}
                    variants={itemFadeInUp}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                  >
                    <CheckCircle2 className="h-6 w-6 text-[var(--primary-light)] flex-shrink-0" />
                    <span className="font-bold text-white">{perk}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemFadeInUp} className="pt-6">
                <Link
                  to="/careers"
                  className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white hover:shadow-2xl hover:shadow-[var(--primary)]/50 h-16 px-10 text-lg font-black transition-all hover:scale-105"
                >
                  View Open Positions
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="space-y-6 translate-y-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <ImageWithFallback src={residentialServiceImage} alt="Service Work" className="w-full aspect-[3/4] object-cover" />
                  </div>
                </motion.div>
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <ImageWithFallback src={heroImage} alt="Our Fleet" className="w-full aspect-[3/4] object-cover" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="relative w-full min-h-[600px] flex items-center py-24 overflow-hidden bg-gray-100">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1622386608025-19923caa77b1?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=75&w=1200"
            alt="Sarasota and Tampa Bay Area"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl border-2 border-gray-200 rounded-3xl p-12 shadow-2xl"
          >
            <div className="text-center mb-12">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white mb-6 shadow-xl"
              >
                <MapPin className="h-8 w-8" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Proudly Serving the Suncoast
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From our headquarters in Sarasota, we provide rapid response and scheduled service throughout the entire region.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Sarasota', 'Bradenton', 'Lakewood Ranch', 'Venice', 'North Port', 'Siesta Key', 'Longboat Key', 'Osprey', 'Parrish'].map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#E0F2FE" }}
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-sky-50 border-2 border-gray-200 hover:border-[var(--primary)] transition-all cursor-default group"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 group-hover:text-emerald-700" />
                  <span className="font-bold text-gray-900">{city}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/locations" className="inline-flex items-center gap-2 text-[var(--primary)] font-bold text-lg hover:gap-3 transition-all">
                View Detailed Service Map
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offer Callout */}
      <OfferCallout />

      {/* CTA Section - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-[var(--primary)] via-sky-500 to-cyan-400 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-8 leading-tight">
              Ready to Upgrade<br />Your Electrical System?
            </h2>
            <p className="text-2xl text-white/85 font-medium max-w-2xl mx-auto mb-12">
              Don't settle for "good enough" when it comes to your power. Contact Majors Electrical today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-2xl text-xl font-black transition-all bg-white text-[var(--primary)] hover:bg-gray-100 hover:shadow-2xl h-16 px-12"
              >
                Get a Free Quote
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+19413209868"
                className="inline-flex items-center justify-center rounded-2xl text-xl font-black transition-all border-4 border-white bg-white/10 text-white hover:bg-white hover:text-[var(--primary)] h-16 px-12"
              >
                <Phone className="mr-3 h-6 w-6" />
                (941) 320-9868
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
