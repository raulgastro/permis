"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 w-full">
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/favicon.png"
              alt="Permis Plus Logo"
              width={170}
              height={50}
              className="rounded-full"
            />
            <span
              className="text-2xl font-bold text-gray-900"
              style={{ fontFamily: "Pacifico, serif" }}
            >
              Permis Plus
            </span>
          </Link>

          {/* Liens de navigation (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <Link href="/temoignages" className="text-gray-700 hover:text-blue-600 transition-colors">
              Témoignages
            </Link>
            <Link href="/partenaires" className="text-gray-700 hover:text-blue-600 transition-colors">
              Partenaires
            </Link>
            <Link href="/financement" className="text-gray-700 hover:text-blue-600 transition-colors">
              Financement Auto
            </Link>
            <Link
              href="/#formulaire"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Faire une Demande
            </Link>
          </div>

          {/* Bouton Burger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/temoignages" onClick={() => setIsOpen(false)}>
                Témoignages
              </Link>
            </li>
            <li>
              <Link href="/partenaires" onClick={() => setIsOpen(false)}>
                Partenaires
              </Link>
            </li>
            <li>
              <Link href="/financement" onClick={() => setIsOpen(false)}>
                Financement Auto
              </Link>
            </li>
            <li>
              <Link
                href="/#formulaire"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Faire une Demande
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
