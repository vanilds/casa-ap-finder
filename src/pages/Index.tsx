import { useState } from "react";
import { Home, Building2 } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import houseImg from "@/assets/house.jpg";
import apartmentImg from "@/assets/apartment.jpg";

const tabs = [
  { id: "house", label: "Casa", icon: Home },
  { id: "apartment", label: "Apartamento", icon: Building2 },
] as const;

const properties = {
  house: {
    image: houseImg,
    title: "Casa Moderna com Jardim",
    location: "Alphaville, São Paulo - SP",
    price: "R$ 1.850.000",
    bedrooms: 4,
    bathrooms: 3,
    area: "320 m²",
    description:
      "Residência sofisticada com design contemporâneo, amplas janelas de vidro e jardim paisagístico. Perfeita para quem busca conforto e elegância em um dos melhores bairros da cidade.",
    features: [
      "Piscina",
      "Churrasqueira",
      "Garagem 3 carros",
      "Suíte master",
      "Home office",
      "Jardim",
    ],
  },
  apartment: {
    image: apartmentImg,
    title: "Apartamento com Vista Panorâmica",
    location: "Vila Olímpia, São Paulo - SP",
    price: "R$ 980.000",
    bedrooms: 3,
    bathrooms: 2,
    area: "145 m²",
    description:
      "Apartamento de alto padrão com vista deslumbrante para a cidade. Acabamento premium, varanda gourmet e localização privilegiada próximo a restaurantes, parques e transporte.",
    features: [
      "Varanda gourmet",
      "Vista panorâmica",
      "2 vagas",
      "Lazer completo",
      "Portaria 24h",
      "Academia",
    ],
  },
};

const Index = () => {
  const [activeTab, setActiveTab] = useState<"house" | "apartment">("house");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-foreground">
            Imóveis <span className="text-accent">Premium</span>
          </h1>
          <span className="text-sm text-muted-foreground hidden sm:block">
            Encontre o imóvel dos seus sonhos
          </span>
        </div>
      </header>

      {/* Tabs */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="flex gap-2 justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Property */}
      <main className="container mx-auto px-4 py-8">
        <PropertyCard key={activeTab} {...properties[activeTab]} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026 Imóveis Premium. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;
