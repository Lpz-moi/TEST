import Navigation from "@/components/Navigation";
import { Newspaper, TrendingUp, Calendar, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const News = () => {
  return (
    <div className="min-h-screen bg-gotham-gradient">
      <Navigation />

      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 glow-text">
              Daily Planet
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Toutes les dernières actualités des univers DC, Marvel et des
              super-héros. Restez informé des sorties cinéma, séries, comics et
              événements à venir.
            </p>
          </div>

          {/* Coming Soon Placeholder */}
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 bg-hero-gradient rounded-full flex items-center justify-center animate-float">
              <Newspaper className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 glow-text">
              Salle de Rédaction en Préparation
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Notre équipe de journalistes super-héros travaille 24h/24 pour
              vous apporter les dernières nouvelles des multivers. Intégration
              avec les flux RSS officiels en cours.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hero-glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-hero-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-hero-blue" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Trending</h3>
              <p className="text-gray-300 text-sm">Actualités populaires</p>
            </div>

            <div className="hero-glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-hero-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-hero-red" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Calendrier</h3>
              <p className="text-gray-300 text-sm">Sorties à venir</p>
            </div>

            <div className="hero-glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-hero-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-hero-yellow" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mondial</h3>
              <p className="text-gray-300 text-sm">News internationales</p>
            </div>

            <div className="hero-glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-hero-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-8 h-8 text-hero-purple" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Exclusifs</h3>
              <p className="text-gray-300 text-sm">Scoops et leaks</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Badge
              variant="outline"
              className="text-hero-blue border-hero-blue bg-black/20 px-6 py-2"
            >
              🔥 Intégration RSS DC Comics, Marvel, IGN en cours...
            </Badge>
          </div>
        </div>
      </main>
    </div>
  );
};

export default News;
