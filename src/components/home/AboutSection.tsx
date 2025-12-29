const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto">
        {/* About Us */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Sobre nosotros</h2>
          <p className="text-muted-foreground leading-relaxed">
            Troncal Urbano es un Restaurante y salón de eventos en Villa Alemana, 
            especializado en parrilladas caseras, música en vivo todos los fines de semana 
            y un espacio perfecto para celebrar con estilo y sabor.
          </p>
        </div>

        {/* Highlights */}
        <div className="text-center mb-8">
          <h2 className="section-title">Trayectoria & Lo que nos distingue</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="rounded-lg overflow-hidden mb-4 aspect-video">
              <img
                src="https://pdv.restify.cl/media/imagenes/1755705198_WhatsApp_Image_2025-08-19_at_22.13.42__1_.jpg"
                alt="Eventos especiales"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-foreground font-medium">
              Eventos especiales y espacios acondicionados para celebraciones cada fin de semana
            </p>
          </div>

          <div className="text-center">
            <div className="rounded-lg overflow-hidden mb-4 aspect-video">
              <img
                src="https://pdv.restify.cl/media/imagenes/1755630548_490301338_1166774602127050_3198940630697480348_n.jpg"
                alt="Música en vivo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-foreground font-medium">
              Música en vivo y bailable cada fin de semana
            </p>
          </div>

          <div className="text-center">
            <div className="rounded-lg overflow-hidden mb-4 aspect-video bg-muted flex items-center justify-center">
              <div className="text-6xl">🚗</div>
            </div>
            <p className="text-foreground font-medium">
              Estacionamiento privado y ambiente cómodo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
