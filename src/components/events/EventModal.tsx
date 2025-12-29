import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Calendar, MapPin } from 'lucide-react';

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
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 bg-card border-border/50">
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 -mt-16 relative z-10">
            {event.price && (
              <span className="inline-block bg-primary text-primary-foreground text-sm px-4 py-1 rounded-full font-medium mb-4">
                {event.price}
              </span>
            )}
            
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              {event.title}
            </h2>
            {event.subtitle && (
              <p className="text-primary mt-1">{event.subtitle}</p>
            )}

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Cada semana</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Troncal Urbano</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-background/50 rounded-lg border border-border/30">
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a 
                href={`https://wa.me/56985862531?text=Hola%2C%20quiero%20reservar%20para%20${encodeURIComponent(event.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button text-center flex-1"
              >
                Reservar Ahora
              </a>
              <a 
                href="https://wa.me/56985862531"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button text-center flex-1"
              >
                Más Información
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
