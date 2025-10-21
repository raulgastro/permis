
'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center space-x-3">
              {/* Logo */}
              <img src="/footer.png" alt="Logo Permis Plus" className="h-12 w-auto" />
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Pacifico, serif' }}>
                Permis Plus
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour obtenir tous types de permis de conduire. 
              Nous simplifions vos démarches avec une interface moderne et un service personnalisé.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-400 hover:bg-blue-500 rounded-full transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-700 hover:bg-blue-800 rounded-full transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-colors cursor-pointer">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Permis B</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Permis A/A2</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Permis C/D</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Permis AM</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Formation accélérée</a></li>
            </ul>
          </div>

          {/* Navigation et Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <div className="space-y-4">
              <div>
                <a href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer block mb-2">Accueil</a>
                <a href="/temoignages" className="text-gray-300 hover:text-white transition-colors cursor-pointer block mb-2">Témoignages</a>
                <a href="/partenaires" className="text-gray-300 hover:text-white transition-colors cursor-pointer block mb-2">Partenaires</a>
                <a href="/financement" className="text-gray-300 hover:text-white transition-colors cursor-pointer block mb-4">Financement Auto</a>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-blue-400 mr-3"></i>
                <span className="text-gray-300">01 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line text-blue-400 mr-3"></i>
                <span className="text-gray-300">contact@permis-facile.fr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Permis Facile. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">CGU</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
