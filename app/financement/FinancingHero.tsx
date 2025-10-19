
'use client';

export default function FinancingHero() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.9), rgba(59, 130, 246, 0.8)), url('https://readdy.ai/api/search-image?query=Happy%20family%20receiving%20car%20keys%20from%20dealer%2C%20modern%20car%20showroom%20background%2C%20bright%20lighting%2C%20successful%20car%20purchase%20moment%2C%20professional%20automotive%20dealership%20environment%2C%20celebration%20and%20satisfaction%20atmosphere&width=1920&height=800&seq=financing-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Financement Auto à Coût Réduit
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Obtenez votre véhicule rapidement avec nos solutions de financement avantageuses et nos partenaires automobiles de confiance
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <i className="ri-percent-line text-3xl mb-2"></i>
            <div className="text-2xl font-bold">Taux à partir de 2.9%</div>
            <div className="text-sm opacity-90">TAEG fixe</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <i className="ri-time-line text-3xl mb-2"></i>
            <div className="text-2xl font-bold">Réponse en 24h</div>
            <div className="text-sm opacity-90">Accord de principe</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <i className="ri-money-euro-circle-line text-3xl mb-2"></i>
            <div className="text-2xl font-bold">Jusqu'à 75,000€</div>
            <div className="text-sm opacity-90">Montant finançable</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('simulateur')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
          >
            Simuler Mon Crédit
          </button>
          <button 
            onClick={() => document.getElementById('voitures')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
          >
            Voir les Offres Auto
          </button>
        </div>
      </div>
    </section>
  );
}
