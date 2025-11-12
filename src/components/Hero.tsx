import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import heroImage from "@/assets/hero-bbq.jpg";

interface HeroProps {
  onCTAClick: () => void;
}

export const Hero = ({ onCTAClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Fire Icon */}
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 shadow-glow-red animate-pulse-slow">
              <Flame className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Seja o Mestre do Churrasco!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O app que ensina, planeja e guia o churrasco perfeito — com inteligência artificial e paixão pela carne brasileira.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={onCTAClick}
              className="bg-fire-gradient hover:shadow-glow-orange transition-all duration-300 text-lg px-8 py-6 font-semibold"
            >
              <Flame className="mr-2 h-5 w-5" />
              Quero ser avisado no lançamento
            </Button>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-muted-foreground pt-4">
            Junte-se aos milhares de churrasqueiros que já estão na lista de espera
          </p>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
