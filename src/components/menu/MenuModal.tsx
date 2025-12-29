import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const menuImages = [
  'https://pdv.restify.cl/media/imagenes/1758898276_WhatsApp_Image_2025-09-25_at_21.05.17.jpg',
  'https://pdv.restify.cl/media/imagenes/1758898354_WhatsApp_Image_2025-09-25_at_21.05.17__1_.jpg',
  'https://pdv.restify.cl/media/imagenes/1758898399_WhatsApp_Image_2025-09-25_at_21.05.18.jpg',
  'https://pdv.restify.cl/media/imagenes/1758898421_WhatsApp_Image_2025-09-25_at_21.05.18__1_.jpg',
  'https://pdv.restify.cl/media/imagenes/1758898443_WhatsApp_Image_2025-09-25_at_21.05.18__2_.jpg',
  'https://pdv.restify.cl/media/imagenes/1758898462_WhatsApp_Image_2025-09-25_at_21.05.18__3_.jpg',
  'https://pdv.restify.cl/media/imagenes/1758898477_WhatsApp_Image_2025-09-25_at_21.05.18__4_.jpg',
];

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % menuImages.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-sm">
        <DialogHeader className="absolute top-4 left-4 right-4 z-10 flex flex-row items-center justify-between">
          <DialogTitle className="text-primary font-heading text-xl">
            Nuestra Carta ({currentIndex + 1}/{menuImages.length})
          </DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="rounded-full bg-background/80 hover:bg-background"
          >
            <X className="w-5 h-5" />
          </Button>
        </DialogHeader>

        <div className="relative w-full h-full flex items-center justify-center p-12">
          <img
            src={menuImages[currentIndex]}
            alt={`Carta página ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />

          {/* Navigation */}
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

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-background/80 p-2 rounded-full">
            {menuImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
