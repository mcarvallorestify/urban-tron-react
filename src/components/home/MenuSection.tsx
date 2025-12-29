import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const menuImages = [
  {
    url: 'https://pdv.restify.cl/media/imagenes/1758898276_WhatsApp_Image_2025-09-25_at_21.05.17.jpg',
    title: 'Menú Principal',
  },
  {
    url: 'https://pdv.restify.cl/media/imagenes/1758898354_WhatsApp_Image_2025-09-25_at_21.05.17__1_.jpg',
    title: 'Parrilladas',
  },
  {
    url: 'https://pdv.restify.cl/media/imagenes/1758898399_WhatsApp_Image_2025-09-25_at_21.05.18.jpg',
    title: 'Platos del Día',
  },
  {
    url: 'https://pdv.restify.cl/media/imagenes/1758898421_WhatsApp_Image_2025-09-25_at_21.05.18__1_.jpg',
    title: 'Entradas',
  },
  {
    url: 'https://pdv.restify.cl/media/imagenes/1758898443_WhatsApp_Image_2025-09-25_at_21.05.18__2_.jpg',
    title: 'Bebidas',
  },
  {
    url: 'https://pdv.restify.cl/media/imagenes/1758898462_WhatsApp_Image_2025-09-25_at_21.05.18__3_.jpg',
    title: 'Postres',
  },
  {
    url: 'https://pdv.restify.cl/media/imagenes/1758898477_WhatsApp_Image_2025-09-25_at_21.05.18__4_.jpg',
    title: 'Especiales',
  },
];

const MenuSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % menuImages.length);
  };

  return (
    <section id="carta" className="py-20 md:py-32 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestra Carta</h2>
          <p className="section-subtitle">
            Sabores auténticos preparados con ingredientes frescos y la sazón que nos caracteriza
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          <div className="menu-category-card p-6 text-center">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Lunes a Viernes</p>
            <p className="text-3xl font-heading text-primary font-bold">$7.000</p>
            <p className="text-muted-foreground text-sm mt-1">Menú completo por persona</p>
          </div>
          <div className="menu-category-card p-6 text-center">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Fines de Semana & Festivos</p>
            <p className="text-3xl font-heading text-primary font-bold">$10.000</p>
            <p className="text-muted-foreground text-sm mt-1">Menú completo por persona</p>
          </div>
        </div>

        {/* Menu Gallery */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[3/4] md:aspect-[4/3] rounded-lg overflow-hidden bg-card border border-border/30">
            <img
              src={menuImages[currentIndex].url}
              alt={menuImages[currentIndex].title}
              className="w-full h-full object-contain bg-background"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 border border-border/50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 border border-border/50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Page Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 px-4 py-2 rounded-full border border-border/50">
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {menuImages.length}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
            {menuImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-primary shadow-[0_0_15px_rgba(202,138,4,0.3)]' 
                    : 'border-border/30 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/56985862531?text=Hola%2C%20quiero%20hacer%20una%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button inline-block"
          >
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
