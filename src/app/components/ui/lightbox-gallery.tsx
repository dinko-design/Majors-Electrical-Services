import { useState, useCallback, useEffect } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, X, ZoomIn, ImageOff } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FONT = "'Poppins', sans-serif";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxGalleryProps {
  images: GalleryImage[];
  serviceName: string;
  serviceUrl?: string;
}

function ImageWithError({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 ${className}`}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        <div className="text-center p-4">
          <ImageOff className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-xs text-gray-400" style={{ fontFamily: FONT }}>
            Image coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onClick={onClick}
      onError={() => setError(true)}
    />
  );
}

export function LightboxGallery({
  images,
  serviceName,
  serviceUrl,
}: LightboxGalleryProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStart(null);
  };

  if (images.length === 0) return null;

  const openLightbox = (idx: number) => {
    setActiveIndex(idx);
    setOpen(true);
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${serviceName} Gallery - Majors Electrical Services`,
    description: `Photos of ${serviceName.toLowerCase()} projects completed by Majors Electrical Services in Sarasota, FL`,
    ...(serviceUrl && { url: serviceUrl }),
    image: images.map((img, i) => ({
      '@type': 'ImageObject',
      contentUrl: img.src.startsWith('/') ? `https://majorselectrical.com${img.src}` : img.src,
      name: img.alt,
      ...(img.caption && { caption: img.caption }),
      position: i + 1,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.slice(0, 6).map((img, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === Math.min(images.length - 1, 5) && images.length > 6;

          return (
            <button
              key={idx}
              onClick={() => openLightbox(idx)}
              className={`relative rounded-xl overflow-hidden border border-border/50 shadow-sm group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                isFirst ? 'col-span-2 row-span-2 aspect-[4/3]' : 'aspect-square'
              }`}
              aria-label={`View ${img.alt}`}
            >
              <ImageWithError
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </div>
              {isLast && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: FONT }}
                  >
                    +{images.length - 6} more
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content className="fixed inset-0 z-50 flex items-center justify-center outline-none">
            <DialogPrimitive.Title className="sr-only">
              {images[activeIndex]?.alt || 'Gallery image'}
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">
              Image {activeIndex + 1} of {images.length} from {serviceName} gallery
            </DialogPrimitive.Description>

          <div
            className="relative flex flex-col items-center justify-center min-h-[60vh] max-h-[90vh]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </>
            )}

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center p-8 sm:p-12 w-full h-full"
              >
                <ImageWithError
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </motion.div>
            </AnimatePresence>

            {/* Caption & Counter */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
              <div className="flex items-end justify-between max-w-4xl mx-auto">
                <div>
                  {images[activeIndex].caption && (
                    <p
                      className="text-white text-sm sm:text-base font-medium mb-1"
                      style={{ fontFamily: FONT }}
                    >
                      {images[activeIndex].caption}
                    </p>
                  )}
                  <p className="text-white/60 text-xs" style={{ fontFamily: FONT }}>
                    {images[activeIndex].alt}
                  </p>
                </div>
                <span
                  className="text-white/70 text-sm font-medium shrink-0 ml-4"
                  style={{ fontFamily: FONT }}
                >
                  {activeIndex + 1} of {images.length}
                </span>
              </div>
            </div>
          </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
