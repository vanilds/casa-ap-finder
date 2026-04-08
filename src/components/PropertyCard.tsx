import { Bath, BedDouble, Maximize, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  description: string;
  features: string[];
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  description,
  features,
}: PropertyCardProps) => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-accent px-4 py-1.5 rounded-full">
            <span className="text-sm font-semibold text-accent-foreground">À Venda</span>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
              {title}
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>

          <p className="text-4xl lg:text-5xl font-serif font-bold text-accent">
            {price}
          </p>

          {/* Stats */}
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-foreground">
              <BedDouble className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">{bedrooms} Quartos</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Bath className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">{bathrooms} Banheiros</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Maximize className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">{area}</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
              >
                {feature}
              </span>
            ))}
          </div>

          <Button
            size="lg"
            className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8"
          >
            <Phone className="w-4 h-4" />
            Entrar em Contato
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
