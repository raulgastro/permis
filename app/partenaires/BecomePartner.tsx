
'use client';

export default function BecomePartner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Devenir Partenaire
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Rejoignez notre réseau d'excellence et développez votre activité avec nous
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <i className="ri-user-add-line text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Candidature</h3>
            <p className="opacity-90">Soumettez votre dossier de candidature en ligne</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <i className="ri-search-line text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Évaluation</h3>
            <p className="opacity-90">Audit de vos installations et méthodes de formation</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <i className="ri-handshake-line text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Partenariat</h3>
            <p className="opacity-90">Signature et intégration dans notre réseau</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Candidater Maintenant
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
            Télécharger le Dossier
          </button>
        </div>
      </div>
    </section>
  );
}
