
'use client';

export default function TestimonialsHero() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.9), rgba(59, 130, 246, 0.8)), url('https://readdy.ai/api/search-image?query=Happy%20diverse%20group%20of%20people%20celebrating%20success%20with%20driving%20licenses%2C%20modern%20driving%20school%20environment%2C%20bright%20lighting%2C%20professional%20photography%2C%20people%20smiling%20and%20holding%20certificates%2C%20achievement%20atmosphere%2C%20contemporary%20setting&width=1920&height=800&seq=testimonials-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Témoignages de Nos Clients
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Découvrez les expériences réelles de milliers de personnes qui ont obtenu leur permis avec notre aide
        </p>
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill text-2xl"></i>
            ))}
          </div>
          <span className="text-xl font-semibold ml-2">4.9/5</span>
          <span className="text-lg opacity-90">• Plus de 15,000 avis</span>
        </div>
      </div>
    </section>
  );
}
