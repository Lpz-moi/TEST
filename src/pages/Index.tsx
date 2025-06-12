import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Quote,
  ChevronRight,
  Sparkles,
  Users,
  BookOpen,
  Video,
  MessageCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import UniversePortals from "@/components/UniversePortals";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getRandomQuote } from "@/lib/superhero-data";

const Index = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  useEffect(() => {
    const updateQuote = () => {
      const quote = getRandomQuote();
      const [text, author] = quote.split(" - ");
      setCurrentQuote(text);
      setQuoteAuthor(author || "Héros Anonyme");
    };

    updateQuote();
    const interval = setInterval(updateQuote, 15000); // Change quote every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const quickAccess = [
    {
      title: "Personnages",
      description: "Base de données complète",
      icon: Users,
      link: "/characters",
      color: "text-hero-blue",
      bgColor: "bg-hero-blue/20",
    },
    {
      title: "Actualités",
      description: "Daily Planet",
      icon: BookOpen,
      link: "/news",
      color: "text-hero-red",
      bgColor: "bg-hero-red/20",
    },
    {
      title: "Vidéothèque",
      description: "Films & Séries",
      icon: Video,
      link: "/videos",
      color: "text-hero-yellow",
      bgColor: "bg-hero-yellow/20",
    },
    {
      title: "Communauté",
      description: "FanLab",
      icon: MessageCircle,
      link: "/community",
      color: "text-hero-purple",
      bgColor: "bg-hero-purple/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gotham-gradient">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gotham City Skyline */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-gotham-800 to-transparent" />

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-hero-blue rounded-full animate-float opacity-60" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-hero-red rounded-full animate-float animation-delay-1000 opacity-40" />
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-hero-yellow rounded-full animate-float animation-delay-2000 opacity-80" />

          {/* Lightning Effect */}
          <div className="absolute top-1/3 right-1/3 w-0.5 h-32 bg-hero-blue animate-lightning opacity-20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Main Hero Content */}
          <div className="mb-12">
            <Badge
              variant="outline"
              className="text-hero-blue border-hero-blue bg-black/20 backdrop-blur-sm mb-6 animate-fade-in"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Bienvenue dans l'univers des super-héros
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 glow-text animate-slide-up">
              HeroHub
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 animate-fade-in">
              Le hub ultime pour les fans de super-héros. Explorez les multivers
              DC, Marvel et bien plus encore. Découvrez, apprenez, et
              connectez-vous avec la plus grande communauté de fans au monde.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
              <Button
                size="lg"
                className="bg-hero-gradient hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-hero-blue/25"
                asChild
              >
                <Link to="/characters">
                  <Users className="w-5 h-5 mr-2" />
                  Explorer les Héros
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <Link to="/news">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Dernières Actualités
                </Link>
              </Button>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="hero-glass rounded-2xl p-6 max-w-2xl mx-auto animate-fade-in">
            <Quote className="w-8 h-8 text-hero-blue mx-auto mb-4" />
            <blockquote className="text-lg md:text-xl text-white italic mb-4 leading-relaxed">
              "{currentQuote}"
            </blockquote>
            <cite className="text-hero-blue font-semibold">
              — {quoteAuthor}
            </cite>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Featured Content Slideshow */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">
              Dernières Actualités
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Restez informé des dernières sorties, trailers et événements du
              monde des super-héros
            </p>
          </div>
          <HeroSlideshow />
        </div>
      </section>

      {/* Universe Portals */}
      <UniversePortals />

      {/* Quick Access */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text">
              Accès Rapide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Plongez directement dans vos sections préférées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccess.map((item, index) => (
              <Link key={item.title} to={item.link} className="group block">
                <Card className="hero-glass border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <div
                        className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className={`w-8 h-8 ${item.color}`} />
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 ${item.color} group-hover:glow-text transition-all duration-300`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                      <span className="text-sm mr-2">Explorer</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="hero-glass rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 glow-text">
                Rejoignez la Communauté
              </h2>
              <p className="text-gray-300">
                Des milliers de fans passionnés vous attendent
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-hero-blue mb-2">
                  1000+
                </div>
                <div className="text-gray-300">Héros</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hero-red mb-2">
                  50K+
                </div>
                <div className="text-gray-300">Fans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hero-yellow mb-2">
                  ∞
                </div>
                <div className="text-gray-300">Univers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hero-purple mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Actif</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">HeroHub</span>
          </div>
          <p className="text-gray-400 mb-4">
            L'univers des super-héros n'attend que vous
          </p>
          <Badge variant="outline" className="text-gray-400 border-gray-600">
            Fait avec ❤️ pour les fans de super-héros
          </Badge>
        </div>
      </footer>
    </div>
  );
};

export default Index;
