
'use client';

import { useState } from 'react';

interface FormStep1Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
}

export default function FormStep1({ data, updateData, onNext }: FormStep1Props) {
  const [selectedType, setSelectedType] = useState(data.permisType || '');

  const permisTypes = [
    {
      id: 'B',
      title: 'Permis B',
      description: 'Véhicules légers jusqu\'à 3,5 tonnes',
      icon: 'ri-car-line',
      duration: '3-6 mois',
      price: '1200€'
    },
    {
      id: 'A2',
      title: 'Permis A2',
      description: 'Motocycles jusqu\'à 35kW',
      icon: 'ri-motorbike-line',
      duration: '2-4 mois',
      price: '800€'
    },
    {
      id: 'A',
      title: 'Permis A',
      description: 'Motocycles sans limitation de puissance',
      icon: 'ri-motorbike-line',
      duration: '1-2 mois',
      price: '600€'
    },
    {
      id: 'C',
      title: 'Permis C',
      description: 'Poids lourds de plus de 3,5 tonnes',
      icon: 'ri-truck-line',
      duration: '4-8 mois',
      price: '2500€'
    },
    {
      id: 'D',
      title: 'Permis D',
      description: 'Transport en commun de voyageurs',
      icon: 'ri-bus-line',
      duration: '4-8 mois',
      price: '2800€'
    },
    {
      id: 'AM',
      title: 'Permis AM',
      description: 'Cyclomoteurs et quadricycles légers',
      icon: 'ri-e-bike-2-line',
      duration: '1 jour',
      price: '200€'
    }
  ];

  const handleNext = () => {
    if (selectedType) {
      updateData({ permisType: selectedType });
      onNext();
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Choisissez le Type de Permis
      </h3>
      <p className="text-gray-600 mb-8 text-center">
        Sélectionnez le permis de conduire que vous souhaitez obtenir
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {permisTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg ${
              selectedType === type.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="text-center">
              <div className={`w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 ${
                selectedType === type.id ? 'bg-blue-600' : 'bg-gray-100'
              }`}>
                <i className={`${type.icon} text-2xl ${
                  selectedType === type.id ? 'text-white' : 'text-gray-600'
                }`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {type.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                {type.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">
                  <i className="ri-time-line mr-1"></i>
                  {type.duration}
                </span>
                <span className="font-bold text-blue-600">
                  {type.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!selectedType}
          className={`px-8 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
            selectedType
              ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continuer
          <i className="ri-arrow-right-line ml-2"></i>
        </button>
      </div>
    </div>
  );
}
