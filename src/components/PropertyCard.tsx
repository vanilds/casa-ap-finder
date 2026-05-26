import { useState } from "react";
import { Bath, BedDouble, Maximize, MapPin, Phone, Car, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  images: string[];
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  parking?: number;
  description: string;
  features: string[];
}

const PropertyCard = ({
  images,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  parking,
  description,
  features,
}: PropertyCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const whatsappUrl = `https://wa.me/5511969994994?text=${encodeURIComponent("Olá! Tenho interesse neste imóvel.")}`;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  const openWhatsApp = () => {
    if (typeof window === "undefined") return;

    const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!popup && window.self !== window.top) {
      try {
        window.top?.location.assign(whatsappUrl);
      } catch {
        window.location.href = whatsappUrl;
      }
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Carousel */}
        <div className="relative overflow-hidden rounded-lg group">
          <img
            src={images[currentImage]}
            alt={`${title} - Foto ${currentImage + 1}`}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-accent px-4 py-1.5 rounded-full">
            <span className="text-sm font-semibold text-accent-foreground">À Venda</span>
          </div>
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-sm font-medium text-foreground">{currentImage + 1} / {images.length}</span>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm text-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

            </>
          )}
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
          <div className="flex flex-wrap gap-6">
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
            {parking && (
              <div className="flex items-center gap-2 text-foreground">
                <Car className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">{parking} Vagas</span>
              </div>
            )}
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
            type="button"
            size="lg"
            className="w-fit bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-8"
            onClick={openWhatsApp}
          >
            <Phone className="w-4 h-4" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
