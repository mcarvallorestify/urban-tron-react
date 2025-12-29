import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import EventCard from '@/components/events/EventCard';
import EventModal from '@/components/events/EventModal';

const allEvents = [
  {
    id: 1,
    title: 'TODOS LOS SÁBADOS',
    description: 'Con los grupos La Banda de las Corbatas, Grupo Marea y como anunciador interactivo Lito Gallardo.\n\nParrilla bailable, tragos y más.\n\nLa mejor fiesta de Villa Alemana cada sábado.',
    image: 'https://pdv.restify.cl/media/imagenes/1762005847_WhatsApp_Image_2025-10-31_at_18.19.44.jpg',
  },
  {
    id: 2,
    title: 'TODOS LOS DOMINGOS',
    description: 'PALOMO Y LOS CRYSTALES\n\nValor menú completo $10.000\nDesde las 13 hrs.\n\nVen a disfrutar de la mejor música tropical con el ambiente familiar que nos caracteriza.',
    image: 'https://pdv.restify.cl/media/imagenes/1762006051_WhatsApp_Image_2025-10-31_at_18.19.44__1_.jpg',
  },
  {
    id: 3,
    title: 'Gran Noche de Clásicos y Fiesta',
    description: '🎶 ¡Gran Noche de Clásicos y Fiesta en Troncal Urbano! 🎶\n\n🎉 Celebración de Aniversario: 50 Años de Trayectoria de Los Viking\'s 5 🎉\n\n¡No te pierdas una noche épica de música en vivo y baile!\n\n🗓️ Fecha: VIERNES 5 DE DICIEMBRE\n⏰ Horario: Desde las 21:00 HRS.\n\nArtistas Invitados:\n• Los Viking\'s 5: Celebrando sus 50 años de trayectoria\n• Palomo y Los Crystales\n• La Banda de los Corbatas\n\n💰 Valor Preventa por Persona: $12.000\n📞 Reservas al: +569 85862531',
    image: 'https://pdv.restify.cl/media/imagenes/1762828476_WhatsApp_Image_2025-11-10_at_20.22.32.jpg',
  },
  {
    id: 4,
    title: 'Entre Cumbias y Rancheras',
    description: 'Una noche espectacular con lo mejor de dos géneros musicales.\n\nArtistas:\n• Sombras del Valle\n• Dj Cris Coe\n• Palomo y los Crystales\n• El Bandolero y su Banda Ranchera\n• Ilusión Ranchera Échale Gallo\n\n💰 Entrada General $10.000',
    image: 'https://pdv.restify.cl/media/imagenes/1762007001_WhatsApp_Image_2025-10-31_at_18.19.44__1_.jpg',
  },
  {
    id: 5,
    title: 'Humor y Romance',
    description: 'Ven a disfrutar y divertirte con el humor de Memo Bunke y más tarde con la voz romántica de John Pastén.\n\nUna noche perfecta para reír y emocionarse con los mejores artistas.',
    image: 'https://pdv.restify.cl/media/imagenes/1764601551_WhatsApp_Image_2025-11-30_at_12.28.39.jpg',
  },
  {
    id: 6,
    title: 'CUMBIA NENA Tributo Amar Azul',
    description: '🎉 Troncal Urbano Presenta 🎉\n\n💙 Tributo a Amar Azul – Cumbia Nena\n👔 La Banda de las Corbatas\n\n📅 Viernes 12 de diciembre\n⏰ Desde las 21:30 hrs\n\n¡Una noche para bailar, disfrutar y cantar a todo ritmo! 🎶💃🕺',
    image: 'https://pdv.restify.cl/media/imagenes/1764601949_WhatsApp_Image_2025-11-30_at_12.28.40.jpg',
  },
  {
    id: 7,
    title: 'El Flaco - Gira despedida',
    description: '✨ ¡Gira de despedida del Flaco de Dinamita Show! ✨\n\nPrepárate para una noche llena de risas y buen humor 😂\n\nVen a disfrutar en familia o con amigos de la inigualable rutina de Stand Up Comedy del querido y reconocido Flaco, quien se despide tras una extensa y destacada carrera en el mundo del humor 🎤🤣\n\n¡No te lo puedes perder! 🎭🔥\n\n💰 Preventas: $12.000\n💰 Boletería: $15.000',
    image: 'https://pdv.restify.cl/media/imagenes/1764601697_WhatsApp_Image_2025-11-30_at_12.28.39__1_.jpg',
  },
];

const Eventos = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof allEvents[0] | null>(null);

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
            {allEvents.map((event) => (
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
