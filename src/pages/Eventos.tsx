import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Layout from '@/components/layout/Layout';
import EventCard from '@/components/events/EventCard';
import EventModal from '@/components/events/EventModal';

const EMPRESA_ID = 70;

interface EventItem {
  id: number;
  title: string;
  description: string;
  image: string;
  subtitle?: string;
  price?: string;
}

const getString = (value: unknown) => (typeof value === 'string' ? value : '');
const getNumber = (value: unknown) => (typeof value === 'number' ? value : null);

const mapEventFromRow = (row: Record<string, unknown>): EventItem | null => {
  const image =
    getString(row.img) ||
    getString(row.img_promocional) ||
    getString(row.image) ||
    getString(row.imagen) ||
    getString(row.image_url) ||
    getString(row.imagen_url) ||
    '';

  if (!image) return null;

  const valorEntrada = getNumber(row.valor_entrada);

  return {
    id: Number(row.id) || 0,
    title: getString(row.titulo) || getString(row.title) || 'Evento',
    description: getString(row.descripcion) || getString(row.description) || '',
    image,
    subtitle: getString(row.subtitulo) || getString(row.subtitle) || undefined,
    price:
      getString(row.precio) ||
      getString(row.price) ||
      (valorEntrada !== null
        ? `$${new Intl.NumberFormat('es-CL').format(valorEntrada)}`
        : undefined),
  };
};

const Eventos = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('eventos')
        .select('*')
        .eq('empresa', EMPRESA_ID)
        .order('id', { ascending: false });

      if (!mounted) return;

      if (error || !data) {
        setEvents([]);
        setIsLoading(false);
        return;
      }

      const mappedEvents = data
        .map((row) => mapEventFromRow(row as Record<string, unknown>))
        .filter((event): event is EventItem => event !== null);

      setEvents(mappedEvents);
      setIsLoading(false);
    };

    fetchEvents();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Layout>
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <h1 className="section-title text-primary">Eventos</h1>
          <h2 className="section-subtitle">Te invitamos a nuestras actividades</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Queremos que disfruten de cada evento que organizamos, ven con tus amigos y familia
            a pasar un tiempo grato en armonía...
          </p>

          <h3 className="text-2xl font-heading font-semibold text-center mb-8">
            Nuestros Eventos
          </h3>

          {isLoading ? (
            <p className="text-center text-muted-foreground">Cargando eventos...</p>
          ) : events.length === 0 ? (
            <p className="text-center text-muted-foreground">No hay eventos disponibles.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  {...event}
                  onViewMore={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <EventModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </Layout>
  );
};

export default Eventos;
