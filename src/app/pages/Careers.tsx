import { motion } from 'motion/react';
import { Briefcase, Users, GraduationCap, Heart, DollarSign } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import careersHeroImage from 'asset/2a31a77a7d8f0440e8c0d2632beb026bc5977045.png';

export function Careers() {
  const benefits = [
    {
      title: "Top-Tier Compensation",
      desc: "Competitive hourly wages, performance bonuses, and overtime availability.",
      icon: DollarSign
    },
    {
      title: "Full Benefits Package",
      desc: "Health, dental, and vision insurance for you and your family.",
      icon: Heart
    },
    {
      title: "Career Growth",
      desc: "Paid training, apprenticeship sponsorship, and clear paths to management.",
      icon: GraduationCap
    },
    {
      title: "Tools & Tech",
      desc: "Take-home company vehicle, iPad for dispatching, and allowance for personal tools.",
      icon: Briefcase
    }
  ];

  const positions = [
    {
      title: "Journeyman Electrician",
      type: "Full-Time",
      loc: "Sarasota, FL",
      desc: "Experienced residential/commercial technician capable of running service calls independently.",
      pay: "$28 - $38 / hr"
    },
    {
      title: "Electrical Apprentice (Year 1-3)",
      type: "Full-Time",
      loc: "Bradenton/Sarasota",
      desc: "Learn the trade under master electricians. Must be enrolled or willing to enroll in school.",
      pay: "$18 - $24 / hr"
    },
    {
      title: "Service Dispatcher",
      type: "Full-Time",
      loc: "Sarasota Office",
      desc: "Coordinate technician schedules, handle customer calls, and manage permits.",
      pay: "$20 - $26 / hr"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <ImageWithFallback
             src={careersHeroImage}
             alt="Majors Electrical Team with Truck"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-2xl"
           >
             <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6">
               <Briefcase className="h-4 w-4 mr-2" />
               We're Hiring
             </div>
             <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
               Build a Career You Can Be Proud Of.
             </h1>
             <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
               Join the Suncoast's most trusted electrical team. We value craftsmanship, safety, and people who care about their work.
             </p>
             <a 
               href="#openings" 
               className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-bold h-14 px-8 text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
             >
               View Open Positions
             </a>
           </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">More Than Just a Paycheck</h2>
            <p className="text-muted-foreground text-lg">
              We know that to take care of our customers, we must first take care of our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-8 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-24 bg-muted/30 border-y border-border">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Current Openings</h2>
            
            <div className="space-y-6">
              {positions.map((job, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:border-primary/50 transition-colors shadow-sm">
                   <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">{job.title}</h3>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{job.type}</span>
                      </div>
                      <p className="text-muted-foreground mb-4 md:max-w-2xl">{job.desc}</p>
                      <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                         <span className="flex items-center gap-1"><Users className="h-4 w-4 text-primary" /> {job.loc}</span>
                         <span className="flex items-center gap-1"><DollarSign className="h-4 w-4 text-primary" /> {job.pay}</span>
                      </div>
                   </div>
                   <div className="flex-shrink-0">
                      <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-foreground text-background font-bold h-11 px-6 hover:bg-foreground/90 transition-all w-full md:w-auto">
                        Apply Now
                      </Link>
                   </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 rounded-xl text-center">
               <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">Don't see your role?</h3>
               <p className="text-blue-700 dark:text-blue-300 mb-6">
                 We are always looking for talent. Send us your resume and we'll keep it on file.
               </p>
               <Link to="/contact" className="text-primary font-bold hover:underline">
                 Contact Recruiting
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
