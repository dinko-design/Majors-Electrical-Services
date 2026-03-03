import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

const FONT = "'Poppins', sans-serif";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: {
    icon: LucideIcon;
    text: string;
  };
  align?: 'center' | 'left';
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl mb-14 ${alignClass}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-bold uppercase tracking-wider mb-4 ${align === 'center' ? '' : ''}`}
          style={{ fontFamily: FONT }}
        >
          <badge.icon className="h-4 w-4" />
          {badge.text}
        </div>
      )}
      <h2
        className="text-3xl md:text-4xl font-black tracking-tight text-[var(--foreground)] leading-tight"
        style={{ fontFamily: FONT }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed"
          style={{ fontFamily: FONT }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
