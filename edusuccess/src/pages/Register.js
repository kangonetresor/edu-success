import React, { useState } from 'react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";

const RegisterPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-blue-50 text-gray-900'
      }`}
    >
      {/* Conteneur principal */}
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">EduSuccess</CardTitle>
          <p className="text-gray-600 text-sm">
            Créez votre compte pour rejoindre la plateforme
          </p>
        </CardHeader>

        <CardContent>
          {/* Formulaire d'inscription */}
          <div className="space-y-4">
            {/* Nom complet */}
            <div>
              <Label htmlFor="fullName" className="block mb-1">
                Nom complet
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Votre nom complet"
                className="w-full"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="block mb-1">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                className="w-full"
              />
            </div>

            {/* Mot de passe */}
            <div>
              <Label htmlFor="password" className="block mb-1">
                Mot de passe
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full"
              />
            </div>

            {/* Confirmation du mot de passe */}
            <div>
              <Label htmlFor="confirmPassword" className="block mb-1">
                Confirmez le mot de passe
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="w-full"
              />
            </div>

            {/* Sélection du rôle */}
            <div>
              <Label htmlFor="role" className="block mb-1">
                Rôle
              </Label>
              <select
                id="role"
                className="w-full p-3 border rounded text-gray-900"
              >
                <option value="student">Élève</option>
                <option value="teacher">Enseignant</option>
                <option value="admin">Personnel administratif</option>
              </select>
            </div>

            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
              S'inscrire
            </Button>
          </div>
        </CardContent>

        <CardFooter className="text-center space-y-4">
          <div>
            <span>Vous avez déjà un compte ? </span>
            <Button
              variant="link"
              className="text-blue-600"
              onClick={() => (window.location.href = "/Auth")}
            >
              Se connecter
            </Button>
          </div>

          {/* Bouton pour basculer le mode */}
          {/* <Button
            variant="outline"
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm"
          >
            {darkMode ? 'Mode Jour' : 'Mode Nuit'}
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
