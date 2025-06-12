import { Link } from "react-router-dom";
import { Shield, Zap, Star, Users, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  universes,
  getCharactersByUniverse,
  getNewsByUniverse,
} from "@/lib/superhero-data";

const UniversePortals = () => {
  const getUniverseStats = (universeId: string) => {
    const characters = getCharactersByUniverse(universeId);
    const news = getNewsByUniverse(universeId);
    return { characters: characters.length, news: news.length };
  };

  const getUniverseIcon = (universeId: string) => {
    switch (universeId) {
      case "dc":
        return Shield;
      case "marvel":
        return Zap;
      default:
        return Star;
    }
  };

  const getUniverseGradient = (universeId: string) => {
    switch (universeId) {
      case "dc":
        return "from-blue-600/20 to-blue-800/20 hover:from-blue-600/30 hover:to-blue-800/30";
      case "marvel":
        return "from-red-600/20 to-red-800/20 hover:from-red-600/30 hover:to-red-800/30";
      default:
        return "from-purple-600/20 to-purple-800/20 hover:from-purple-600/30 hover:to-purple-800/30";
    }
  };

  const getUniverseTextColor = (universeId: string) => {
    switch (universeId) {
      case "dc":
        return "text-hero-blue";
      case "marvel":
        return "text-hero-red";
      default:
        return "text-hero-purple";
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">
            Explorez les Multivers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plongez dans les univers épiques de vos héros préférés. Chaque
            portail vous transporte dans un monde unique rempli d'aventures
            extraordinaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universes.map((universe) => {
            const Icon = getUniverseIcon(universe.id);
            const stats = getUniverseStats(universe.id);

            return (
              <Link
                key={universe.id}
                to={`/${universe.id}`}
                className="group block"
              >
                <Card
                  className={`
                  relative overflow-hidden border-2 border-white/10 bg-gradient-to-br ${getUniverseGradient(universe.id)}
                  backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-white/20
                  group-hover:shadow-2xl group-hover:shadow-current/20 h-full
                `}
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`
                        w-16 h-16 rounded-2xl bg-gradient-to-br ${getUniverseGradient(universe.id)} 
                        flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                        border border-white/20
                      `}
                      >
                        <Icon
                          className={`w-8 h-8 ${getUniverseTextColor(universe.id)}`}
                        />
                      </div>
                      <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                        {universe.logo}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-2xl font-bold mb-3 ${getUniverseTextColor(universe.id)} group-hover:glow-text transition-all duration-300`}
                    >
                      {universe.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                      {universe.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="w-4 h-4 text-gray-400 mr-1" />
                        </div>
                        <div className="text-lg font-bold text-white">
                          {stats.characters}+
                        </div>
                        <div className="text-xs text-gray-400">Héros</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-gray-400 mr-1" />
                        </div>
                        <div className="text-lg font-bold text-white">
                          {stats.news}
                        </div>
                        <div className="text-xs text-gray-400">Actus</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <BookOpen className="w-4 h-4 text-gray-400 mr-1" />
                        </div>
                        <div className="text-lg font-bold text-white">∞</div>
                        <div className="text-xs text-gray-400">Stories</div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className={`${getUniverseTextColor(universe.id)} border-current bg-black/20`}
                      >
                        Explorer
                      </Badge>
                      <div
                        className={`
                        w-8 h-8 rounded-full bg-gradient-to-r ${getUniverseGradient(universe.id)} 
                        flex items-center justify-center group-hover:rotate-45 transition-transform duration-300
                        border border-white/20
                      `}
                      >
                        <Star
                          className={`w-4 h-4 ${getUniverseTextColor(universe.id)}`}
                        />
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Featured Universe Teaser */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-hero-blue rounded-full animate-pulse" />
            <span className="text-gray-300">Plus d'univers à venir...</span>
            <div className="w-2 h-2 bg-hero-red rounded-full animate-pulse animation-delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversePortals;
