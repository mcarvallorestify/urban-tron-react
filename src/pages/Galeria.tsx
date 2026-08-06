import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { EMPRESA_ID, fetchPublicEmpresaVitrina } from '@/lib/publicVitrina';

const Galeria = () => {
  const isVideo = (url: string) => /\.(mp4|mov|webm|ogg)$/i.test(url);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;

    async function fetchImages() {
      try {
        const data = await fetchPublicEmpresaVitrina(EMPRESA_ID);
        if (!mounted) return;

        const media = [...data.galeria]
          .sort((a, b) => b.id - a.id)
          .map((item) => item.media)
          .filter(Boolean);

        setGalleryImages(media);
      } catch {
        if (mounted) setGalleryImages([]);
      }
    }

    fetchImages();

    return () => {
      mounted = false;
    };
  }, []);

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
          <h1 className="section-title mb-4">Galería</h1>
          <p className="text-center text-primary font-heading text-lg mb-2">
            Te invitamos a revivir momentos!
          </p>
          <p className="text-center text-muted-foreground mb-12">
            ¿Listo para crear tu propio recuerdo? ¡Ven y vive la experiencia!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {(galleryImages || []).map((url, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="rounded-xl overflow-hidden bg-muted shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-border focus:outline-none focus:ring-2 focus:ring-primary w-full"
                style={{ padding: 0 }}
                aria-label={`Ver media ${index + 1}`}
              >
                {isVideo(url) ? (
                  <video
                    src={url}
                    controls
                    muted
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ maxHeight: '320px' }}
                  >
                    Tu navegador no soporta el video.
                  </video>
                ) : (
                  <img
                    src={url}
                    alt={`Galería ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ maxHeight: '320px' }}
                  />
                )}
              </button>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12">
            Síguenos en nuestras redes sociales para ver más contenido
          </p>
        </div>
      </section>

      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-md w-[95vw] h-[80vh] p-0 bg-background/95 backdrop-blur-sm border-none flex flex-col items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-background/80 hover:bg-background"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </Button>

            {selectedIndex !== null && galleryImages[selectedIndex] && (
              isVideo(galleryImages[selectedIndex]) ? (
                <video
                  src={galleryImages[selectedIndex]}
                  controls
                  autoPlay
                  preload="metadata"
                  playsInline
                  className="max-w-full max-h-[60vh] object-contain mx-auto rounded-lg shadow-lg"
                >
                  Tu navegador no soporta el video.
                </video>
              ) : (
                <img
                  src={galleryImages[selectedIndex]}
                  alt={`Galería ${selectedIndex + 1}`}
                  className="max-w-full max-h-[60vh] object-contain mx-auto rounded-lg shadow-lg"
                />
              )
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background shadow-lg"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {selectedIndex !== null && galleryImages.length > 0 && (
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
