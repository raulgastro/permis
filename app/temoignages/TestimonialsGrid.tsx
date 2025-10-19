
'use client';

import { useState } from 'react';

export default function TestimonialsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const categories = [
    { id: 'tous', label: 'Tous les témoignages' },
    { id: 'permis-b', label: 'Permis B' },
    { id: 'permis-moto', label: 'Permis Moto' },
    { id: 'permis-poids-lourd', label: 'Poids Lourd' },
    { id: 'formation-acceleree', label: 'Formation Accélérée' }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Martinez",
      age: 28,
      location: "Paris",
      category: "permis-b",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20woman%20with%20brown%20hair%20smiling%20confidently%2C%20modern%20business%20casual%20attire%2C%20bright%20studio%20lighting%2C%20clean%20background%2C%20high%20quality%20headshot%20photography&width=300&height=300&seq=client-1&orientation=squarish",
      text: "Service exceptionnel ! J'ai obtenu mon permis B en seulement 3 mois grâce à leur suivi personnalisé. L'équipe est très professionnelle et toujours disponible pour répondre aux questions.",
      date: "Mars 2024",
      details: "Permis B obtenu du premier coup"
    },
    {
      id: 2,
      name: "Thomas Dubois",
      age: 35,
      location: "Lyon",
      category: "permis-moto",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20middle-aged%20man%20with%20beard%20smiling%20warmly%2C%20casual%20shirt%2C%20bright%20natural%20lighting%2C%20clean%20background%2C%20confident%20expression%2C%20high%20quality%20photography&width=300&height=300&seq=client-2&orientation=squarish",
      text: "Après plusieurs échecs ailleurs, j'ai enfin réussi mon permis moto A2 grâce à leur méthode. Les moniteurs sont patients et pédagogues. Je recommande vivement !",
      date: "Février 2024",
      details: "Permis A2 - Formation intensive"
    },
    {
      id: 3,
      name: "Marie Leclerc",
      age: 42,
      location: "Marseille",
      category: "formation-acceleree",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20mature%20woman%20with%20blonde%20hair%20smiling%20professionally%2C%20elegant%20business%20attire%2C%20soft%20studio%20lighting%2C%20clean%20background%2C%20confident%20pose&width=300&height=300&seq=client-3&orientation=squarish",
      text: "Formation accélérée parfaite pour mon emploi du temps chargé. En 15 jours intensifs, j'avais mon permis ! Organisation impeccable et résultats garantis.",
      date: "Janvier 2024",
      details: "Formation accélérée 15 jours"
    },
    {
      id: 4,
      name: "Antoine Bernard",
      age: 24,
      location: "Toulouse",
      category: "permis-b",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20man%20with%20dark%20hair%20smiling%20genuinely%2C%20modern%20casual%20shirt%2C%20bright%20studio%20lighting%2C%20clean%20background%2C%20friendly%20expression&width=300&height=300&seq=client-4&orientation=squarish",
      text: "Interface en ligne très intuitive, suivi en temps réel de ma progression. J'ai pu m'organiser facilement entre mes cours et le travail. Excellent service client !",
      date: "Avril 2024",
      details: "Permis B - Cours en ligne"
    },
    {
      id: 5,
      name: "Camille Rousseau",
      age: 31,
      location: "Nantes",
      category: "permis-poids-lourd",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20woman%20with%20short%20hair%20smiling%20confidently%2C%20work%20uniform%20or%20casual%20professional%20attire%2C%20bright%20lighting%2C%20clean%20background%2C%20determined%20expression&width=300&height=300&seq=client-5&orientation=squarish",
      text: "Reconversion professionnelle réussie grâce au permis C que j'ai obtenu avec leur aide. Formation complète et accompagnement jusqu'à l'emploi. Parfait !",
      date: "Mars 2024",
      details: "Permis C - Reconversion pro"
    },
    {
      id: 6,
      name: "Lucas Moreau",
      age: 26,
      location: "Bordeaux",
      category: "permis-moto",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20man%20with%20casual%20style%20smiling%20warmly%2C%20modern%20clothing%2C%20natural%20lighting%2C%20clean%20background%2C%20approachable%20expression&width=300&height=300&seq=client-6&orientation=squarish",
      text: "Mon rêve de conduire une grosse moto s'est enfin réalisé ! Permis A obtenu rapidement avec des moniteurs passionnés qui transmettent leur amour de la moto.",
      date: "Février 2024",
      details: "Permis A - Grosses cylindrées"
    },
    {
      id: 7,
      name: "Emma Petit",
      age: 19,
      location: "Lille",
      category: "permis-b",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20woman%20with%20long%20hair%20smiling%20brightly%2C%20casual%20modern%20attire%2C%20bright%20studio%20lighting%2C%20clean%20background%2C%20youthful%20energy&width=300&height=300&seq=client-7&orientation=squarish",
      text: "Premier permis, première expérience avec une auto-école et c'était parfait ! Ambiance détendue, explications claires, j'ai eu mon permis du premier coup à 19 ans.",
      date: "Mai 2024",
      details: "Permis B - Premier essai réussi"
    },
    {
      id: 8,
      name: "Pierre Lambert",
      age: 45,
      location: "Strasbourg",
      category: "formation-acceleree",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20middle-aged%20man%20with%20graying%20hair%20smiling%20professionally%2C%20business%20casual%20attire%2C%20soft%20lighting%2C%20clean%20background%2C%20mature%20confidence&width=300&height=300&seq=client-8&orientation=squarish",
      text: "À 45 ans, j'ai enfin passé mon permis grâce à leur formation adaptée aux adultes. Patience, respect et professionnalisme. Merci pour cette belle expérience !",
      date: "Avril 2024",
      details: "Formation adulte - Seconde chance"
    }
  ];

  const filteredTestimonials = selectedCategory === 'tous' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des milliers de personnes nous font confiance chaque année pour obtenir leur permis de conduire
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grille des témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              {/* En-tête avec photo et infos */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.age} ans • {testimonial.location}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm"></i>
                  ))}
                </div>
              </div>

              {/* Badge de catégorie */}
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  {testimonial.details}
                </span>
              </div>

              {/* Témoignage */}
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Date */}
              <div className="text-sm text-gray-500 flex items-center">
                <i className="ri-calendar-line mr-2"></i>
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Rejoignez Nos Clients Satisfaits
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Commencez votre formation dès aujourd'hui et obtenez votre permis rapidement
            </p>
            <button 
              onClick={() => window.location.href = '/#formulaire'}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Commencer Ma Formation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
