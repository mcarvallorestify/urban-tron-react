import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';

const EMPRESA_ID = 70;

interface FeaturedEvent {
  id: number;
  title: string;
  description: string;
  image: string;
  subtitle?: string;
  price?: string;
}

const getString = (value: unknown) => (typeof value === 'string' ? value : '');
const getNumber = (value: unknown) => (typeof value === 'number' ? value : null);

const mapEventFromRow = (row: Record<string, unknown>): FeaturedEvent | null => {
  const title =
    getString(row.title) ||
    getString(row.titulo) ||
    getString(row.nombre) ||
    'Evento destacado';

  const description =
    getString(row.description) ||
    getString(row.descripcion) ||
    getString(row.detalle) ||
    '';

  const image =
    getString(row.img) ||
    getString(row.img_promocional) ||
    getString(row.image) ||
    getString(row.imagen) ||
    getString(row.image_url) ||
    getString(row.imagen_url) ||
    getString(row.poster) ||
    '';

  if (!image) return null;

  const valorEntrada = getNumber(row.valor_entrada);

  return {
    id: Number(row.id) || 0,
    title,
    description,
    image,
    subtitle: getString(row.subtitle) || getString(row.subtitulo) || undefined,
    price:
      getString(row.price) ||
      getString(row.precio) ||
      (valorEntrada !== null
        ? `$${new Intl.NumberFormat('es-CL').format(valorEntrada)}`
        : undefined),
  };
};

const EventoDestacadoSection = () => {
  const [featuredEvent, setFeaturedEvent] = useState<FeaturedEvent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchFeaturedEvent = async () => {
      const { data, error } = await supabase
        .from('eventos')
        .select('*')
        .eq('empresa', EMPRESA_ID)
        .eq('principal', true)
        .order('id', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!mounted) return;

      if (error || !data) {
        setFeaturedEvent(null);
        setIsLoading(false);
        return;
      }

      const mapped = mapEventFromRow(data as Record<string, unknown>);
      setFeaturedEvent(mapped);
      setIsLoading(false);
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