import { useState } from "react";
import { Home, Building2 } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import apartmentImg from "@/assets/apartment.jpg";
import logoBV from "@/assets/logo-bv.png";
import casaPrincipal from "@/assets/casa/casa-principal.png";
import casa26060464 from "@/assets/casa/casa-26060464.jpg";
import casa26060461 from "@/assets/casa/casa-26060461.jpg";
import casa26060462 from "@/assets/casa/casa-26060462.jpg";
import casa26060463 from "@/assets/casa/casa-26060463.jpg";
import casa26060466 from "@/assets/casa/casa-26060466.jpg";
import casa26060467 from "@/assets/casa/casa-26060467.jpg";
import casa260604610 from "@/assets/casa/casa-260604610.jpg";
import casa260604611 from "@/assets/casa/casa-260604611.jpg";
import casa260604612 from "@/assets/casa/casa-260604612.jpg";
import casa260604615 from "@/assets/casa/casa-260604615.jpg";
import casa260604616 from "@/assets/casa/casa-260604616.jpg";
import casa260604617 from "@/assets/casa/casa-260604617.jpg";
import casa260604618 from "@/assets/casa/casa-260604618.jpg";
import casa260604620 from "@/assets/casa/casa-260604620.jpg";
import casa260604621 from "@/assets/casa/casa-260604621.jpg";
import casa260604622 from "@/assets/casa/casa-260604622.jpg";
import casa260604623 from "@/assets/casa/casa-260604623.jpg";
import casa260604624 from "@/assets/casa/casa-260604624.jpg";
import casa260604625 from "@/assets/casa/casa-260604625.jpg";
import casa260604626 from "@/assets/casa/casa-260604626.jpg";
import casa260604631 from "@/assets/casa/casa-260604631.jpg";
import casa260604633 from "@/assets/casa/casa-260604633.jpg";
import casa260604634 from "@/assets/casa/casa-260604634.jpg";
import casa260604636 from "@/assets/casa/casa-260604636.jpg";
import casa260604637 from "@/assets/casa/casa-260604637.jpg";
import casa260604638 from "@/assets/casa/casa-260604638.jpg";
import casa260604639 from "@/assets/casa/casa-260604639.jpg";
import casa260604640 from "@/assets/casa/casa-260604640.jpg";
import casa260604642 from "@/assets/casa/casa-260604642.jpg";
import casa260604643 from "@/assets/casa/casa-260604643.jpg";
import casa260604644 from "@/assets/casa/casa-260604644.jpg";
import casa260604645 from "@/assets/casa/casa-260604645.jpg";
import casa260604646 from "@/assets/casa/casa-260604646.jpg";
import casa260604647 from "@/assets/casa/casa-260604647.jpg";
import casa260604648 from "@/assets/casa/casa-260604648.jpg";
import casa260604649 from "@/assets/casa/casa-260604649.jpg";
import casa260604650 from "@/assets/casa/casa-260604650.jpg";
import casa260604651 from "@/assets/casa/casa-260604651.jpg";
import casa260604652 from "@/assets/casa/casa-260604652.jpg";
import casa260604653 from "@/assets/casa/casa-260604653.jpg";
import casa260604654 from "@/assets/casa/casa-260604654.jpg";
import casa260604655 from "@/assets/casa/casa-260604655.jpg";
import casa260604656 from "@/assets/casa/casa-260604656.jpg";
import casa260604657 from "@/assets/casa/casa-260604657.jpg";
import casa260604658 from "@/assets/casa/casa-260604658.jpg";
import casa260604659 from "@/assets/casa/casa-260604659.jpg";
import casa260604662 from "@/assets/casa/casa-260604662.jpg";
import casa260604663 from "@/assets/casa/casa-260604663.jpg";
import casa260604664 from "@/assets/casa/casa-260604664.jpg";
import casa260604665 from "@/assets/casa/casa-260604665.jpg";
import casa260604666 from "@/assets/casa/casa-260604666.jpg";
import casa260604668 from "@/assets/casa/casa-260604668.jpg";
import casa260604670 from "@/assets/casa/casa-260604670.jpg";
import casa260604671 from "@/assets/casa/casa-260604671.jpg";
import casa260604672 from "@/assets/casa/casa-260604672.jpg";
import casa260604673 from "@/assets/casa/casa-260604673.jpg";
import casa260604674 from "@/assets/casa/casa-260604674.jpg";

const tabs = [
  { id: "house", label: "Casa", icon: Home },
  { id: "apartment", label: "Apartamento", icon: Building2 },
] as const;

const properties = {
  house: {
    images: [
      casaPrincipal,
      casa26060464,
      casa26060461,
      casa26060462,
      casa26060463,
      casa26060466,
      casa26060467,
      casa260604610,
      casa260604611,
      casa260604612,
      casa260604615,
      casa260604616,
      casa260604617,
      casa260604618,
      casa260604620,
      casa260604621,
      casa260604622,
      casa260604623,
      casa260604624,
      casa260604625,
      casa260604626,
      casa260604631,
      casa260604633,
      casa260604634,
      casa260604636,
      casa260604637,
      casa260604638,
      casa260604639,
      casa260604640,
      casa260604642,
      casa260604643,
      casa260604644,
      casa260604645,
      casa260604646,
      casa260604647,
      casa260604648,
      casa260604649,
      casa260604650,
      casa260604651,
      casa260604652,
      casa260604653,
      casa260604654,
      casa260604655,
      casa260604656,
      casa260604657,
      casa260604658,
      casa260604659,
      casa260604662,
      casa260604663,
      casa260604664,
      casa260604665,
      casa260604666,
      casa260604668,
      casa260604670,
      casa260604671,
      casa260604672,
      casa260604673,
      casa260604674,
    ],
    title: "Casa à Venda — Rua Cuevas",
    location: "Lapa, São Paulo - SP",
    price: "R$ 3.200.000",
    bedrooms: 5,
    bathrooms: 6,
    area: "470 m²",
    parking: 4,
    description:
      "Localizada no charmoso bairro da Lapa, esta casa oferece um espaço amplo e confortável para toda a família. Com cinco quartos (4 suítes), seis banheiros e varanda gourmet, é perfeita para momentos de lazer e confraternização. Proximidade ao metrô, SESI Leopoldina e Tietê Plaza Shopping.",
    features: [
      "4 Suítes",
      "Piscina privativa",
      "Varanda gourmet",
      "Hidromassagem",
      "Jardim",
      "Quintal",
      "Ar condicionado",
      "4 vagas",
      "Armários embutidos",
      "Área de serviço",
    ],
  },
  apartment: {
    images: [apartmentImg],
    title: "Apartamento com Vista Panorâmica",
    location: "Vila Olímpia, São Paulo - SP",
    price: "R$ 980.000",
    bedrooms: 3,
    bathrooms: 2,
    area: "145 m²",
    parking: 2,
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
      <header className="border-b border-border bg-card/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logoBV}
              alt="Business by Vani Santos - Especialista em Leilão, Airbnb e Imóveis"
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain rounded-md"
            />
            <div className="flex flex-col leading-tight">
              <h1 className="text-lg sm:text-xl font-serif font-bold tracking-wide text-foreground">
                Business <span className="font-light italic">by</span> <span className="text-accent">Vani Santos</span>
              </h1>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Leilão • Airbnb • Imóveis
              </span>
            </div>
          </div>
          <span className="text-sm text-muted-foreground hidden md:block italic">
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
            const isDisabled = tab.id === "apartment";
            return (
              <button
                key={tab.id}
                disabled={isDisabled}
                onClick={() => !isDisabled && setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isDisabled
                    ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                    : isActive
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
