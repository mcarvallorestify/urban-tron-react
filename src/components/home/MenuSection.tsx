import { Button } from '@/components/ui/button';

const MenuSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="section-title flex items-center justify-center gap-2">
          <span>🍴</span> NUESTRA CARTA
        </h2>
        
        <div className="mt-6 space-y-2 text-foreground">
          <p className="text-lg">
            Menú Completo de Lunes a Viernes <strong className="text-primary">7 mil</strong> x persona.
          </p>
          <p className="text-lg">
            Sábado, Domingo y festivos Menú Completo <strong className="text-primary">10 mil</strong> x persona.
          </p>
          <p className="text-muted-foreground">
            Servicio de Almuerzos de 12 a 17:30 hrs.
          </p>
        </div>

        <Button 
          className="mt-8 bg-primary hover:bg-brown-dark text-primary-foreground px-8 py-6 text-lg font-semibold"
          onClick={() => window.open('https://wa.me/56985862531?text=Hola%2C%20quiero%20ver%20la%20carta.', '_blank')}
        >
          👉 REVISA LA CARTA 👈
        </Button>
      </div>
    </section>
  );
};

export default MenuSection;
