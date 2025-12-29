import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/events/EventCard';
import EventModal from '@/components/events/EventModal';

const featuredEvents = [
  {
    id: 1,
    title: 'TODOS LOS DOMINGOS',
    description: 'PALOMO Y LOS CRYSTALES\n\nValor menú completo $10.000\nDesde las 13 hrs.\n\nVen a disfrutar de la mejor música tropical con el ambiente familiar que nos caracteriza.',
    image: 'https://pdv.restify.cl/media/imagenes/1762006051_WhatsApp_Image_2025-10-31_at_18.19.44__1_.jpg',
  },
  {
    id: 2,
    title: 'TODOS LOS SÁBADOS',
    description: 'Con los grupos La Banda de las Corbatas, Grupo Marea y como anunciador interactivo Lito Gallardo.\n\nParrilla bailable, tragos y más.\n\nLa mejor fiesta de Villa Alemana cada sábado.',
    image: 'https://pdv.restify.cl/media/imagenes/1762005847_WhatsApp_Image_2025-10-31_at_18.19.44.jpg',
  },
  {
    id: 3,
    title: 'Humor y Romance',
    description: 'Ven a disfrutar y divertirte con el humor de Memo Bunke y mas tarde con la voz romántica de John Pastén.\n\nUna noche perfecta para reír y emocionarse.',
    image: 'https://pdv.restify.cl/media/imagenes/1764601551_WhatsApp_Image_2025-11-30_at_12.28.39.jpg',
  },
];

const EventsPreview = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof featuredEvents[0] | null>(null);

  return (
    <section className="py-12 md:py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-title">Eventos</h2>
        <h3 className="section-subtitle">Te invitamos a nuestras actividades</h3>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Queremos que disfruten de cada evento que organizamos, ven con tus amigos y familia 
          a pasar un tiempo grato en armonía...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredEvents.map((event) => (
            <EventCard 
              key={event.id} 
              {...event} 
              onViewMore={() => setSelectedEvent(event)}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/eventos">
            <Button className="bg-primary hover:bg-brown-dark text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-all duration-300">
              Ver todos los eventos
            </Button>
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
