import { MapPin, Clock } from 'lucide-react';

const HeroSection = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('carta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://pdv.restify.cl/media/imagenes/1755629257_3B579DAB-66E5-48F8-BD5F-C6A933090CFB.jpg"
          alt="Troncal Urbano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary tracking-wider text-shadow animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          TRONCAL URBANO
        </h1>
        
        <p 
          className="text-lg md:text-xl text-foreground/80 uppercase tracking-[0.3em] mt-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Restaurante & Eventos
        </p>

        <p 
          className="text-muted-foreground mt-6 text-base md:text-lg opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Parrilladas • Música en Vivo • Eventos con Artistas Locales
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <button onClick={scrollToMenu} className="gold-button">
            Ver Carta
          </button>
          <a 
            href="https://wa.me/56985862531?text=Hola%2C%20quiero%20hacer%20una%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button"
          >
            Reservar Mesa
          </a>
        </div>

        {/* Info */}
        <div 
          className="flex flex-wrap items-center justify-center gap-6 mt-12 opacity-0 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Villa Alemana, Chile</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>Almuerzos de 12 a 17:30 hrs</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
