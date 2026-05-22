import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">Ops! Página não encontrada</p>
        <a href="/" className="inline-block mt-4 text-primary underline hover:text-primary/90 font-medium">
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
