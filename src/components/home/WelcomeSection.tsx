import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WelcomeSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Phone Mockup with Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 md:w-80 bg-background rounded-[2.5rem] p-2 shadow-2xl border-8 border-foreground/10">
                <div className="rounded-[2rem] overflow-hidden">
                  <img
                    src="https://pdv.restify.cl/media/imagenes/1755629257_3B579DAB-66E5-48F8-BD5F-C6A933090CFB.jpg"
                    alt="Restaurante Troncal Urbano"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-primary font-heading text-lg flex items-center justify-center lg:justify-start gap-2">
              <span>🍴</span> Troncal Urbano - Restaurante & Eventos
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mt-2 mb-4">
              Bienvenidos a nuestro Restaurante
            </h2>
            <p className="text-muted-foreground mb-8">
              Parrilladas, música en vivo y eventos con artistas locales
            </p>

            {/* Action Cards */}
            <div className="space-y-4">
              <div className="bg-brown-dark text-primary-foreground p-6 rounded-lg">
                <h3 className="text-xl font-heading font-semibold mb-2">Reservar</h3>
                <p className="text-sm opacity-90 mb-4">Escríbenos y agenda un espacio...</p>
                <Button 
                  variant="outline" 
                  className="border-primary-foreground text-foreground bg-background hover:bg-primary-foreground hover:text-brown-dark"
                  onClick={() => window.open('https://wa.me/56985862531?text=Hola%2C%20quiero%20reservar%20una%20mesa.', '_blank')}
                >
                  AGENDAR →
                </Button>
              </div>

              <div className="bg-brown-dark text-primary-foreground p-6 rounded-lg">
                <h3 className="text-xl font-heading font-semibold mb-2">Eventos</h3>
                <p className="text-sm opacity-90">Mantente informado de nuestros eventos...</p>
                <Link to="/eventos">
                  <Button 
                    variant="outline" 
                    className="mt-4 border-primary-foreground text-foreground bg-background hover:bg-primary-foreground hover:text-brown-dark"
                  >
                    VER EVENTOS →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
