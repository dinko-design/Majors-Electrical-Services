import { Link } from 'react-router';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const FONT = "'Poppins', sans-serif";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = 'Ready to Get Started?',
  subtitle = "Contact Majors Electrical today for a free consultation and quote. No project is too big or too small.",
}: CTASectionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[var(--primary)] via-sky-500 to-cyan-400">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight"
            style={{ fontFamily: FONT }}
          >
            {title}
          </h2>
          <p
            className="text-xl text-white/85 font-medium max-w-2xl mx-auto mb-10"
            style={{ fontFamily: FONT }}
          >
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center rounded-xl text-lg font-black transition-all bg-white text-[var(--primary)] hover:bg-gray-100 hover:shadow-2xl h-14 px-10"
              style={{ fontFamily: FONT }}
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+19413209868"
              className="inline-flex items-center justify-center rounded-xl text-lg font-bold transition-all border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[var(--primary)] h-14 px-10"
              style={{ fontFamily: FONT }}
            >
              <Phone className="mr-2 h-5 w-5" />
              (941) 320-9868
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
