
'use client';

import Link from 'next/link';
import PartnersHero from './PartnersHero';
import PartnersGrid from './PartnersGrid';
import PartnershipBenefits from './PartnershipBenefits';
import BecomePartner from './BecomePartner';

export default function PartnersPage() {
  return (
    <div>
      <PartnersHero />
      <PartnersGrid />
      <PartnershipBenefits />
      <BecomePartner />
    </div>
  );
}
