import { Button } from '@/components/ui/button';

interface EventCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const EventCard = ({ title, description, image }: EventCardProps) => {
  return (
    <div className="event-card bg-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h4 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-1">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description.split('\n')[0]}
        </p>
        <Button 
          className="w-full bg-primary hover:bg-brown-dark text-primary-foreground"
        >
          Ver más
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
