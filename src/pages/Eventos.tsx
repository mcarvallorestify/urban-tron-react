import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import EventCard from '@/components/events/EventCard';
import EventModal from '@/components/events/EventModal';
import {
  EMPRESA_ID,
  fetchPublicEmpresaVitrina,
  type PublicEvento,
} from '@/lib/publicVitrina';

interface EventItem {
  id: number;
  title: string;
  description: string;
  image: string;
  subtitle?: string;
  price?: string;
}

const mapEvent = (evento: PublicEvento): EventItem | null => {
  const image = evento.img || evento.img_promocional || '';
  if (!image) return null;

  return {
    id: evento.id,
    title: evento.titulo || 'Evento',
    description: evento.descripcion || '',
    image,
    price:
      evento.valor_entrada != null
        ? `$${new Intl.NumberFormat('es-CL').format(evento.valor_entrada)}`
        : undefined,
  };
};

const Eventos = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchEvents = async () => {
      try {
        const data = await fetchPublicEmpresaVitrina(EMPRESA_ID);
        if (!mounted) return;

        const mappedEvents = [...data.eventos]
          .sort((a, b) => a.id - b.id)
          .map(mapEvent)
          .filter((event): event is EventItem => event !== null);

        setEvents(mappedEvents);
      } catch {
        if (mounted) setEvents([]);
      } finally {
        if (mounted) setIsLoading(false);
      }
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
