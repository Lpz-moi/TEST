import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Characters from "./pages/Characters";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Placeholder components for future routes
const PlaceholderPage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="min-h-screen bg-gotham-gradient pt-20">
    <div className="container mx-auto px-4 text-center py-20">
      <h1 className="text-4xl font-bold text-white mb-4 glow-text">{title}</h1>
      <p className="text-xl text-gray-300">{description}</p>
      <div className="mt-8 text-gray-400">🚧 En construction... 🚧</div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/news" element={<News />} />

          {/* Universe Routes */}
          <Route
            path="/dc"
            element={
              <PlaceholderPage
                title="DC Universe"
                description="Explorez l'univers de Superman, Batman et Wonder Woman"
              />
            }
          />
          <Route
            path="/marvel"
            element={
              <PlaceholderPage
                title="Marvel Universe"
                description="Découvrez le monde des Avengers et des X-Men"
              />
            }
          />
          <Route
            path="/other"
            element={
              <PlaceholderPage
                title="Autres Univers"
                description="The Boys, Invincible, Hellboy et plus encore"
              />
            }
          />

          {/* Feature Routes */}
          <Route
            path="/multiverse"
            element={
              <PlaceholderPage
                title="Exploration du Multivers"
                description="Naviguez entre les dimensions parallèles"
              />
            }
          />
          <Route
            path="/videos"
            element={
              <PlaceholderPage
                title="Vidéothèque Super-Héros"
                description="Films, séries et trailers exclusifs"
              />
            }
          />
          <Route
            path="/community"
            element={
              <PlaceholderPage
                title="FanLab Communauté"
                description="Galerie fanart, fanfictions et forums"
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <PlaceholderPage
                title="Quiz & Jeux Interactifs"
                description="Testez vos connaissances héroïques"
              />
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
