import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gotham-gradient">
      <Navigation />

      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-hero-blue/20 animate-float">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertTriangle className="w-24 h-24 text-hero-red animate-pulse" />
            </div>
          </div>

          {/* Hero Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
            Dimension Inconnue
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Il semblerait que vous vous soyez égaré dans une dimension
            parallèle. Cette page n'existe pas dans notre multivers... pour
            l'instant.
          </p>

          <div className="hero-glass rounded-xl p-6 mb-8">
            <p className="text-gray-400 mb-2">
              <strong>Chemin tenté:</strong> {location.pathname}
            </p>
            <p className="text-sm text-gray-500">
              "Même Batman se perd parfois dans les rues de Gotham" - Alfred
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-hero-gradient hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-hero-blue/25"
              asChild
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Retour au QG
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <Link to="/characters">Voir les Héros</Link>
            </Button>
          </div>

          {/* Easter Egg */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic">
              💡 Conseil de super-héros: Vérifiez l'URL ou explorez nos autres
              dimensions !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
