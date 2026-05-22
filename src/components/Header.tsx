import { useState, useEffect } from "react";
import { Flame, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Benefícios", id: "benefits" },
    { label: "O App", id: "app-preview" },
    { label: "Diferenciais", id: "why-different" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Voltar ao topo"
          >
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Flame className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg hidden sm:inline">Mestre do Churrasco</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollToSection("signup")}
              className="bg-fire-gradient hover:shadow-glow-orange transition-all duration-300 font-semibold"
            >
              <Flame className="mr-1.5 h-4 w-4" />
              Cadastre-se
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden py-4 border-t border-border space-y-2"
            aria-label="Navegação mobile"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                size="sm"
                onClick={() => scrollToSection("signup")}
                className="w-full bg-fire-gradient hover:shadow-glow-orange transition-all duration-300 font-semibold"
              >
                <Flame className="mr-1.5 h-4 w-4" />
                Cadastre-se
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
