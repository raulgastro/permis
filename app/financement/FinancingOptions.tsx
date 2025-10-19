
'use client';

export default function FinancingOptions() {
  const options = [
    {
      icon: "ri-bank-line",
      title: "Crédit Auto Classique",
      description: "Prêt personnel pour financer votre véhicule neuf ou d'occasion",
      features: [
        "Taux fixe de 2.9% à 7.5%",
        "Durée de 12 à 84 mois",
        "Pas d'hypothèque sur le véhicule",
        "Remboursement anticipé possible"
      ],
      badge: "Le plus populaire"
    },
    {
      icon: "ri-contract-line",
      title: "Leasing / LOA",
      description: "Location avec option d'achat pour conduire sans acheter",
      features: [
        "Mensualités réduites",
        "Véhicule toujours sous garantie",
        "Option d'achat en fin de contrat",
        "Renouvellement facilité"
      ],
      badge: "Économique"
    },
    {
      icon: "ri-wallet-line",
      title: "Crédit Ballon",
      description: "Solution hybride avec apport final pour réduire les mensualités",
      features: [
        "Mensualités allégées",
        "Dernier paiement important",
        "Flexibilité en fin de contrat",
        "Idéal pour véhicules haut de gamme"
      ],
      badge: "Flexible"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Solutions de Financement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez la formule qui correspond le mieux à votre situation et vos besoins
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-8 relative">
              {option.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {option.badge}
                  </span>
                </div>
              )}
              
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-xl mb-6">
                <i className={`${option.icon} text-2xl`}></i>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-3 mt-0.5"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                En Savoir Plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
