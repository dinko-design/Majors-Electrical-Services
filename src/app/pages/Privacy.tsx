import { motion } from 'motion/react';
import { Shield, Lock, FileText } from 'lucide-react';

export function Privacy() {
  return (
    <div className="w-full">
      <section className="bg-muted/30 py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Your Data is Secure
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We value your trust and are committed to protecting your personal information.
          </p>
        </div>
      </section>

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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information you provide directly to us when you request a quote, schedule a service, or contact us for support. This may include your name, email address, phone number, and property address.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our electrical services.</li>
                <li>Process your requests and schedule appointments.</li>
                <li>Send you confirmations, invoices, and technical notices.</li>
                <li>Communicate with you about products, services, offers, and events.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell your personal information. We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf (e.g., payment processors).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Security</h2>
              <p className="text-muted-foreground">
                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
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
