
'use client';

export default function FinancingForm() {
  return (
    <section id="demande-financement" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Demande de Financement
          </h2>
          <p className="text-xl text-gray-600">
            Remplissez ce formulaire pour obtenir une réponse de principe en 24h
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <form id="financing-form" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="prenom"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="telephone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Montant souhaité *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="montant"
                    required
                    min="5000"
                    max="75000"
                    placeholder="25000"
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">€</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durée souhaitée *
                </label>
                <select
                  name="duree"
                  required
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Choisir</option>
                  <option value="12">12 mois</option>
                  <option value="24">24 mois</option>
                  <option value="36">36 mois</option>
                  <option value="48">48 mois</option>
                  <option value="60">60 mois</option>
                  <option value="72">72 mois</option>
                  <option value="84">84 mois</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apport personnel
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="apport"
                    min="0"
                    placeholder="0"
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">€</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Revenus mensuels nets *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="revenus"
                    required
                    min="1000"
                    placeholder="3000"
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">€</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Situation professionnelle *
                </label>
                <select
                  name="situation"
                  required
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Choisir</option>
                  <option value="cdi">CDI</option>
                  <option value="cdd">CDD</option>
                  <option value="interim">Intérim</option>
                  <option value="independant">Indépendant</option>
                  <option value="fonctionnaire">Fonctionnaire</option>
                  <option value="retraite">Retraité</option>
                  <option value="etudiant">Étudiant</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de véhicule recherché
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Citadine', 'Compacte', 'Berline', 'SUV', 'Monospace', 'Utilitaire', 'Moto', 'Autre'].map((type) => (
                  <label key={type} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="type-vehicule"
                      value={type.toLowerCase()}
                      className="mr-2 rounded text-green-600 focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Informations complémentaires
              </label>
              <textarea
                name="commentaires"
                rows={4}
                maxLength={500}
                placeholder="Précisez vos besoins, marque préférée, délai souhaité..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              ></textarea>
              <div className="text-sm text-gray-500 mt-1">Maximum 500 caractères</div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="acceptation"
                required
                className="mr-3 mt-1 rounded text-green-600 focus:ring-green-500"
              />
              <label className="text-sm text-gray-700 leading-relaxed">
                J'accepte d'être contacté par téléphone et email pour le suivi de ma demande de financement et je confirme avoir pris connaissance de la politique de confidentialité. *
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg text-lg font-bold transition-colors cursor-pointer whitespace-nowrap"
              >
                Envoyer Ma Demande
              </button>
              <div className="text-sm text-gray-500 mt-4">
                Réponse de principe sous 24h • Sans engagement • Gratuit
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
