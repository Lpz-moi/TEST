import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { newsItems, type NewsItem } from "@/lib/superhero-data";

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredNews = newsItems.slice(0, 5); // Take first 5 news items for slideshow

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredNews.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredNews.length) % featuredNews.length,
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getUniverseColor = (universe: string) => {
    switch (universe) {
      case "DC":
        return "text-hero-blue border-hero-blue";
      case "Marvel":
        return "text-hero-red border-hero-red";
      default:
        return "text-hero-purple border-hero-purple";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Movie":
      case "Series":
        return <Play className="w-3 h-3" />;
      default:
        return <ExternalLink className="w-3 h-3" />;
    }
  };

  if (featuredNews.length === 0) return null;

  const currentItem = featuredNews[currentSlide];

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden rounded-2xl">
      {/* Background Images */}
      <div className="absolute inset-0">
        {featuredNews.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4 animate-fade-in">
              <Badge
                variant="outline"
                className={`${getUniverseColor(currentItem.universe)} bg-black/20 backdrop-blur-sm`}
              >
                {currentItem.universe}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-black/20 backdrop-blur-sm text-white border-white/20"
              >
                <span className="mr-1">
                  {getCategoryIcon(currentItem.category)}
                </span>
                {currentItem.category}
              </Badge>
              <span className="text-gray-300 text-sm">
                {new Date(currentItem.date).toLocaleDateString("fr-FR")}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 glow-text animate-slide-up">
              {currentItem.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in">
              {currentItem.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
              <Button
                size="lg"
                className="bg-hero-gradient hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-hero-blue/25"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir le contenu
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredNews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <div className="flex items-center space-x-2 text-white/60 text-sm">
          <div
            className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}
          />
          <span>Auto</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
