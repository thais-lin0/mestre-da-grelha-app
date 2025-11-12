import { Video, Calculator, ClipboardCheck, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Video,
    title: "Aprenda Técnicas",
    description: "Vídeos e guias rápidos para dominar o churrasco, desde o básico até técnicas avançadas.",
  },
  {
    icon: Calculator,
    title: "Planejamento com IA",
    description: "Calcule quantidades perfeitas e planeje seu churrasco com inteligência artificial.",
  },
  {
    icon: ClipboardCheck,
    title: "Listas Inteligentes",
    description: "Receba listas de compras automáticas e checklists interativos para não esquecer nada.",
  },
  {
    icon: Users,
    title: "Surpreenda a Todos",
    description: "Vire o churrasqueiro oficial da turma e impressione amigos e família.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Por que usar o{" "}
            <span className="bg-fire-gradient bg-clip-text text-transparent">
              Mestre do Churrasco
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para fazer o churrasco perfeito, na palma da sua mão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-red group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
