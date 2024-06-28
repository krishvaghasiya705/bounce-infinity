import React from 'react';
import Herobanner from './HerobannerHome';
import OurProductSectionHome from './OurProductSectionHome';
import ComparisonSectionHome from './ComparisonSectionHome';
import PricingSectionHome from './PricingSectionHome';
import DealershipSectionHome from './DealershipSectionHome';
import EmiCalculatorSectionHome from './EmiCalculatorSectionHome';
import PortableBatterySectionHome from './PortableBatterySectionHome';
import ClientReviewSliderSectionHome from './ClientReviewSliderSectionHome';
import Faq from "../../common/faq"
import PressStatementSectionHome from './PressStatementSectionHome';

export default function Home() {

  return (
    <div>

      <Herobanner />
      <OurProductSectionHome />
      <ComparisonSectionHome />
      <PricingSectionHome />
      <DealershipSectionHome />
      <EmiCalculatorSectionHome />
      <PortableBatterySectionHome />
      <ClientReviewSliderSectionHome />
      <Faq />
      <PressStatementSectionHome />

    </div>
  );
}
