import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { ArrowRight, Loader2, ShieldCheck, Lock } from 'lucide-react';

interface QuickServiceFormProps {
  serviceTitle: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  details: string;
}

export function QuickServiceForm({ serviceTitle }: QuickServiceFormProps) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Submitted', { ...data, service: serviceTitle });
    toast.success(`Request received! We'll contact you shortly about your ${serviceTitle} needs.`);
    reset();
  };

  return (
    <div className="w-full max-w-md mx-auto lg:ml-auto bg-card/95 backdrop-blur-md border border-border/50 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3 uppercase tracking-wider">
          <ShieldCheck className="h-3.5 w-3.5" />
          Free Estimate
        </div>
        <h3 className="text-2xl font-bold text-foreground">
          Get a Quote for <span className="text-primary">{serviceTitle}</span>
        </h3>
        <p className="text-muted-foreground text-sm mt-2">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.name ? 'border-destructive focus:ring-destructive/50' : 'border-border'}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="text-xs text-destructive mt-1 ml-1">{errors.name.message}</span>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone (555) 555-5555"
                className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.phone ? 'border-destructive focus:ring-destructive/50' : 'border-border'}`}
                {...register('phone', { 
                  required: 'Phone is required',
                  pattern: {
                    value: /^[0-9-+() ]*$/,
                    message: 'Invalid phone number'
                  }
                })}
              />
              {errors.phone && <span className="text-xs text-destructive mt-1 ml-1">{errors.phone.message}</span>}
            </div>
            <div>
              <label htmlFor="zipCode" className="sr-only">Zip Code</label>
              <input
                id="zipCode"
                type="text"
                placeholder="Zip Code"
                className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.zipCode ? 'border-destructive focus:ring-destructive/50' : 'border-border'}`}
                {...register('zipCode', { required: 'Zip is required' })}
              />
              {errors.zipCode && <span className="text-xs text-destructive mt-1 ml-1">{errors.zipCode.message}</span>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.email ? 'border-destructive focus:ring-destructive/50' : 'border-border'}`}
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <span className="text-xs text-destructive mt-1 ml-1">{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="details" className="sr-only">Project Details</label>
            <textarea
              id="details"
              placeholder="Briefly describe your project..."
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              {...register('details')}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Get My Free Quote <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
          <Lock className="h-3 w-3" />
          <span>Your information is secure and never shared.</span>
        </div>
      </form>
    </div>
  );
}
