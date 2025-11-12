import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

interface FinalCTAProps {
  onCTAClick: () => void;
}

export const FinalCTA = ({ onCTAClick }: FinalCTAProps) => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-50"></div>
      <div className="absolute inset-0 bg-fire-gradient opacity-10"></div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Fire Icon */}
          <div className="flex justify-center">
            <div className="p-6 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 shadow-glow-red animate-pulse-slow">
              <Flame className="w-16 h-16 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-fire-gradient bg-clip-text text-transparent">
              Garanta seu lugar no pré-lançamento
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Entre na lista VIP e ganhe acesso antecipado a recursos Premium! 
            Seja um dos primeiros mestres da grelha.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={onCTAClick}
              className="bg-fire-gradient hover:shadow-glow-orange transition-all duration-300 text-xl px-10 py-7 font-bold"
            >
              <Flame className="mr-2 h-6 w-6" />
              Quero entrar na lista VIP
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {[
              "Acesso antecipado",
              "Recursos Premium grátis",
              "Suporte prioritário",
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50"
              >
                <p className="font-semibold text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
