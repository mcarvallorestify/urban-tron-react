import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone } from 'lucide-react';

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <Layout>
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* About Section */}
          <div className="mb-16">
            <h2 className="section-subtitle text-center mb-8">Sobre nosotros</h2>
            <div className="text-muted-foreground space-y-4 text-justify max-w-3xl mx-auto">
              <p>
                En Troncal Urbano llevamos más de 18 años compartiendo momentos inolvidables en Villa Alemana. 
                Somos mucho más que un restaurante: somos un espacio de encuentro donde la buena comida, 
                la música en vivo y el ambiente festivo se unen para crear experiencias únicas.
              </p>
              <p>
                Nuestro sello está en las parrilladas al estilo chileno, los platos abundantes para compartir 
                y la energía que se vive en cada uno de nuestros eventos, con artistas en vivo que transforman 
                cada noche en una celebración.
              </p>
              <p>
                Con un ambiente cómodo, atención cercana y la calidez que nos caracteriza, nos hemos convertido 
                en un punto de referencia para quienes buscan disfrutar, celebrar y bailar junto a sus amigos y familia.
              </p>
              <p>
                Ya sea que vengas a probar nuestras especialidades, a celebrar una ocasión especial o a vivir la 
                música de grandes artistas en directo, en Troncal Urbano siempre te espera una experiencia diferente.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="section-subtitle text-center lg:text-left mb-6">Formulario</h3>
              <p className="text-muted-foreground mb-8">
                Completa el formulario de contacto para comunicarte con nosotros. Ya sea para consultas, 
                sugerencias o solicitudes, estaremos encantados de atenderte.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:raulpalomo.74@hotmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    raulpalomo.74@hotmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+56985862531" className="text-muted-foreground hover:text-foreground transition-colors">
                    +56 9 8586 2531
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="telefono"
                    placeholder="Número de contacto"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="mensaje"
                    placeholder="Mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 resize-none focus-visible:ring-0 focus-visible:border-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-brown-dark text-primary-foreground"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h3 className="section-subtitle text-center mb-6">Encuéntranos</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.6784961854396!2d-71.37458232342888!3d-33.04647697352435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dd5c30000001%3A0x5f1b0e0a0c0c0c0c!2sAv.%20Valpara%C3%ADso%202650%2C%20Villa%20Alemana%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Troncal Urbano"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Avenida Valparaíso 2650 Paradero 12, Villa Alemana
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
