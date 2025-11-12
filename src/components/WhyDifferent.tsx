import { Card } from "@/components/ui/card";
import { Sparkles, Brain, MapPin } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "IA que aprende suas preferências e adapta as receitas ao seu estilo de churrasco.",
  },
  {
    icon: MapPin,
    title: "Conteúdo Local",
    description: "Receitas e técnicas brasileiras autênticas, feitas por churrasqueiros experientes.",
  },
  {
    icon: Sparkles,
    title: "Guia Completo",
    description: "Do planejamento à execução, te acompanhamos em cada etapa do churrasco perfeito.",
  },
];

export const WhyDifferent = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            Por que o{" "}
            <span className="bg-fire-gradient bg-clip-text text-transparent">
              Mestre do Churrasco
            </span>{" "}
            é diferente?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enquanto outros apps só mostram receitas, nós te guiamos em cada etapa — 
            com IA, conteúdo local e muita diversão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border text-center space-y-4 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-red animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
