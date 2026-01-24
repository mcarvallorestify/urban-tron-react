import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '/src/images/1.jpeg';
import img2 from '/src/images/2.jpeg';
import img3 from '/src/images/3.jpeg';
import img4 from '/src/images/4.jpeg';
import img5 from '/src/images/5.jpeg';
import img6 from '/src/images/6.jpeg';

// const carouselImages = [
//   {
//     url: 'https://pdv.restify.cl/media/imagenes/1762005847_WhatsApp_Image_2025-10-31_at_18.19.44.jpg',
//     alt: 'Evento Sábados'
//   },
//   {
//     url: 'https://pdv.restify.cl/media/imagenes/1762006051_WhatsApp_Image_2025-10-31_at_18.19.44__1_.jpg',
//     alt: 'Evento Domingos'
//   },
//   {
//     url: 'https://pdv.restify.cl/media/imagenes/1762828476_WhatsApp_Image_2025-11-10_at_20.22.32.jpg',
//     alt: 'Gran Noche de Clásicos'
//   },
//   {
//     url: 'https://pdv.restify.cl/media/imagenes/1764601551_WhatsApp_Image_2025-11-30_at_12.28.39.jpg',
//     alt: 'Humor y Romance'
//   },
//   {
//     url: 'https://pdv.restify.cl/media/imagenes/1762007001_WhatsApp_Image_2025-10-31_at_18.19.44__1_.jpg',
//     alt: 'Entre Cumbias y Rancheras'
//   },
// ];
const carouselImages = [
  { url: img1, alt: 'Evento Sábados' },
  { url: img2, alt: 'Evento Domingos' },
  { url: img3, alt: 'Gran Noche de Clásicos' },
  { url: img4, alt: 'Entre Cumbias y Rancheras' },
  { url: img5, alt: 'Humor y Romance' },
  { url: img6, alt: 'Cumbia Nena Tributo Amar Azul' },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <section className="relative w-full h-[300px] md:h-[500px] overflow-hidden bg-muted">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary' : 'bg-background/60'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
