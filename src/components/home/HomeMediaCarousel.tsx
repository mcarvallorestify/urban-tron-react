import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import type { HomeMediaItem } from '@/lib/mediaUtils';

interface HomeMediaCarouselProps {
  items: HomeMediaItem[];
}

const HomeMediaCarousel = ({ items }: HomeMediaCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const item = items[current];

  useEffect(() => {
    setCurrent(0);
  }, [items.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    void video.play().catch(() => undefined);
  }, [current, muted, item?.url]);

  useEffect(() => {
    if (items.length < 2) return;
    if (item?.kind === 'video') return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [items.length, item?.kind]);

  if (!item) {
    return (
      <div className="flex h-full min-h-[240px] items-center justify-center bg-muted text-lg text-muted-foreground">
        Cargando momentos...
      </div>
    );
  }

  const goPrev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % items.length);

  return (
    <div className="relative h-full min-h-[260px] overflow-hidden bg-black">
      {item.kind === 'video' ? (
        <video
          key={item.url}
          ref={videoRef}
          src={item.url}
          className="h-full w-full object-cover"
          playsInline
          autoPlay
          muted={muted}
          loop
          controls={false}
          preload="metadata"
        />
      ) : (
        <img
          key={item.url}
          src={item.url}
          alt={item.label}
          className="h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
        <p className="text-base font-semibold text-white md:text-lg">{item.label}</p>
        {items.length > 1 && (
          <p className="mt-1 text-sm text-white/80">
            {current + 1} de {items.length}
          </p>
        )}
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      {item.kind === 'video' && (
        <button
          type="button"
          onClick={() => setMuted((value) => !value)}
          className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white"
          aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        >
          {muted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
        </button>
      )}
    </div>
  );
};

export default HomeMediaCarousel;
