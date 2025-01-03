import React, { useState } from 'react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";

const LoginPage = () => {
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
            Connectez-vous pour accéder à votre espace
          </p>
        </CardHeader>

        <CardContent>
          {/* Formulaire de connexion */}
          <div className="space-y-4">
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

            <div className="text-right">
              <Button variant="link" className="text-blue-600 text-sm">
                Mot de passe oublié ?
              </Button>
            </div>

            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Se connecter
            </Button>
          </div>
        </CardContent>

        <CardFooter className="text-center space-y-4">
          <div>
            <span>Pas de compte ? </span>
            <Button variant="link" className="text-blue-600" onClick={() => window.location.href = "/Register"}>
              S'inscrire
            </Button>
          </div>

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

export default LoginPage;
