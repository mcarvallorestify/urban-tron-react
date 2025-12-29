import Layout from '@/components/layout/Layout';

const galleryVideos = [
  'https://pdv.restify.cl/media/imagenes/1755629257_3B579DAB-66E5-48F8-BD5F-C6A933090CFB.jpg',
  'https://pdv.restify.cl/media/imagenes/1755705198_WhatsApp_Image_2025-08-19_at_22.13.42__1_.jpg',
  'https://pdv.restify.cl/media/imagenes/1755630548_490301338_1166774602127050_3198940630697480348_n.jpg',
  'https://pdv.restify.cl/media/imagenes/1762005847_WhatsApp_Image_2025-10-31_at_18.19.44.jpg',
  'https://pdv.restify.cl/media/imagenes/1762006051_WhatsApp_Image_2025-10-31_at_18.19.44__1_.jpg',
  'https://pdv.restify.cl/media/imagenes/1762828476_WhatsApp_Image_2025-11-10_at_20.22.32.jpg',
  'https://pdv.restify.cl/media/imagenes/1764601551_WhatsApp_Image_2025-11-30_at_12.28.39.jpg',
];

const Galeria = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <h1 className="section-title">Galería</h1>
          <p className="text-center text-primary font-heading text-lg mb-2">
            Te invitamos a revivir momentos!
          </p>
          <p className="text-center text-muted-foreground mb-12">
            ¿Listo para crear tu propio recuerdo? ¡Ven y vive la experiencia!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryVideos.map((url, index) => (
              <div 
                key={index} 
                className="aspect-video rounded-lg overflow-hidden bg-muted shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={url}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12">
            Síguenos en nuestras redes sociales para ver más contenido
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Galeria;
