import appScreen1 from "@/assets/app-screen-1.jpg";
import appScreen2 from "@/assets/app-screen-2.jpg";
import appScreen3 from "@/assets/app-screen-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const AppPreview = () => {
  const appScreens = [
    { src: appScreen1, alt: "Calculadora de Churrasco - Planeje quantidades perfeitas" },
    { src: appScreen2, alt: "Mestre da Grelha - Assistente IA para churrasco" },
    { src: appScreen3, alt: "Guia de Cortes - Receitas e técnicas profissionais" },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Carousel */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-fire-gradient opacity-20 blur-3xl"></div>
              <Carousel className="relative z-10 mx-auto max-w-sm w-full">
                <CarouselContent>
                  {appScreens.map((screen, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        className="w-full h-auto drop-shadow-2xl rounded-2xl"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Seu churrasco{" "}
                <span className="bg-fire-gradient bg-clip-text text-transparent">
                  planejado do início ao fim
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com o Mestre do Churrasco, você tem acesso a receitas exclusivas, 
                calculadoras inteligentes, timers precisos e até mesmo um assistente 
                de IA que te ajuda em tempo real.
              </p>
              <ul className="space-y-3">
                {[
                  "Interface intuitiva e fácil de usar",
                  "Conteúdo exclusivo de chefs brasileiros",
                  "Funciona offline durante o churrasco",
                  "Atualizações constantes com novas receitas",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
