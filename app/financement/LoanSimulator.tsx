
'use client';

import { useState } from 'react';

export default function LoanSimulator() {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [duration, setDuration] = useState(60);
  const [interestRate] = useState(4.5);

  const monthlyPayment = (loanAmount * (interestRate / 100 / 12)) / (1 - Math.pow(1 + (interestRate / 100 / 12), -duration));
  const totalCost = monthlyPayment * duration;
  const totalInterest = totalCost - loanAmount;

  return (
    <section id="simulateur" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simulateur de Crédit Auto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculez instantanément votre mensualité et le coût total de votre financement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Formulaire de simulation */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Paramètres du Crédit</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Montant à financer
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="5000"
                    max="75000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5,000€</span>
                    <span>75,000€</span>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-2xl font-bold text-green-600">{loanAmount.toLocaleString()}€</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durée du prêt (mois)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="12"
                    max="84"
                    step="12"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>12 mois</span>
                    <span>84 mois</span>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-2xl font-bold text-green-600">{duration} mois</span>
                  <span className="text-gray-500 ml-2">({Math.round(duration/12)} ans)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Taux d'intérêt annuel
                </label>
                <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center">
                  <span className="text-xl font-bold">{interestRate}% TAEG</span>
                  <div className="text-sm">Taux préférentiel sous conditions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Résultats de simulation */}
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Résultats de Votre Simulation</h3>
            
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-sm opacity-90 mb-1">Mensualité</div>
                <div className="text-4xl font-bold">{monthlyPayment.toFixed(0)}€</div>
                <div className="text-sm opacity-90">par mois</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-sm opacity-90 mb-1">Coût total</div>
                  <div className="text-2xl font-bold">{totalCost.toFixed(0)}€</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-sm opacity-90 mb-1">Intérêts</div>
                  <div className="text-2xl font-bold">{totalInterest.toFixed(0)}€</div>
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('demande-financement')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-white text-green-600 hover:bg-gray-100 py-4 px-6 rounded-lg font-bold text-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Faire Ma Demande
              </button>

              <div className="text-center text-sm opacity-90">
                * Simulation à titre indicatif. Offre soumise à l'étude de votre dossier.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
