
'use client';

export default function PartnersGrid() {
  const partnerCategories = [
    {
      title: "Auto-Écoles Partenaires",
      description: "Réseau national d'auto-écoles certifiées",
      partners: [
        {
          name: "École de Conduite Moderne",
          location: "Paris & Région Parisienne",
          speciality: "Formation traditionnelle et accélérée",
          logo: "https://readdy.ai/api/search-image?query=Modern%20driving%20school%20logo%20design%2C%20circular%20emblem%20with%20steering%20wheel%20and%20academic%20elements%2C%20professional%20blue%20and%20white%20colors%2C%20clean%20minimalist%20style%2C%20contemporary%20branding&width=200&height=200&seq=partner-1&orientation=squarish",
          rating: 4.9,
          students: "2,500+"
        },
        {
          name: "Conduite Plus",
          location: "Lyon, Marseille, Toulouse",
          speciality: "Permis moto et poids lourd",
          logo: "https://readdy.ai/api/search-image?query=Professional%20automotive%20education%20logo%2C%20modern%20geometric%20design%20with%20car%20silhouette%2C%20vibrant%20orange%20and%20blue%20colors%2C%20dynamic%20professional%20branding%2C%20clean%20style&width=200&height=200&seq=partner-2&orientation=squarish",
          rating: 4.8,
          students: "1,800+"
        },
        {
          name: "Formation Rapide",
          location: "Bordeaux, Nantes, Lille",
          speciality: "Stages intensifs",
          logo: "https://readdy.ai/api/search-image?query=Fast%20driving%20school%20logo%20design%2C%20arrow%20and%20road%20elements%2C%20modern%20red%20and%20gray%20colors%2C%20speed%20and%20efficiency%20concept%2C%20professional%20branding%20style&width=200&height=200&seq=partner-3&orientation=squarish",
          rating: 4.7,
          students: "1,200+"
        }
      ]
    },
    {
      title: "Organismes de Formation",
      description: "Centres spécialisés en formation professionnelle",
      partners: [
        {
          name: "Institut de Formation Routière",
          location: "National",
          speciality: "Permis professionnels",
          logo: "https://readdy.ai/api/search-image?query=Professional%20road%20training%20institute%20logo%2C%20academic%20shield%20design%20with%20truck%20and%20road%20elements%2C%20formal%20blue%20and%20gold%20colors%2C%20educational%20institution%20branding&width=200&height=200&seq=partner-4&orientation=squarish",
          rating: 4.9,
          students: "5,000+"
        },
        {
          name: "Centre FIMO FCO",
          location: "Régions industrielles",
          speciality: "Formation continue transport",
          logo: "https://readdy.ai/api/search-image?query=Transportation%20training%20center%20logo%2C%20industrial%20design%20with%20gear%20and%20vehicle%20elements%2C%20professional%20green%20and%20silver%20colors%2C%20modern%20corporate%20branding&width=200&height=200&seq=partner-5&orientation=squarish",
          rating: 4.8,
          students: "3,200+"
        }
      ]
    },
    {
      title: "Partenaires Technologiques",
      description: "Solutions digitales pour l'apprentissage",
      partners: [
        {
          name: "SimuDrive Pro",
          location: "Solutions nationales",
          speciality: "Simulateurs de conduite",
          logo: "https://readdy.ai/api/search-image?query=Technology%20simulation%20company%20logo%2C%20modern%20digital%20design%20with%20VR%20headset%20and%20car%20elements%2C%20high-tech%20blue%20and%20white%20colors%2C%20innovation%20branding&width=200&height=200&seq=partner-6&orientation=squarish",
          rating: 4.9,
          students: "10,000+"
        },
        {
          name: "CodeRoute Digital",
          location: "Plateforme en ligne",
          speciality: "Tests code en ligne",
          logo: "https://readdy.ai/api/search-image?query=Digital%20learning%20platform%20logo%2C%20modern%20app-style%20design%20with%20mobile%20and%20road%20sign%20elements%2C%20contemporary%20purple%20and%20blue%20colors%2C%20tech%20education%20branding&width=200&height=200&seq=partner-7&orientation=squarish",
          rating: 4.8,
          students: "15,000+"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Réseau de Partenaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 150 partenaires certifiés dans toute la France pour vous garantir un service de qualité
          </p>
        </div>

        {partnerCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.partners.map((partner, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-16 h-16 rounded-lg object-cover object-top mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{partner.name}</h4>
                      <p className="text-sm text-gray-500">{partner.location}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {partner.speciality}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <i 
                            key={i} 
                            className={`ri-star-${i < Math.floor(partner.rating) ? 'fill' : 'line'} text-sm`}
                          ></i>
                        ))}
                      </div>
                      <span className="font-medium">{partner.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-user-line mr-1"></i>
                      <span>{partner.students} étudiants</span>
                    </div>
                  </div>

                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                    Voir les détails
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
