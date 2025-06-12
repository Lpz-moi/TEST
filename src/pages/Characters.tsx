import Navigation from "@/components/Navigation";
import { Search, Filter, User, Shield, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Characters = () => {
  return (
    <div className="min-h-screen bg-gotham-gradient">
      <Navigation />

      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 glow-text">
              Base de Données des Héros
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez les biographies complètes, pouvoirs, et histoires de
              tous vos super-héros préférés à travers les multivers DC, Marvel
              et bien plus encore.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="hero-glass rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Rechercher un personnage..."
                  className="pl-10 bg-black/20 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtres
              </Button>
            </div>
          </div>

          {/* Universe Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge
              variant="outline"
              className="text-hero-blue border-hero-blue bg-black/20 px-4 py-2 cursor-pointer hover:bg-hero-blue/20"
            >
              <Shield className="w-4 h-4 mr-2" />
              DC Universe
            </Badge>
            <Badge
              variant="outline"
              className="text-hero-red border-hero-red bg-black/20 px-4 py-2 cursor-pointer hover:bg-hero-red/20"
            >
              <Zap className="w-4 h-4 mr-2" />
              Marvel
            </Badge>
            <Badge
              variant="outline"
              className="text-hero-purple border-hero-purple bg-black/20 px-4 py-2 cursor-pointer hover:bg-hero-purple/20"
            >
              <Star className="w-4 h-4 mr-2" />
              Autres Univers
            </Badge>
          </div>

          {/* Coming Soon Placeholder */}
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 bg-hero-gradient rounded-full flex items-center justify-center animate-float">
              <User className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 glow-text">
              Base de Données en Construction
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Notre équipe d'experts en super-héros compile actuellement des
              milliers de fiches personnages avec biographies détaillées,
              galeries d'images, chronologies, et analyses de pouvoirs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Badge
                variant="secondary"
                className="bg-hero-blue/20 text-hero-blue border-hero-blue"
              >
                🦸‍♂️ Batman, Superman, Wonder Woman
              </Badge>
              <Badge
                variant="secondary"
                className="bg-hero-red/20 text-hero-red border-hero-red"
              >
                🕷️ Spider-Man, Iron Man, Captain America
              </Badge>
              <Badge
                variant="secondary"
                className="bg-hero-purple/20 text-hero-purple border-hero-purple"
              >
                ⚡ The Boys, Invincible, Hellboy
              </Badge>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="hero-glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-hero-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-hero-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Recherche Avancée
              </h3>
              <p className="text-gray-300">
                Trouvez n'importe quel héros par nom, pouvoir, affiliation ou
                univers
              </p>
            </div>

            <div className="hero-glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-hero-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-hero-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fiches Complètes
              </h3>
              <p className="text-gray-300">
                Biographies détaillées, pouvoirs, faiblesses et chronologies
              </p>
            </div>

            <div className="hero-glass rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-hero-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-hero-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Comparaisons
              </h3>
              <p className="text-gray-300">
                Comparez les pouvoirs et capacités entre différents héros
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Characters;
