import { Button } from '@/components/ui/button';

interface EventCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  onViewMore?: () => void;
}

const EventCard = ({ title, description, image, onViewMore }: EventCardProps) => {
  return (
    <div className="event-card bg-card group">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h4 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-1">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description.split('\n')[0]}
        </p>
        <Button 
          className="w-full bg-primary hover:bg-brown-dark text-primary-foreground transition-all duration-300 hover:shadow-lg"
          onClick={onViewMore}
        >
          Ver más
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
