
'use client';

import Link from 'next/link';
import FinancingHero from './FinancingHero';
import FinancingOptions from './FinancingOptions';
import CarDeals from './CarDeals';
import LoanSimulator from './LoanSimulator';
import FinancingForm from './FinancingForm';

export default function FinancingPage() {
  return (
    <div>
      <FinancingHero />
      <FinancingOptions />
      <LoanSimulator />
      <CarDeals />
      <FinancingForm />
    </div>
  );
}
