import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Maximize2, X } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  price?: string;
}

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  useEffect(() => {
    if (!isOpen) setIsImageExpanded(false);
  }, [isOpen]);

  if (!event) return null;

  const whatsappUrl = `https://wa.me/56985862531?text=Hola%2C%20quiero%20reservar%20para%20${encodeURIComponent(event.title)}`;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl w-[95vw] p-0 bg-card border-border/50 overflow-hidden gap-0">
          <button
            type="button"
            onClick={() => setIsImageExpanded(true)}
            className="relative w-full bg-background group cursor-zoom-in"
            aria-label="Expandir imagen"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full max-h-[75vh] object-contain"
            />
            <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" />
              Expandir
            </span>
          </button>

          <div className="p-4 border-t border-border/30">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button w-full text-center block"
            >
              Hablar al WhatsApp
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {isImageExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsImageExpanded(false)}
        >
          <button
            type="button"
            onClick={() => setIsImageExpanded(false)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-background"
            aria-label="Cerrar imagen expandida"
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src={event.image}
            alt={event.title}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default EventModal;
