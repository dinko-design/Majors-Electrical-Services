import { motion } from 'motion/react';
import { FileText, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/app/components/layout/PageHero';

export function Terms() {
  return (
    <div className="w-full">
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
        badge={{ icon: FileText, text: 'Service Agreement' }}
        variant="dark"
        compact
      />

      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg dark:prose-invert max-w-none space-y-8"
          >
            <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
              <p className="text-sm text-muted-foreground mb-0">Last Updated: October 24, 2023</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using the services provided by Majors Electrical Services ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
              <p className="text-muted-foreground">
                We provide electrical installation, repair, and maintenance services for residential and commercial properties. All services are performed by licensed and insured electricians in compliance with local and state codes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Scheduling and Cancellations</h2>
              <p className="text-muted-foreground">
                We strive to arrive within the scheduled window. If you need to cancel or reschedule, please provide at least 24 hours notice. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment is due upon completion of services unless otherwise agreed upon in writing. We accept major credit cards, checks, and cash. A deposit may be required for large projects or special order materials.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Warranty</h2>
              <p className="text-muted-foreground mb-4">
                We stand behind our work.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Labor Warranty:</strong> We provide a 1-year warranty on all labor.</li>
                <li><strong>Parts Warranty:</strong> Parts are covered by the manufacturer's warranty.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                This warranty does not cover damage caused by misuse, abuse, negligence, or acts of God.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Liability</h2>
              <p className="text-muted-foreground">
                Majors Electrical Services is licensed and insured. Our liability is limited to the cost of the services provided. We are not liable for any indirect, incidental, or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Information</h2>
              <p className="text-muted-foreground">
                Questions about the Terms of Service should be sent to us at:
                <br />
                <strong>Majors Electrical Services</strong><br />
                4872 Old Ranch Road<br />
                Sarasota, FL 34241<br />
                (941) 320-9868<br />
                service@majorselectric.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
