import Layout from '@/components/layout/Layout';
import EventCard from '@/components/events/EventCard';

const allEvents = [
  {
    id: 1,
    title: 'TODOS LOS SÁBADOS',
    description: 'Con los grupos La Banda de las Corbatas, Grupo Marea y como anunciador interactivo Lito Gallardo.\n\nParrilla bailable, tragos y más.',
    image: 'https://pdv.restify.cl/media/imagenes/1762005847_WhatsApp_Image_2025-10-31_at_18.19.44.jpg',
  },
  {
    id: 2,
    title: 'TODOS LOS DOMINGOS',
    description: 'PALOMO Y LOS CRYSTALES\n\nValor menú completo $10.000\nDesde las 13 hrs.',
    image: 'https://pdv.restify.cl/media/imagenes/1762006051_WhatsApp_Image_2025-10-31_at_18.19.44__1_.jpg',
  },
  {
    id: 3,
    title: 'Gran Noche de Clásicos y Fiesta',
    description: '🎶 ¡Gran Noche de Clásicos y Fiesta en Troncal Urbano! 🎶\n\n🎉 Celebración de Aniversario: 50 Años de Trayectoria de Los Viking\'s 5 🎉\n\nVIERNES 5 DE DICIEMBRE\nDesde las 21:00 HRS.',
    image: 'https://pdv.restify.cl/media/imagenes/1762828476_WhatsApp_Image_2025-11-10_at_20.22.32.jpg',
  },
  {
    id: 4,
    title: 'Entre Cumbias y Rancheras',
    description: 'Sombras del Valle, Dj Cris Coe, Palomo y los Crystales, El Bandolero y su Banda Ranchera, Ilusión Ranchera Échale Gallo.\n\nEntrada General $10.000',
    image: 'https://pdv.restify.cl/media/imagenes/1762007001_WhatsApp_Image_2025-10-31_at_18.19.44__1_.jpg',
  },
  {
    id: 5,
    title: 'Humor y Romance',
    description: 'Ven a disfrutar y divertirte con el humor de Memo Bunke y mas tarde con la voz romántica de John Pastén.',
    image: 'https://pdv.restify.cl/media/imagenes/1764601551_WhatsApp_Image_2025-11-30_at_12.28.39.jpg',
  },
  {
    id: 6,
    title: 'CUMBIA NENA Tributo Amar Azul y La Banda de las Corbatas',
    description: '🎉 Troncal Urbano Presenta 🎉\n💙 Tributo a Amar Azul – Cumbia Nena\n👔 La Banda de las Corbatas\n\n📅 Viernes 12 de diciembre\n⏰ Desde las 21:30 hrs',
    image: 'https://pdv.restify.cl/media/imagenes/1764601949_WhatsApp_Image_2025-11-30_at_12.28.40.jpg',
  },
  {
    id: 7,
    title: 'El Flaco - Gira despedida',
    description: '✨ ¡Gira de despedida del Flaco de Dinamita Show! ✨\nPrepárate para una noche llena de risas y buen humor 😂.\n\nPreventas: $12.000\nBoletería: $15.000',
    image: 'https://pdv.restify.cl/media/imagenes/1764601697_WhatsApp_Image_2025-11-30_at_12.28.39__1_.jpg',
  },
];

const Eventos = () => {
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
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eventos;
