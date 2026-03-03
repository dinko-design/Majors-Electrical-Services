import { Play, Film } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const FONT = "'Poppins', sans-serif";
const BASE_URL = 'https://majorselectrical.com';

interface VideoPlayerProps {
  videoUrl?: string;
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  serviceName?: string;
}

export function VideoPlayer({
  videoUrl,
  title,
  description,
  thumbnailUrl,
  serviceName,
}: VideoPlayerProps) {
  const hasVideo = !!videoUrl;

  const getEmbedUrl = (url: string) => {
    const ytMatch = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
    );
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

    return url;
  };

  return (
    <>
      {hasVideo && title && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: title || `${serviceName} - Majors Electrical Services`,
              description:
                description ||
                `Watch our ${serviceName?.toLowerCase()} work in Sarasota, FL`,
              thumbnailUrl:
                thumbnailUrl || `${BASE_URL}/gallery/majors-van-jobsite.webp`,
              uploadDate: new Date().toISOString().split('T')[0],
              contentUrl: videoUrl,
              embedUrl: getEmbedUrl(videoUrl),
              publisher: {
                '@type': 'Organization',
                name: 'Majors Electrical Services',
                url: BASE_URL,
              },
            })}
          </script>
        </Helmet>
      )}

      <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm">
        {hasVideo ? (
          <div className="relative w-full aspect-video">
            <iframe
              src={getEmbedUrl(videoUrl)}
              title={title || `${serviceName} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative w-full aspect-video bg-gradient-to-br from-[var(--sidebar)] via-gray-900 to-[var(--sidebar)] flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, var(--primary-light) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px]" />

            <div className="relative z-10 text-center px-6">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white/10 flex items-center justify-center ring-2 ring-white/20">
                <Play className="h-7 w-7 text-white ml-1" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Film className="h-4 w-4 text-[var(--primary-light)]" />
                <span
                  className="text-xs font-bold uppercase tracking-wider text-[var(--primary-light)]"
                  style={{ fontFamily: FONT }}
                >
                  Coming Soon
                </span>
              </div>
              <h4
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: FONT }}
              >
                {serviceName
                  ? `See Our ${serviceName} in Action`
                  : 'Project Video'}
              </h4>
              <p
                className="text-sm text-gray-400 max-w-sm mx-auto"
                style={{ fontFamily: FONT }}
              >
                We're working on project videos to show you the quality of our
                work firsthand. Check back soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
