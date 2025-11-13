import { useState, useEffect } from "react";
import { useForm as useFormSpree, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, Flame } from "lucide-react";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useFormSpree("xldadgyq");
  const { toast } = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "🔥 Bem-vindo à lista VIP!",
        description: "Cadastro realizado com sucesso! Em breve você receberá novidades exclusivas sobre o app.",
      });
      setName("");
      setEmail("");
    }
  }, [state.succeeded, toast]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!name.trim() || !email.trim()) {
      e.preventDefault();
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    handleSubmit(e);
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="signup">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Flame className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Cadastre-se e seja o{" "}
              <span className="bg-fire-gradient bg-clip-text text-transparent">
                primeiro a testar
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Entre para a lista VIP e receba acesso antecipado aos recursos Premium
            </p>
          </div>

          <form 
            onSubmit={onSubmit} 
            className="space-y-4 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border shadow-xl animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Nome completo
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background border-border focus:border-primary"
              />
              <ValidationError
                prefix="Nome"
                field="name"
                errors={state.errors}
                className="text-sm text-destructive"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border focus:border-primary"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-sm text-destructive"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              disabled={state.submitting}
              className="w-full bg-fire-gradient hover:shadow-glow-orange transition-all duration-300 font-semibold"
            >
              {state.submitting ? (
                "Cadastrando..."
              ) : (
                <>
                  <Flame className="mr-2 h-5 w-5" />
                  Quero entrar na lista VIP
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground pt-2">
              Ao se cadastrar, você concorda em receber novidades sobre o app. 
              Sem spam, prometemos! 🔥
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
