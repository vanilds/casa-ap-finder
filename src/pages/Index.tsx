import { useState } from "react";
import { Home, Building2 } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import apartmentImg from "@/assets/apartment.jpg";
import logoBV from "@/assets/logo-bv.png";
import logoBVFooter from "@/assets/logo-bv-footer.png";
import casaPrincipal from "@/assets/casa/casa-principal.png";
import casa01 from "@/assets/casa/casa-01.jpg";
import casa02 from "@/assets/casa/casa-02.jpg";
import casa03 from "@/assets/casa/casa-03.jpg";
import casa04 from "@/assets/casa/casa-04.jpg";
import casa05 from "@/assets/casa/casa-05.jpg";
import casa06 from "@/assets/casa/casa-06.jpg";
import casa07 from "@/assets/casa/casa-07.jpg";
import casa08 from "@/assets/casa/casa-08.jpg";
import casa09 from "@/assets/casa/casa-09.jpg";
import casa10 from "@/assets/casa/casa-10.jpg";
import casa11 from "@/assets/casa/casa-11.jpg";
import casa12 from "@/assets/casa/casa-12.jpg";
import casa13 from "@/assets/casa/casa-13.jpg";
import casa14 from "@/assets/casa/casa-14.jpg";
import casa15 from "@/assets/casa/casa-15.jpg";
import casa16 from "@/assets/casa/casa-16.jpg";
import casa17 from "@/assets/casa/casa-17.jpg";
import casa18 from "@/assets/casa/casa-18.jpg";
import casa19 from "@/assets/casa/casa-19.jpg";
import casa20 from "@/assets/casa/casa-20.jpg";
import casa21 from "@/assets/casa/casa-21.jpg";
import casa22 from "@/assets/casa/casa-22.jpg";
import casa23 from "@/assets/casa/casa-23.jpg";
import casa24 from "@/assets/casa/casa-24.jpg";
import casa25 from "@/assets/casa/casa-25.jpg";
import casa26 from "@/assets/casa/casa-26.jpg";
import casa27 from "@/assets/casa/casa-27.jpg";
import casa28 from "@/assets/casa/casa-28.jpg";
import casa29 from "@/assets/casa/casa-29.jpg";
import casa30 from "@/assets/casa/casa-30.jpg";
import casa31 from "@/assets/casa/casa-31.jpg";
import casa32 from "@/assets/casa/casa-32.jpg";
import casa33 from "@/assets/casa/casa-33.jpg";
import casa34 from "@/assets/casa/casa-34.jpg";
import casa35 from "@/assets/casa/casa-35.jpg";
import casa36 from "@/assets/casa/casa-36.jpg";
import casa37 from "@/assets/casa/casa-37.jpg";
import casa38 from "@/assets/casa/casa-38.jpg";
import casa39 from "@/assets/casa/casa-39.jpg";
import casa40 from "@/assets/casa/casa-40.jpg";
import casa41 from "@/assets/casa/casa-41.jpg";
import casa42 from "@/assets/casa/casa-42.jpg";
import casa43 from "@/assets/casa/casa-43.jpg";
import casa44 from "@/assets/casa/casa-44.jpg";
import casa45 from "@/assets/casa/casa-45.jpg";
import casa46 from "@/assets/casa/casa-46.jpg";
import casa47 from "@/assets/casa/casa-47.jpg";
import casa48 from "@/assets/casa/casa-48.jpg";
import casa49 from "@/assets/casa/casa-49.jpg";
import casa50 from "@/assets/casa/casa-50.jpg";
import casa51 from "@/assets/casa/casa-51.jpg";
import casa52 from "@/assets/casa/casa-52.jpg";
import casa53 from "@/assets/casa/casa-53.jpg";
import casa54 from "@/assets/casa/casa-54.jpg";
import casa55 from "@/assets/casa/casa-55.jpg";
import casa56 from "@/assets/casa/casa-56.jpg";
import casa57 from "@/assets/casa/casa-57.jpg";
import casa58 from "@/assets/casa/casa-58.jpg";
import casa59 from "@/assets/casa/casa-59.jpg";
import casa60 from "@/assets/casa/casa-60.jpg";
import casa61 from "@/assets/casa/casa-61.jpg";
import casa62 from "@/assets/casa/casa-62.jpg";
import casa63 from "@/assets/casa/casa-63.jpg";
import casa64 from "@/assets/casa/casa-64.jpg";
import casa65 from "@/assets/casa/casa-65.jpg";
import casa66 from "@/assets/casa/casa-66.jpg";
import casa67 from "@/assets/casa/casa-67.jpg";
import casa68 from "@/assets/casa/casa-68.jpg";
import casa69 from "@/assets/casa/casa-69.jpg";
import casa70 from "@/assets/casa/casa-70.jpg";
import casa71 from "@/assets/casa/casa-71.jpg";
import casa72 from "@/assets/casa/casa-72.jpg";

const tabs = [
  { id: "house", label: "Casa", icon: Home },
  { id: "apartment", label: "Apartamento", icon: Building2 },
] as const;

const properties = {
  house: {
    images: [
      casaPrincipal,
      casa01, casa02, casa03, casa04, casa05, casa06, casa07, casa08, casa09, casa10,
      casa11, casa12, casa13, casa14, casa15, casa16, casa17, casa18, casa19, casa20,
      casa21, casa22, casa23, casa24, casa25, casa26, casa27, casa28, casa29, casa30,
      casa31, casa32, casa33, casa34, casa35, casa36, casa37, casa38, casa39, casa40,
      casa41, casa42, casa43, casa44, casa45, casa46, casa47, casa48, casa49, casa50,
      casa51, casa52, casa53, casa54, casa55, casa56, casa57, casa58, casa59, casa60,
      casa61, casa62, casa63, casa64, casa65, casa66, casa67, casa68, casa69, casa70,
      casa71, casa72,
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
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  isDisabled
                    ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                    : isActive
                    ? "bg-accent text-accent-foreground shadow-card"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={2.75} />
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
      <footer className="border-t border-border mt-16 py-10 bg-card/40">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4 text-center">
          <img
            src={logoBVFooter}
            alt="Business by Vani Santos"
            className="h-24 sm:h-32 w-auto object-contain"
          />
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-base sm:text-lg font-serif font-bold tracking-wide text-foreground">
              Business <span className="font-light italic">by</span> <span className="text-accent">Vani Santos</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground tracking-widest uppercase">
              Leilão • Airbnb • Imóveis
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Business by Vani Santos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
