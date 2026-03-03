import { motion } from 'motion/react';
import { 
  Shield, 
  Users, 
  Clock, 
  CheckCircle2, 
  Award, 
  Heart, 
  HardHat, 
  Play,
  MapPin,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { locations } from '@/app/data/locations';
import ourStoryImage from 'asset/49cb41d3d279b42c8e61df9adb727cdcb233c3d0.png';
import founderImage from 'asset/f45c62813a9a5d7b086aebd23e7f247db10a3921.png';
import teamVideoCover from 'asset/2a31a77a7d8f0440e8c0d2632beb026bc5977045.png';

// Imports to match Homepage
import careersImage from 'asset/e0d30f32cd7dc3920f11289a6cc003395c2642b3.png';
import mikeImage from 'asset/72ba1c2260228eba1852b49cff83f5b869d6a035.png';
import customerInteractionImage from 'asset/dc09f862e9fb2c9320b863e2a257807480d402e8.png';
import panelTechImage from 'asset/6db98eed149d3991fa29d8cd2a1cb28648559a31.png';
import teamBackImage from 'asset/fa192ccea6990bf21a815f365a6a71e2fe041d4a.png';
import residentialServiceImage from 'asset/39117b4a0ee024f3f2917d6f1da2a484045a3880.png';
import heroImage from 'asset/24aa3548a5c2e32e0211db0e2b82c11ea67462b6.png';
import vansImage from 'asset/ebbdfb70b36c3d41cc238fa41db1e5da94fd237d.png';

export function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const stats = [
    { label: "Years in Business", value: "8+" },
    { label: "Projects Completed", value: "5,000+" },
    { label: "Team Members", value: "25+" },
    { label: "5-Star Reviews", value: "500+" }
  ];

  const timeline = [
    { year: "2015", title: "Foundation", desc: "Justin Majors establishes Majors Electrical Services with one van and a vision for better service." },
    { year: "2017", title: "Commercial Expansion", desc: "We expanded our team to handle large-scale commercial build-outs and office renovations." },
    { year: "2019", title: "Majors Fire & Security", desc: "Launched our sister company to provide comprehensive life-safety solutions." },
    { year: "2021", title: "New Headquarters", desc: "Moved into our current facility in Sarasota to support our growing fleet and inventory." },
    { year: "2024", title: "Service Leader", desc: "Recognized as a top-rated electrical contractor in the Suncoast region." }
  ];

  const certifications = [
    "State Certified Electrical Contractor (EC 13007355)",
    "OSHA 30 Certified Safety Managers",
    "Generac Authorized Dealer",
    "Lutron Pro Installers",
    "Tesla Certified Installers"
  ];

  // Updated to match Homepage team members and images
  const teamMembers = [
    {
      name: "Mike Majors",
      role: "Operations Manager",
      image: mikeImage,
      bio: "Leading our operations with a focus on efficiency and customer satisfaction."
    },
    {
      name: "Residential Team",
      role: "Customer First Service",
      image: customerInteractionImage,
      bio: "Our dedicated team ensures your home electrical needs are met with care."
    },
    {
      name: "Lead Technicians",
      role: "Master Electricians",
      image: panelTechImage,
      bio: "Highly skilled experts handling complex electrical systems and panels."
    },
    {
      name: "Installation Crew",
      role: "New Construction Experts",
      image: teamBackImage,
      bio: "Building the future of Sarasota with precision and speed."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6">
              Since 2015
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Powering the Community We Call Home.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Majors Electrical Services is more than just a contractor. We are your neighbors, committed to safety, integrity, and building lasting relationships through quality craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video / Intro Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-5xl mx-auto group cursor-pointer bg-neutral-900">
             <ImageWithFallback
               src={teamVideoCover}
               alt="Majors Electrical Team"
               className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(var(--primary),0.5)] group-hover:scale-110 transition-transform duration-300">
                   <Play className="h-8 w-8 text-white fill-current" />
                </div>
             </div>
             <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold">See How We Work</h3>
                <p className="text-neutral-300">A day in the life of the Majors team.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-foreground/20">
            {stats.map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-medium opacity-90 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built on Family Values</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Founded by Justin Majors, our company started with a simple observation: the electrical trade was full of technical skill but often lacked customer service. Homeowners were left waiting for "the cable guy" window, and businesses were frustrated by lack of communication.
                </p>
                <p>
                  Justin set out to change that. By combining the rigorous technical standards of large commercial firms with the personal touch of a family-owned business, Majors Electrical Services was born.
                </p>
                <p>
                  Today, we operate with the same core mission: <strong>To provide safe, reliable, and professional electrical solutions that our community can trust.</strong>
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
                 <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                   <Shield className="h-5 w-5 text-primary" />
                   The Majors Guarantee
                 </h3>
                 <p className="text-muted-foreground italic">
                   "We stand behind our work 100%. If you aren't satisfied with the installation, we will return and make it right. No questions asked."
                 </p>
              </div>
            </div>

            <div className="relative">
               <div className="absolute -left-8 -top-8 w-full h-full border-2 border-primary/20 rounded-2xl"></div>
               <div className="relative rounded-2xl overflow-hidden shadow-xl bg-background">
                 <ImageWithFallback
                   src={founderImage}
                   alt="Founder Justin Majors"
                   className="w-full h-auto"
                 />
                 <div className="p-8 bg-white dark:bg-zinc-900">
                    <h4 className="font-bold text-xl">Justin Majors</h4>
                    <p className="text-primary font-medium">President & Founder</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Meet Our Experts</h2>
            <p className="text-muted-foreground text-lg">
              The skilled professionals behind our 5-star reputation. Licensed, trained, and dedicated to excellence.
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="group relative"
              >
                <div className="rounded-xl overflow-hidden aspect-[3/4] mb-4 bg-muted relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                    <p className="text-sm font-medium">{member.bio}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Careers Section - Updated with Homepage images */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <ImageWithFallback
             src={careersImage}
             alt="Electrician Team"
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-background/10 pattern-grid-lg opacity-10" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white mb-6 border border-white/20">
                <Briefcase className="h-3 w-3 mr-2" />
                We're Hiring
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Majors Team</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                We are always looking for driven, skilled electricians to join our growing family. We offer competitive pay, benefits, and a culture that respects your craft.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center rounded-md bg-white text-primary font-bold h-12 px-8 shadow-lg hover:bg-white/90 transition-all"
                >
                  View Open Positions
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-md bg-transparent border border-white/30 text-white font-bold h-12 px-8 hover:bg-white/10 transition-all"
                >
                  Why Work Here?
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative hidden md:block">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4 translate-y-8">
                   <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/10">
                     <ImageWithFallback src={residentialServiceImage} alt="Team Meeting" className="w-full aspect-square object-cover" />
                   </div>
                 </div>
                 <div className="space-y-4">
                   <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/10">
                     <ImageWithFallback src={heroImage} alt="Electrician at work" className="w-full aspect-square object-cover" />
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Certifications */}
      <section className="py-24 bg-background">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Recognition & Standards</h2>
              <p className="text-muted-foreground">Certified excellence you can depend on.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               {/* Community */}
               <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Community First</h3>
                  </div>
                  <div className="rounded-xl overflow-hidden mb-6">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJpbmclMjBjaGFyaXR5JTIwd29yayUyMGdyb3VwfGVufDF8fHx8MTc3MDE4Njc5M3ww&ixlib=rb-4.1.0&q=80&w=800" 
                      alt="Charity Event"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We are proud sponsors of local youth sports, the Sarasota Food Bank, and provide pro-bono safety inspections for local non-profits. We believe in powering our community in more ways than one.
                  </p>
               </div>

               {/* Certifications */}
               <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Industry Certified</h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {certifications.map((cert, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border shadow-sm">
                         <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                         <span className="font-medium text-foreground">{cert}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-3 gap-4">
                     <div className="p-4 bg-background rounded-lg flex flex-col items-center justify-center border border-border shadow-sm">
                       <span className="font-bold text-lg">A+</span>
                       <span className="text-xs text-muted-foreground uppercase">BBB Rated</span>
                     </div>
                     <div className="p-4 bg-background rounded-lg flex flex-col items-center justify-center border border-border shadow-sm">
                       <span className="font-bold text-lg">Top</span>
                       <span className="text-xs text-muted-foreground uppercase">Angi Pro</span>
                     </div>
                     <div className="p-4 bg-background rounded-lg flex flex-col items-center justify-center border border-border shadow-sm">
                       <span className="font-bold text-lg">5.0</span>
                       <span className="text-xs text-muted-foreground uppercase">Google</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Areas Served Map Section */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-4">
                <MapPin className="h-3 w-3 mr-2" />
                Local Service
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Serving the Suncoast</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our technicians are stationed throughout Sarasota and Manatee counties to ensure rapid response times. From Venice to Bradenton, we have you covered.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.values(locations).map((loc) => (
                  <Link 
                    key={loc.slug} 
                    to={`/locations/${loc.slug}`}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors group"
                  >
                    <span className="font-semibold text-foreground">{loc.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg border border-border relative bg-neutral-100">
               {/* Updated with Vans Image */}
               <ImageWithFallback 
                 src={vansImage}
                 alt="Majors Electrical Service Vans"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Experience the Difference</h2>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
             Ready to work with an electrical team that puts you first? Contact us today.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
               to="/contact"
               className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-bold h-12 px-8 shadow-lg hover:bg-primary/90 transition-all"
             >
               Get in Touch
             </Link>
             <Link
               to="/services"
               className="inline-flex items-center justify-center rounded-md bg-background border border-border text-foreground font-bold h-12 px-8 hover:bg-muted transition-all"
             >
               View Services
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
