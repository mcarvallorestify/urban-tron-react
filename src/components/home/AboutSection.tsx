const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-card/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden aspect-[3/4]">
                <img
                  src="https://pdv.restify.cl/media/imagenes/1755705198_WhatsApp_Image_2025-08-19_at_22.13.42__1_.jpg"
                  alt="Eventos especiales"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-lg overflow-hidden aspect-[3/4]">
                <img
                  src="https://pdv.restify.cl/media/imagenes/1755630548_490301338_1166774602127050_3198940630697480348_n.jpg"
                  alt="Música en vivo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-heading text-primary tracking-wide mb-6">
              Más de 18 Años Creando Momentos
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En Troncal Urbano llevamos más de 18 años compartiendo momentos inolvidables en Villa Alemana. 
                Somos mucho más que un restaurante: somos un espacio de encuentro donde la buena comida, 
                la música en vivo y el ambiente festivo se unen para crear experiencias únicas.
              </p>
              <p>
                Nuestro sello está en las parrilladas al estilo chileno, los platos abundantes para compartir 
                y la energía que se vive en cada uno de nuestros eventos.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="text-center sm:text-left">
                <div className="text-3xl mb-2">🎵</div>
                <h4 className="text-foreground font-medium mb-1">Música en Vivo</h4>
                <p className="text-muted-foreground text-sm">Cada fin de semana</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl mb-2">🔥</div>
                <h4 className="text-foreground font-medium mb-1">Parrilladas</h4>
                <p className="text-muted-foreground text-sm">Estilo chileno</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl mb-2">🚗</div>
                <h4 className="text-foreground font-medium mb-1">Estacionamiento</h4>
                <p className="text-muted-foreground text-sm">Privado y seguro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
