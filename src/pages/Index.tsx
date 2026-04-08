import { useState } from "react";
import { Home, Building2 } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import apartmentImg from "@/assets/apartment.jpg";

const tabs = [
  { id: "house", label: "Casa", icon: Home },
  { id: "apartment", label: "Apartamento", icon: Building2 },
] as const;

const properties = {
  house: {
    images: [
      "https://www.quintoandar.com.br/img/med/original895306046-671.2727727780823Cod.26060464.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-694.1348577490292Cod.26060461.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-894.0264542959114Cod.26060462.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-764.847387271826Cod.26060463.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-924.4607614671731Cod.26060466.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-935.5544538246455Cod.26060467.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-772.4331219164122Cod.26060465.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-208.9258503753959Cod.260604610.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-62.83813669540028Cod.260604611.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-124.42987456784837Cod.260604612.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-224.73629772390169Cod.260604613.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-580.2737154386004Cod.260604614.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-925.0815099864473Cod.260604615.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-528.9672420685813Cod.260604616.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-598.22603210228Cod.260604617.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-479.5420415567334Cod.260604618.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-527.5815510531526Cod.260604619.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-356.3377736537526Cod.260604620.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-776.2533021794561Cod.260604621.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-865.1207681779322Cod.260604622.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-359.9316257021996Cod.260604623.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-863.2777358105592Cod.260604624.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-995.8733136339047Cod.260604625.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-444.3392616266606Cod.260604626.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-233.5426568626778Cod.260604627.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-177.5266676070883Cod.260604628.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-252.0039682124828Cod.260604629.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-881.7837381147513Cod.260604630.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-902.0636107109373Cod.260604631.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-628.8992379252917Cod.260604632.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-805.7292826634863Cod.260604633.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-859.8690268440403Cod.260604634.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-828.9803135937217Cod.260604635.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-522.1123655651728Cod.260604636.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-761.279504736574Cod.260604637.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-346.120412439593Cod.260604638.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-761.5257669023507Cod.260604639.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-796.2047519645681Cod.260604640.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-258.8542285069462Cod.260604641.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-662.8775144904356Cod.260604642.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-163.5458935546471Cod.260604643.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-895.6965236991473Cod.260604644.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-258.9678693410117Cod.260604645.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-943.6736652510098Cod.260604646.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-408.5595750717226Cod.260604647.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-915.9646681531901Cod.260604648.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-306.67314503930385Cod.260604649.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-214.2649868138843Cod.260604650.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-550.6400581142959Cod.260604651.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-868.8490074471395Cod.260604652.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-382.8193320979342Cod.260604653.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-11.74449659135579Cod.260604654.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-592.5680123055364Cod.260604655.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-197.62918083307358Cod.260604656.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-261.49734414893953Cod.260604657.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-994.4546977202666Cod.260604658.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-404.46919414664217Cod.260604659.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-907.6969268053718Cod.260604660.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-417.201109131075Cod.260604661.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-194.53868451093626Cod.260604662.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-909.1586435539367Cod.260604663.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-134.0331373524546Cod.260604664.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-871.6348377653405Cod.260604665.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-957.774998963056Cod.260604666.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-176.70821081519261Cod.260604667.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-284.9773572549267Cod.260604668.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-88.76775882333088Cod.260604669.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-213.76181109522275Cod.260604670.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-762.8988235019178Cod.260604671.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-138.04474804305232Cod.260604672.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-42.54394681906815Cod.260604673.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-222.74959871294774Cod.260604674.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-235.68639281899456Cod.260604675.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-492.40850190245254Cod.260604676.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-403.44226599771883Cod.260604677.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-133.22187609530434Cod.260604678.jpg",
      "https://www.quintoandar.com.br/img/med/original895306046-912.5321208726848Cod.260604679.jpg",
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
