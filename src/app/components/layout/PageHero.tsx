import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

const FONT = "'Poppins', sans-serif";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: {
    icon: LucideIcon;
    text: string;
  };
  variant?: 'dark' | 'light' | 'gradient';
  children?: React.ReactNode;
  compact?: boolean;
}

export function PageHero({
  title,
  subtitle,
  badge,
  variant = 'dark',
  children,
  compact = false,
}: PageHeroProps) {
  const isDark = variant === 'dark' || variant === 'gradient';

  const bgClass = {
    dark: 'bg-[var(--sidebar)]',
    light: 'bg-[var(--muted)]/40',
    gradient: 'bg-gradient-to-br from-[var(--sidebar)] via-gray-900 to-[var(--sidebar)]',
  }[variant];

  return (
    <section className={`relative overflow-hidden ${bgClass} ${compact ? 'py-14 md:py-16' : 'py-20 md:py-24'}`}>
      {isDark && (
        <>
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle, var(--primary-light) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--secondary)]/8 rounded-full blur-[100px]" />
        </>
      )}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {badge && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/15 px-4 py-1.5 text-sm font-medium"
              style={{ fontFamily: FONT, color: isDark ? 'var(--primary-light)' : 'var(--primary)' }}
            >
              <badge.icon className="h-4 w-4" />
              {badge.text}
            </div>
          )}

          <h1
            className={`text-4xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-[var(--foreground)]'}`}
            style={{ fontFamily: FONT }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`mt-5 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-[var(--muted-foreground)]'}`}
              style={{ fontFamily: FONT }}
            >
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
