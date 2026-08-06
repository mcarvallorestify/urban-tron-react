import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Images, MessageCircle, UtensilsCrossed } from 'lucide-react';
import HomeMediaCarousel from '@/components/home/HomeMediaCarousel';
import {
  EMPRESA_ID,
  fetchPublicEmpresaVitrina,
  type PublicEvento,
} from '@/lib/publicVitrina';
import { isVideoUrl, type HomeMediaItem } from '@/lib/mediaUtils';
import logo from '@/images/logo.png';

const WHATSAPP_RESERVA =
  'https://wa.me/56985862531?text=Hola%2C%20quiero%20hacer%20una%20reserva.';

const buildMediaItems = (
  eventos: PublicEvento[],
  galeria: { id: number; media: string }[],
): HomeMediaItem[] => {
  const fromGaleria: HomeMediaItem[] = galeria
    .filter((item) => item.media)
    .map((item) => ({
      id: `galeria-${item.id}`,
      url: item.media,
      kind: isVideoUrl(item.media) ? 'video' : 'image',
      label: isVideoUrl(item.media) ? 'Video del restaurante' : 'Momento en Troncal Urbano',
    }));

  const fromEventos: HomeMediaItem[] = [...eventos]
    .sort((a, b) => Number(Boolean(b.principal)) - Number(Boolean(a.principal)) || a.id - b.id)
    .map((evento) => {
      const url = evento.img || evento.img_promocional || '';
      if (!url) return null;
      return {
        id: `evento-${evento.id}`,
        url,
        kind: isVideoUrl(url) ? 'video' : 'image',
        label: evento.titulo || 'Evento',
      } satisfies HomeMediaItem;
    })
    .filter((item): item is HomeMediaItem => item !== null);

  const videos = [...fromGaleria, ...fromEventos].filter((item) => item.kind === 'video');
  const images = [...fromGaleria, ...fromEventos].filter((item) => item.kind === 'image');

  // Prioridad: videos primero, luego imágenes (eventos principales ya ordenados arriba)
  const seen = new Set<string>();
  return [...videos, ...images].filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
};

const actionClass =
  'flex min-h-[88px] w-full items-center justify-center gap-3 rounded-2xl border-2 border-primary/40 bg-card px-4 py-5 text-center text-lg font-bold uppercase tracking-wide text-foreground shadow-lg transition hover:border-primary hover:bg-primary hover:text-primary-foreground md:min-h-[100px] md:text-xl';

const HomeStart = () => {
  const [mediaItems, setMediaItems] = useState<HomeMediaItem[]>([]);
  const [featuredTitle, setFeaturedTitle] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const data = await fetchPublicEmpresaVitrina(EMPRESA_ID);
        if (!mounted) return;

        setMediaItems(buildMediaItems(data.eventos, data.galeria));

        const principal = [...data.eventos]
          .filter((evento) => evento.principal)
          .sort((a, b) => b.id - a.id)[0];
        setFeaturedTitle(principal?.titulo ?? data.eventos[0]?.titulo ?? null);
      } catch {
        if (mounted) {
          setMediaItems([]);
          setFeaturedTitle(null);
        }
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const goToCarta = () => {
    document.getElementById('carta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-background px-4 pb-8 pt-24 md:pb-10 md:pt-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col items-center text-center md:mb-8">
          <img
            src={logo}
            alt="Troncal Urbano"
            className="mb-3 h-20 w-auto object-contain md:h-24"
          />
          <p className="text-base text-muted-foreground md:text-lg">
            Restaurante y eventos en Villa Alemana
          </p>
          <p className="mt-2 text-xl font-semibold text-primary md:text-2xl">
            Elija una opción aquí abajo
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6 lg:items-stretch">
          <div className="overflow-hidden rounded-2xl border border-border/50 shadow-xl lg:min-h-[420px]">
            <HomeMediaCarousel items={mediaItems} />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <Link to="/eventos" className={actionClass}>
                <CalendarDays className="h-7 w-7 shrink-0" />
                Ver eventos
              </Link>
              <button type="button" onClick={goToCarta} className={actionClass}>
                <UtensilsCrossed className="h-7 w-7 shrink-0" />
                Ver carta
              </button>
              <a
                href={WHATSAPP_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${actionClass} border-[#25D366]/50 bg-[#25D366]/15 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white`}
              >
                <MessageCircle className="h-7 w-7 shrink-0" />
                Reservar
              </a>
              <Link to="/galeria" className={actionClass}>
                <Images className="h-7 w-7 shrink-0" />
                Galería
              </Link>
            </div>

            {featuredTitle && (
              <Link
                to="/eventos"
                className="rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 text-center transition hover:bg-primary/20"
              >
                <p className="text-sm uppercase tracking-widest text-primary">Próximo evento</p>
                <p className="mt-1 text-lg font-semibold text-foreground md:text-xl">
                  {featuredTitle}
                </p>
                <p className="mt-2 text-base text-primary">Tocar para ver todos →</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStart;
