import { Flame } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Flame className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold">Mestre do Churrasco</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Mestre do Churrasco. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
