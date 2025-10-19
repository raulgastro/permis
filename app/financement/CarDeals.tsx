
'use client';

import { useState } from 'react';

export default function CarDeals() {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const categories = [
    { id: 'tous', label: 'Toutes les offres' },
    { id: 'citadines', label: 'Citadines' },
    { id: 'compactes', label: 'Compactes' },
    { id: 'berlines', label: 'Berlines' },
    { id: 'suv', label: 'SUV' },
    { id: 'electriques', label: 'Électriques' }
  ];

  const carDeals = [
    {
      id: 1,
      category: 'citadines',
      brand: 'Peugeot',
      model: '208',
      year: 2023,
      price: 18900,
      originalPrice: 21500,
      discount: 2600,
      financing: 189,
      image: 'https://readdy.ai/api/search-image?query=Modern%20Peugeot%20208%20compact%20car%20in%20bright%20metallic%20blue%2C%20three-quarter%20front%20view%2C%20studio%20lighting%2C%20clean%20white%20background%2C%20contemporary%20automotive%20photography%2C%20premium%20finish&width=400&height=300&seq=car-1&orientation=landscape',
      features: ['GPS', 'Climatisation', 'Bluetooth', 'Jantes alliage'],
      fuel: 'Essence',
      transmission: 'Manuelle'
    },
    {
      id: 2,
      category: 'compactes',
      brand: 'Volkswagen',
      model: 'Golf',
      year: 2023,
      price: 24900,
      originalPrice: 27800,
      discount: 2900,
      financing: 249,
      image: 'https://readdy.ai/api/search-image?query=Volkswagen%20Golf%20modern%20hatchback%20in%20elegant%20silver%20metallic%2C%20side%20profile%20view%2C%20professional%20automotive%20photography%2C%20showroom%20lighting%2C%20clean%20minimal%20background%2C%20high%20quality%20finish&width=400&height=300&seq=car-2&orientation=landscape',
      features: ['GPS', 'Régulateur vitesse', 'Caméra recul', 'LED'],
      fuel: 'Essence',
      transmission: 'Automatique'
    },
    {
      id: 3,
      category: 'suv',
      brand: 'Renault',
      model: 'Captur',
      year: 2023,
      price: 26500,
      originalPrice: 29200,
      discount: 2700,
      financing: 265,
      image: 'https://readdy.ai/api/search-image?query=Renault%20Captur%20compact%20SUV%20in%20vibrant%20orange%20and%20black%20two-tone%2C%20dynamic%20three-quarter%20view%2C%20modern%20automotive%20photography%2C%20bright%20studio%20lighting%2C%20contemporary%20styling&width=400&height=300&seq=car-3&orientation=landscape',
      features: ['4x4', 'Toit panoramique', 'Aide parking', 'Écran tactile'],
      fuel: 'Hybride',
      transmission: 'Automatique'
    },
    {
      id: 4,
      category: 'berlines',
      brand: 'BMW',
      model: 'Série 3',
      year: 2023,
      price: 39900,
      originalPrice: 44500,
      discount: 4600,
      financing: 399,
      image: 'https://readdy.ai/api/search-image?query=BMW%203%20Series%20luxury%20sedan%20in%20sophisticated%20dark%20gray%20metallic%2C%20elegant%20profile%20view%2C%20premium%20automotive%20photography%2C%20professional%20studio%20lighting%2C%20luxurious%20finish%20quality&width=400&height=300&seq=car-4&orientation=landscape',
      features: ['Cuir', 'GPS Premium', 'Sièges chauffants', 'Système audio'],
      fuel: 'Diesel',
      transmission: 'Automatique'
    },
    {
      id: 5,
      category: 'electriques',
      brand: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 42900,
      originalPrice: 47800,
      discount: 4900,
      financing: 429,
      image: 'https://readdy.ai/api/search-image?query=Tesla%20Model%203%20electric%20sedan%20in%20pristine%20white%2C%20sleek%20modern%20design%2C%20futuristic%20automotive%20photography%2C%20clean%20studio%20environment%2C%20high-tech%20minimalist%20aesthetic&width=400&height=300&seq=car-5&orientation=landscape',
      features: ['Autopilot', 'Supercharge', 'Écran 15"', 'Mise à jour OTA'],
      fuel: 'Électrique',
      transmission: 'Automatique'
    },
    {
      id: 6,
      category: 'suv',
      brand: 'Audi',
      model: 'Q3',
      year: 2023,
      price: 44900,
      originalPrice: 49500,
      discount: 4600,
      financing: 449,
      image: 'https://readdy.ai/api/search-image?query=Audi%20Q3%20premium%20compact%20SUV%20in%20glacier%20white%20metallic%2C%20sophisticated%20three-quarter%20view%2C%20luxury%20automotive%20photography%2C%20professional%20studio%20lighting%2C%20elegant%20premium%20design&width=400&height=300&seq=car-6&orientation=landscape',
      features: ['Quattro', 'Cockpit virtuel', 'Matrix LED', 'Bang & Olufsen'],
      fuel: 'Essence',
      transmission: 'Automatique'
    }
  ];

  const filteredCars = selectedCategory === 'tous' 
    ? carDeals 
    : carDeals.filter(car => car.category === selectedCategory);

  return (
    <section id="voitures" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Offres Véhicules à Prix Réduit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de véhicules neufs et récents avec des remises exceptionnelles
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grille des véhicules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{car.discount}€
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {car.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {car.brand} {car.model}
                  </h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">{car.originalPrice.toLocaleString()}€</div>
                    <div className="text-xl font-bold text-green-600">{car.price.toLocaleString()}€</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <i className="ri-gas-station-line mr-2"></i>
                    {car.fuel}
                  </div>
                  <div className="flex items-center">
                    <i className="ri-settings-line mr-2"></i>
                    {car.transmission}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {car.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 2 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{car.features.length - 2} options
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">À partir de</span>
                    <span className="text-lg font-bold text-gray-900">{car.financing}€/mois</span>
                  </div>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                    Demander ce Véhicule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Voir Plus d'Offres
          </button>
        </div>
      </div>
    </section>
  );
}
