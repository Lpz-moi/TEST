import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Zap, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavigationProps {
  onSearch?: (query: string) => void;
}

const Navigation = ({ onSearch }: NavigationProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const universes = [
    { name: "DC Universe", path: "/dc", icon: Shield, color: "text-hero-blue" },
    { name: "Marvel", path: "/marvel", icon: Zap, color: "text-hero-red" },
    { name: "Other", path: "/other", icon: Star, color: "text-hero-purple" },
  ];

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Actualités", path: "/news" },
    { name: "Personnages", path: "/characters" },
    { name: "Multivers", path: "/multiverse" },
    { name: "Vidéothèque", path: "/videos" },
    { name: "Communauté", path: "/community" },
    { name: "Quiz", path: "/quiz" },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 hero-glass border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center group-hover:animate-glow transition-all duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white glow-text">
                HeroHub
              </h1>
              <p className="text-xs text-gray-300">Universe Explorer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                  isActivePath(link.path)
                    ? "text-hero-blue glow-text bg-white/10"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Universe Portals */}
          <div className="hidden md:flex items-center space-x-2">
            {universes.map((universe) => (
              <Link
                key={universe.path}
                to={universe.path}
                className="group relative"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${universe.color} hover:bg-white/10 transition-all duration-300 group-hover:scale-110`}
                >
                  <universe.icon className="w-4 h-4 mr-1" />
                  <span className="hidden xl:inline">{universe.name}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center space-x-2"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher un héros..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 bg-black/20 border-white/20 text-white placeholder:text-gray-400 focus:border-hero-blue"
              />
            </div>
          </form>

          {/* User Profile & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="hidden sm:block">
              Sidekick
            </Badge>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-gotham-900 border-l border-white/10"
              >
                <SheetHeader>
                  <SheetTitle className="text-white">Navigation</SheetTitle>
                  <SheetDescription className="text-gray-400">
                    Explorez l'univers des super-héros
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-6 space-y-4">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="flex space-x-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Rechercher..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-black/20 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </form>

                  {/* Mobile Universe Portals */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-300 mb-2">
                      Univers
                    </h3>
                    {universes.map((universe) => (
                      <Link
                        key={universe.path}
                        to={universe.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <universe.icon
                          className={`w-5 h-5 ${universe.color}`}
                        />
                        <span className="text-white">{universe.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-300 mb-2">
                      Navigation
                    </h3>
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block p-3 rounded-lg transition-colors ${
                          isActivePath(link.path)
                            ? "text-hero-blue bg-white/10"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
