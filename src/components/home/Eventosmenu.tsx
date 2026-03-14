import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '/src/images/1.jpeg';
import img2 from '/src/images/2.jpeg';


const Eventosmenu = () => {
  // Carrusel de imágenes (agrega la imagen de Labanda Delascorbatas cuando esté disponible)
  const images = [
    { url: img1, alt: 'Evento 1' },
    { url: img2, alt: 'Evento 2' }
  ];
  const [current, setCurrent] = React.useState(0);
  const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section className="py-12 md:py-20 px-4 border-t border-b border-border/60 shadow-lg bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Carrusel: en PC a la izquierda, en móvil abajo */}
        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-center">
          <div className="relative w-full max-w-xs flex flex-col items-center">
            <img
              src={images[current].url}
              alt={images[current].alt}
              className="rounded-lg shadow-lg w-full border-4 border-primary/20 object-cover"
            />
            <div className="flex flex-row justify-center items-center gap-4 mt-4">
              <button
                onClick={goPrev}
                className="bg-primary text-white text-3xl px-6 py-3 rounded-full shadow-lg focus:outline-none"
                aria-label="Anterior"
                style={{ minWidth: 56, minHeight: 56 }}
              >
                &#8592;
              </button>
              <span className="text-muted-foreground text-base font-semibold">
                {current + 1} / {images.length}
              </span>
              <button
                onClick={goNext}
                className="bg-primary text-white text-3xl px-6 py-3 rounded-full shadow-lg focus:outline-none"
                aria-label="Siguiente"
                style={{ minWidth: 56, minHeight: 56 }}
              >
                &#8594;
              </button>
            </div>
          </div>
         
        </div>
        {/* Texto principal */}
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="section-title">Próximos Eventos</h2>
          <p className="section-subtitle">
            Atención a los Próximos Eventos del Mes de Enero y Febrero en Troncal Urbano Restaurante de Villa Alemana<br/>
            <span className="block mt-2 font-semibold">Reservas ☎️ ➡️ 👉 9 8586 2531</span>
            <span className="block">Villa Alemana y Peñablanca Activos</span>
            <span className="block mt-2">Míralos Aquí  👇👇👇👇</span>
          </p>
          {/* Botón redondo para ir a eventos debajo del texto */}
          <div className="flex justify-center mt-6">
            <Link
              to="/eventos"
              className="rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-bold shadow-lg hover:bg-primary/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60"
              style={{ minWidth: 120, borderRadius: 999 }}
            >
              Ir a eventos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eventosmenu;