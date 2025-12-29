import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  'https://pdv.restify.cl/media/imagenes/1755629257_3B579DAB-66E5-48F8-BD5F-C6A933090CFB.jpg',
  'https://pdv.restify.cl/media/imagenes/1755705198_WhatsApp_Image_2025-08-19_at_22.13.42__1_.jpg',
  'https://pdv.restify.cl/media/imagenes/1755630548_490301338_1166774602127050_3198940630697480348_n.jpg',
  'https://pdv.restify.cl/media/imagenes/1762005847_WhatsApp_Image_2025-10-31_at_18.19.44.jpg',
  'https://pdv.restify.cl/media/imagenes/1762006051_WhatsApp_Image_2025-10-31_at_18.19.44__1_.jpg',
  'https://pdv.restify.cl/media/imagenes/1762828476_WhatsApp_Image_2025-11-10_at_20.22.32.jpg',
  'https://pdv.restify.cl/media/imagenes/1764601551_WhatsApp_Image_2025-11-30_at_12.28.39.jpg',
  'https://pdv.restify.cl/media/imagenes/1764601949_WhatsApp_Image_2025-11-30_at_12.28.40.jpg',
];

const Galeria = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

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
            {galleryImages.map((url, index) => (
              <button 
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="aspect-video rounded-lg overflow-hidden bg-muted shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={url}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </button>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12">
            Síguenos en nuestras redes sociales para ver más contenido
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-sm border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-background/80 hover:bg-background"
            >
              <X className="w-5 h-5" />
            </Button>

            {selectedIndex !== null && (
              <img
                src={galleryImages[selectedIndex]}
                alt={`Galería ${selectedIndex + 1}`}
                className="max-w-full max-h-full object-contain p-8"
              />
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Counter */}
            {selectedIndex !== null && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-4 py-2 rounded-full text-sm">
                {selectedIndex + 1} / {galleryImages.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Galeria;
