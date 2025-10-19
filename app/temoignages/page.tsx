
'use client';

import Link from 'next/link';
import TestimonialsHero from './TestimonialsHero';
import TestimonialsGrid from './TestimonialsGrid';
import TestimonialsStats from './TestimonialsStats';
import Footer from '../../components/Footer';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 w-full">
        <div className="w-full px-6">
          <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
            <Link href="/" className="text-2xl font-bold text-gray-900 cursor-pointer" style={{ fontFamily: 'Pacifico, serif' }}>
              logo
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Accueil
              </Link>
              <Link href="/temoignages" className="text-blue-600 font-medium cursor-pointer">
                Témoignages
              </Link>
              <Link href="/partenaires" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
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

      <TestimonialsHero />
      <TestimonialsStats />
      <TestimonialsGrid />
      <Footer />
    </div>
  );
}
