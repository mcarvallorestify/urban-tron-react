import { useState } from 'react';
import { Link } from 'react-router-dom';
import EventModal from '@/components/events/EventModal';

const featuredEvents = [
  {
    id: 1,
    title: 'TODOS LOS DOMINGOS',
    subtitle: 'Palomo y Los Crystales',
    description: 'PALOMO Y LOS CRYSTALES\n\nValor menú completo $10.000\nDesde las 13 hrs.\n\nVen a disfrutar de la mejor música tropical con el ambiente familiar que nos caracteriza.',
    image: 'https://pdv.restify.cl/media/imagenes/1762006051_WhatsApp_Image_2025-10-31_at_18.19.44__1_.jpg',
    price: '$10.000',
  },
  {
    id: 2,
    title: 'TODOS LOS SÁBADOS',
    subtitle: 'Parrilla Bailable',
    description: 'Con los grupos La Banda de las Corbatas, Grupo Marea y como anunciador interactivo Lito Gallardo.\n\nParrilla bailable, tragos y más.',
    image: 'https://pdv.restify.cl/media/imagenes/1762005847_WhatsApp_Image_2025-10-31_at_18.19.44.jpg',
    price: 'Entrada Libre',
  },
  {
    id: 3,
    title: 'EVENTOS ESPECIALES',
    subtitle: 'Shows & Artistas',
    description: 'Humor, romance, tributos y mucho más. Mantente informado de nuestros eventos especiales cada mes.',
    image: 'https://pdv.restify.cl/media/imagenes/1764601551_WhatsApp_Image_2025-11-30_at_12.28.39.jpg',
    price: 'Desde $10.000',
  },
];

const EventsPreview = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof featuredEvents[0] | null>(null);

  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Próximos Eventos</h2>
          <p className="section-subtitle">
            Música en vivo, shows de humor y celebraciones cada fin de semana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event, index) => (
            <div 
              key={event.id}
              className="event-card group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                    {event.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{event.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/eventos" className="outline-button inline-block">
            Ver Todos los Eventos
          </Link>
        </div>
      </div>

      <EventModal 
        event={selectedEvent} 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </section>
  );
};

export default EventsPreview;
