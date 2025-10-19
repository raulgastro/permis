
'use client';

export default function PartnershipBenefits() {
  const benefits = [
    {
      icon: "ri-medal-line",
      title: "Certification Qualité",
      description: "Tous nos partenaires sont certifiés et respectent nos standards de qualité élevés"
    },
    {
      icon: "ri-network-line",
      title: "Couverture Nationale",
      description: "Un réseau étendu dans toute la France pour vous servir près de chez vous"
    },
    {
      icon: "ri-customer-service-line",
      title: "Support Unifié",
      description: "Un seul point de contact pour toutes vos demandes, quel que soit le partenaire"
    },
    {
      icon: "ri-price-tag-line",
      title: "Tarifs Négociés",
      description: "Des prix préférentiels grâce à notre pouvoir de négociation collective"
    },
    {
      icon: "ri-shield-check-line",
      title: "Garantie Résultats",
      description: "Engagement de nos partenaires sur les taux de réussite et délais de formation"
    },
    {
      icon: "ri-refresh-line",
      title: "Suivi Continu",
      description: "Monitoring régulier de la performance et satisfaction de nos partenaires"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi Nos Partenariats Font la Différence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre sélection rigoureuse et notre accompagnement garantissent votre réussite
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mx-auto mb-4">
                <i className={`${benefit.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
