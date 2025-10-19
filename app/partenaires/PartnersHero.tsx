
'use client';

export default function PartnersHero() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20business%20handshake%20between%20partners%2C%20modern%20office%20environment%2C%20corporate%20partnership%20meeting%2C%20bright%20lighting%2C%20professional%20attire%2C%20success%20and%20collaboration%20atmosphere%2C%20contemporary%20business%20setting&width=1920&height=800&seq=partners-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Nos Partenaires de Confiance
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Découvrez notre réseau de partenaires qui nous permettent d'offrir les meilleurs services de formation au permis de conduire
        </p>
        <div className="flex items-center justify-center space-x-8 text-lg">
          <div className="flex items-center">
            <i className="ri-shield-check-line text-3xl mr-3"></i>
            <span>Partenaires Certifiés</span>
          </div>
          <div className="flex items-center">
            <i className="ri-global-line text-3xl mr-3"></i>
            <span>Réseau National</span>
          </div>
          <div className="flex items-center">
            <i className="ri-award-line text-3xl mr-3"></i>
            <span>Excellence Garantie</span>
          </div>
        </div>
      </div>
    </section>
  );
}
