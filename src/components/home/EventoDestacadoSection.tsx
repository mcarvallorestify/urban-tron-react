import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  EMPRESA_ID,
  fetchPublicEmpresaVitrina,
  type PublicEvento,
} from '@/lib/publicVitrina';

interface FeaturedEvent {
  id: number;
  title: string;
  description: string;
  image: string;
  subtitle?: string;
  price?: string;
}

const mapEvent = (evento: PublicEvento): FeaturedEvent | null => {
  const image = evento.img || evento.img_promocional || '';
  if (!image) return null;

  return {
    id: evento.id,
    title: evento.titulo || 'Evento destacado',
    description: evento.descripcion || '',
    image,
    price:
      evento.valor_entrada != null
        ? `$${new Intl.NumberFormat('es-CL').format(evento.valor_entrada)}`
        : undefined,
  };
};

const EventoDestacadoSection = () => {
  const [featuredEvent, setFeaturedEvent] = useState<FeaturedEvent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchFeaturedEvent = async () => {
      try {
        const data = await fetchPublicEmpresaVitrina(EMPRESA_ID);
        if (!mounted) return;

        const principal = [...data.eventos]
          .filter((evento) => evento.principal)
          .sort((a, b) => b.id - a.id)[0];

        setFeaturedEvent(principal ? mapEvent(principal) : null);
      } catch {
        if (mounted) setFeaturedEvent(null);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    fetchFeaturedEvent();

    return () => {
      mounted = false;
    };
  }, []);

  if (isLoading || !featuredEvent) return null;

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="container mx-auto lg:max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch">
          <div className="rounded-xl overflow-hidden border border-border/40 bg-card/40 shadow-lg">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="w-full h-full object-cover min-h-[280px] lg:min-h-[240px]"
            />
          </div>

          <div className="rounded-xl border border-border/40 bg-card/60 p-6 md:p-8 lg:p-6 leading-relaxed">
            <p className="text-primary font-bold text-lg md:text-xl mb-3">Evento destacado</p>
            <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-2">
              {featuredEvent.title}
            </h3>
            {featuredEvent.subtitle && (
              <p className="text-primary mb-4">{featuredEvent.subtitle}</p>
            )}
            {featuredEvent.price && (
              <span className="inline-block bg-primary text-primary-foreground text-sm px-4 py-1 rounded-full font-medium mb-4">
                {featuredEvent.price}
              </span>
            )}
            {featuredEvent.description && (
              <p className="text-foreground/95 whitespace-pre-line">{featuredEvent.description}</p>
            )}
            <div className="mt-6">
              <Link to="/eventos" className="gold-button inline-block">
                Ver todos los eventos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventoDestacadoSection;
