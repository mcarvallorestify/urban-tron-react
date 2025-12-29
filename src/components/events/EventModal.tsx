import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Calendar, Clock, MapPin, Ticket } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
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
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full bg-background/80 hover:bg-background"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 -mt-16 relative z-10">
            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-heading text-foreground">
                {event.title}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-4">
              {/* Event Details */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Próximamente</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Desde las 13:00 hrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Troncal Urbano</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-foreground whitespace-pre-line leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  className="flex-1 bg-primary hover:bg-brown-dark text-primary-foreground"
                  onClick={() => window.open('https://wa.me/56985862531?text=Hola%2C%20quiero%20reservar%20para%20el%20evento%20' + encodeURIComponent(event.title), '_blank')}
                >
                  <Ticket className="w-4 h-4 mr-2" />
                  Reservar Entrada
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open('https://wa.me/56985862531?text=Hola%2C%20tengo%20una%20consulta%20sobre%20el%20evento%20' + encodeURIComponent(event.title), '_blank')}
                >
                  Más Información
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
