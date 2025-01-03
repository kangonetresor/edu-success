import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { 
  LineChart, 
  Brain, 
  Bell, 
  BarChart3, 
  Users, 
  ArrowRight, 
  GraduationCap, 
  BookOpen 
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const HomePage = () => {
  // Gestion du mode nuit
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const features = [
    {
      icon: <LineChart className="h-8 w-8 text-blue-500" />,
      title: "Suivi des performances",
      description: "Suivez votre progression académique en temps réel avec des indicateurs détaillés"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "Prédiction intelligente",
      description: "Système de prédiction basé sur l'IA pour identifier les risques d'échec scolaire"
    },
    {
      icon: <Bell className="h-8 w-8 text-blue-500" />,
      title: "Alertes personnalisées",
      description: "Recevez des notifications importantes sur les événements et les échéances"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
      title: "Tableaux de bord",
      description: "Visualisez les données importantes via des tableaux de bord personnalisés"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Barre de navigation */}
      <nav className={`shadow-sm ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">EduSuccess</div>
            <div className="flex items-center">
              {/* Interrupteur Mode Nuit */}
              <div className="relative inline-flex items-center cursor-pointer mr-4">
                <input
                  type="checkbox"
                  id="darkModeToggle"
                  className="sr-only"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <div
                  className={`w-10 h-6 bg-gray-300 rounded-full p-1 transition ${
                    darkMode ? "bg-blue-500" : ""
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform ${
                      darkMode ? "transform translate-x-4" : ""
                    }`}
                  ></div>
                </div>
              </div>
              <Button
                variant="outline"
                className="mr-4"
                onClick={() => window.location.href = "/Auth"}
              >
                Connexion
              </Button>
              <Button onClick={() => window.location.href = "/Register"}>
                Inscription
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section héro */}
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">
              Réduisez l'échec scolaire grâce à l'intelligence artificielle
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Une plateforme innovante qui combine le suivi des performances, 
              la prédiction des risques et des recommandations personnalisées 
              pour assurer la réussite de chaque élève.
            </p>
            <Button
              size="lg"
              onClick={() => window.location.href = "/Auth"}
              className="text-lg px-8"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Section caractéristiques */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Fonctionnalités principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

        {/* Section pour qui */}
        <div className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Pour qui est cette plateforme ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">Élèves</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Suivi personnalisé des performances</li>
                  <li>• Recommandations d'amélioration</li>
                  <li>• Alertes sur les échéances importantes</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">Enseignants</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Suivi des performances de la classe</li>
                  <li>• Identification des élèves à risque</li>
                  <li>• Outils de communication efficaces</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">Administration</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Statistiques globales</li>
                  <li>• Tableaux de bord analytiques</li>
                  <li>• Rapports détaillés</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Pied de page */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">EduSuccess</h3>
              <p className="text-blue-200">
                Une solution innovante pour la réussite scolaire
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-blue-200">
                Email: contact@edusuccess.com<br />
                Téléphone: +225 01 03 73 77 47
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <div className="space-y-2">
                <Button 
                  variant="link" 
                  className="text-blue-200 hover:text-white p-0"
                  onClick={() => window.location.href="/Auth"}
                >
                  Connexion
                </Button><br />
                <Button 
                  variant="link" 
                  className="text-blue-200 hover:text-white p-0"
                  onClick={() => window.location.href="/Register"}
                >
                  Inscription
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

