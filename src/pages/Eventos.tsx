import { useState /*, useEffect */ } from 'react';
// import { supabase } from '@/lib/supabaseClient';
import Layout from '@/components/layout/Layout';
import EventCard from '@/components/events/EventCard';
import EventModal from '@/components/events/EventModal';
import img1 from '/src/images/1.jpeg';
import img2 from '/src/images/2.jpeg';
import img3 from '/src/images/3.jpeg';
import img4 from '/src/images/4.jpeg';
import img5 from '/src/images/5.jpeg';
import img6 from '/src/images/6.jpeg';
// Lista local de eventos. Para usar Supabase, descomenta el useEffect y el fetch más abajo.
const allEvents = [
  {
    id: 1,
    title: 'Reventón Tropical',
    description: 'Grupo Fama, Palomo y Los Cristales, La Banda de las Corbatas.',
    image: img1,
  },
  {
    id: 2,
    title: 'Potencia',
    description: '🎉 Potencia, Palomo y Los Cristales, La Banda de las Corbatas.',
    image: img2,
  },{
    id: 3,
    title: 'Los Golpes y la Banda de las Corbatas',
    description: '🎶  Los Golpes y la Banda de las Corbatas',
    image: img3,
  },
  {
    id: 4,
    title: 'Los Charros de Argentina',
    description: 'Los Charros de Argentina, junto a La Banda de las Corbatas y Palomo y los Cristales, te invitan a una noche llena de música, baile y diversión.\n\n¡No te lo pierdas!',
    image: img4,
  },
  
  {
    id: 5,
    title: 'TODOS LOS SÁBADOS',
    description: 'Con los grupos La Banda de las Corbatas, Grupo Marea y como anunciador interactivo Lito Gallardo.\n\nParrilla bailable, tragos y más.\n\nLa mejor fiesta de Villa Alemana cada sábado.',
    image: img5,
  },
  {
    id: 6,
    title: 'TODOS LOS DOMINGOS',
    description: 'PALOMO Y LOS CRYSTALES\n\nValor menú completo $10.000\nDesde las 13 hrs.\n\nVen a disfrutar de la mejor música tropical con el ambiente familiar que nos caracteriza.',
    image: img6,
  },
];

const Eventos = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof allEvents[0] | null>(null);
  // const [events, setEvents] = useState<typeof allEvents>([]);

  // useEffect(() => {
  //   // Si quieres volver a usar Supabase, descomenta esto y ajusta según tu tabla
  //   const fetchEvents = async () => {
  //     const { data, error } = await supabase.from('events').select('*');
  //     if (!error && data) setEvents(data);
  //   };
  //   fetchEvents();
  // }, []);

  // const eventsToShow = events.length > 0 ? events : allEvents;
  const eventsToShow = allEvents;

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsToShow.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                onViewMore={() => setSelectedEvent(event)}
              />
            ))}
          </div>
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
