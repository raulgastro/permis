
'use client';

import { useState } from 'react';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      id: 'B',
      title: 'Permis B',
      description: 'Permis de conduire pour véhicules légers',
      icon: 'ri-car-line',
      price: 'À partir de 1200€',
      features: [
        'Formation théorique',
        'Leçons pratiques', 
        'Passage d\'examen',
        'Suivi personnalisé'
      ],
      details: {
        duration: '3-6 mois',
        minAge: '18 ans',
        lessons: '20h minimum',
        examType: 'Théorique + Pratique'
      }
    },
    {
      id: 'A2',
      title: 'Permis A/A2',
      description: 'Permis moto toutes cylindrées',
      icon: 'ri-motorbike-line',
      price: 'À partir de 800€',
      features: [
        'Plateau de formation',
        'Circulation de formation',
        'Équipement fourni',
        'Moniteur expert'
      ],
      details: {
        duration: '2-4 mois',
        minAge: '20 ans (A2), 24 ans (A)',
        lessons: '20h minimum',
        examType: 'Plateau + Circulation'
      }
    },
    {
      id: 'C',
      title: 'Permis C/D',
      description: 'Permis poids lourds et transport',
      icon: 'ri-truck-line',
      price: 'À partir de 2500€',
      features: [
        'Formation professionnelle',
        'FIMO/FCO',
        'Certificat médical',
        'Emploi garanti'
      ],
      details: {
        duration: '4-8 mois',
        minAge: '21 ans',
        lessons: '105h minimum',
        examType: 'Théorique + Pratique + Médical'
      }
    },
    {
      id: 'AM',
      title: 'Permis AM',
      description: 'Cyclomoteur et quadricycle léger',
      icon: 'ri-e-bike-2-line',
      price: 'À partir de 200€',
      features: [
        'Formation de 8h',
        'Théorique et pratique',
        'Dès 14 ans',
        'Attestation délivrée'
      ],
      details: {
        duration: '1 jour',
        minAge: '14 ans',
        lessons: '8h formation',
        examType: 'Formation obligatoire'
      }
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setSelectedService(serviceId);
      setShowModal(true);
    }
  };

  const handleFeatureClick = (feature: string, serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service && feature === 'Suivi personnalisé') {
      document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleServiceClick(serviceId);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const currentService = services.find(s => s.id === selectedService);

  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tous les types de permis</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nous proposons la formation complète pour tous les types de permis de conduire, avec des instructeurs qualifiés et un taux de réussite de 95%.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:bg-purple-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-6 mx-auto">
                  <i className={`${service.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li 
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFeatureClick(feature, service.id);
                      }}
                      className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && currentService && (
        <div className="fixed inset-0 bg-black bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mr-4">
                    <i className={`${currentService.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{currentService.title}</h3>
                    <p className="text-gray-600">{currentService.description}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Détails de la Formation</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée :</span>
                      <span className="font-semibold">{currentService.details.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Âge minimum :</span>
                      <span className="font-semibold">{currentService.details.minAge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Heures de cours :</span>
                      <span className="font-semibold">{currentService.details.lessons}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type d'examen :</span>
                      <span className="font-semibold">{currentService.details.examType}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Ce qui est inclus</h4>
                  <ul className="space-y-2">
                    {currentService.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <i className="ri-check-line text-green-500 mr-3"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {currentService.price}
                  </div>
                  <p className="text-blue-800">Tarif tout compris avec garantie de réussite</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    closeModal();
                    document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-file-text-line mr-2"></i>
                  Faire une Demande
                </button>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
