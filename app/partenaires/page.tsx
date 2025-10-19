
'use client';

import Link from 'next/link';
import PartnersHero from './PartnersHero';
import PartnersGrid from './PartnersGrid';
import PartnershipBenefits from './PartnershipBenefits';
import BecomePartner from './BecomePartner';
import Footer from '../../components/Footer';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900 cursor-pointer" style={{ fontFamily: 'Pacifico, serif' }}>
              logo
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Accueil
              </Link>
              <Link href="/temoignages" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Témoignages
              </Link>
              <Link href="/partenaires" className="text-blue-600 font-medium cursor-pointer">
                Partenaires
              </Link>
              <Link href="/financement" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Financement Auto
              </Link>
              <Link href="/#formulaire" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                Faire une Demande
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <PartnersHero />
      <PartnersGrid />
      <PartnershipBenefits />
      <BecomePartner />
      <Footer />
    </div>
  );
}
