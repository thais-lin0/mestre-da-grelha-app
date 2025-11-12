import appMockup from "@/assets/app-mockup.png";

export const AppPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-fire-gradient opacity-20 blur-3xl"></div>
              <img
                src={appMockup}
                alt="Mestre do Churrasco App Preview"
                className="relative z-10 mx-auto max-w-sm w-full drop-shadow-2xl"
              />
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
