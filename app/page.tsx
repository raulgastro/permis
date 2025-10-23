
'use client';

import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import FormSection from '../components/FormSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ServicesSection />
      <FormSection />
    </div>
  );
}
