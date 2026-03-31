"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t p-4 shadow-lg md:flex md:items-center md:justify-between md:px-8">
      <div className="text-sm text-gray-700 md:max-w-3xl">
        <p className="font-semibold text-primary mb-1">Aviso de Privacidad / Privacy Notice</p>
        <p>
          Utilizamos cookies para mejorar su experiencia (Google Analytics y Meta Pixel). Al continuar navegando, acepta nuestra política de privacidad cumpliendo con la ley CCPA de California.
        </p>
      </div>
      <div className="mt-4 flex gap-3 md:mt-0 md:pl-4 shrink-0">
        <Button onClick={acceptCookies} className="w-full md:w-auto">
          Aceptar / Accept
        </Button>
      </div>
    </div>
  );
}
