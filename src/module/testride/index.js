import React from 'react';
import TestRideHerobanner from './TestRideHerobanner';
import BookTestRideSection from './BookTestRideSection';
import TestRideBoxSection from './TestRideBoxSection';
import TestRideDetailsFillUpSection from './TestRideDetailsFillUpSection';
import DealerShipSelectionSection from './DealerShipSelectionSection';
import TestRideSelectionSection from './TestRideSelectionSection';
import FaqTestRideSection from './FaqTestRideSection';


export default function Testride() {

    return (
        <div>
            <TestRideHerobanner />
            <BookTestRideSection />
            <TestRideBoxSection />
            <TestRideDetailsFillUpSection />
            <DealerShipSelectionSection />
            <TestRideSelectionSection />
            <FaqTestRideSection />

        </div>
    )
}
