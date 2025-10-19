
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const vehicleImages = [
    {
      url: "https://readdy.ai/api/search-image?query=Modern%20luxury%20sedan%20car%20driving%20on%20highway%2C%20clean%20silver%20metallic%20finish%2C%20professional%20automotive%20photography%2C%20dynamic%20angle%2C%20bright%20daylight%2C%20minimal%20background%2C%20high%20quality%2C%20commercial%20style&width=1920&height=1080&seq=vehicle-1&orientation=landscape",
      alt: "Voiture de tourisme"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Motorcycle%20rider%20on%20modern%20sport%20bike%2C%20professional%20riding%20gear%2C%20scenic%20mountain%20road%2C%20dynamic%20motion%2C%20bright%20lighting%2C%20adventure%20style%2C%20high%20quality%20photography&width=1920&height=1080&seq=vehicle-2&orientation=landscape",
      alt: "Moto"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Large%20commercial%20truck%20on%20highway%2C%20modern%20freight%20transport%2C%20professional%20logistics%2C%20clean%20white%20trailer%2C%20industrial%20photography%2C%20bright%20daylight%2C%20minimal%20background&width=1920&height=1080&seq=vehicle-3&orientation=landscape",
      alt: "Camion poids lourd"
    },
    {
      url: "https://readdy.ai/api/search-image?query=City%20bus%20at%20modern%20bus%20stop%2C%20public%20transportation%2C%20urban%20environment%2C%20clean%20design%2C%20professional%20transit%20photography%2C%20bright%20lighting%2C%20contemporary%20style&width=1920&height=1080&seq=vehicle-4&orientation=landscape",
      alt: "Transport en commun"
    },
    {
      url: "https://readdy.ai/api/search-image?query=BMW%20driving%20school%20car%20with%20dual%20controls%20and%20instructor%20signs%2C%20white%20BMW%20sedan%20with%20educational%20branding%2C%20professional%20driving%20education%20vehicle%2C%20clean%20modern%20design%2C%20bright%20lighting%2C%20training%20environment&width=1920&height=1080&seq=vehicle-5&orientation=landscape",
      alt: "BMW Auto-école"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Luxury%20BMW%20sports%20car%20on%20scenic%20road%2C%20metallic%20blue%20BMW%20coupe%2C%20dynamic%20driving%20angle%2C%20premium%20automotive%20photography%2C%20mountain%20background%2C%20bright%20daylight%2C%20high%20performance%20vehicle&width=1920&height=1080&seq=vehicle-6&orientation=landscape",
      alt: "BMW Sport"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % vehicleImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [vehicleImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Images qui défilent */}
      <div className="absolute inset-0">
        {vehicleImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image.url}')`
            }}
          />
        ))}
      </div>

      {/* Indicateurs de défilement */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {vehicleImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Obtenez Votre Permis de Conduire
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Demandez facilement tous types de permis de conduire en ligne. 
          Interface simple, processus rapide, résultats garantis.
        </p>
        
        {/* Étiquette du véhicule actuel */}
        <div className="mb-8">
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
            {vehicleImages[currentImageIndex].alt}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
          >
            Faire une Demande
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
          >
            Nos Services
          </button>
        </div>
      </div>
    </section>
  );
}
