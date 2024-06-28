import React, { useState } from 'react';
import "./DealerShipSelectionSection.scss";
import sidearrrone from "../../../assets/testrideimage/sidearrone.png";
import locatinone from "../../../assets/testrideimage/locationone.png";
import phoneone from "../../../assets/testrideimage/phoneone.png";
import sidearrrtow from "../../../assets/testrideimage/sidearrowtwo.png";
import locatintwo from "../../../assets/testrideimage/locationtwo.png";
import phonetwo from "../../../assets/testrideimage/phonetwo.png";

const dealerships = [
    {
        title: "Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)",
        address: "9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar",
        phone: "+91 97569 64787"
    },
    {
        title: "Bounce Infinity Electric Scooter (Happy Ride's - Whitefield)",
        address: "23, Whitefield Main Road, near Forum Value Mall, Whitefield",
        phone: "+91 98562 12345"
    },
    {
        title: "Bounce Infinity Electric Scooter (Happy Ride's - Koramangala)",
        address: "56, 7th Block, Koramangala, near BDA Complex, Koramangala",
        phone: "+91 96574 85213"
    },
    {
        title: "Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)",
        address: "9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar",
        phone: "+91 97569 64787"
    },
    {
        title: "Bounce Infinity Electric Scooter (Happy Ride's - Whitefield)",
        address: "23, Whitefield Main Road, near Forum Value Mall, Whitefield",
        phone: "+91 98562 12345"
    },
    {
        title: "Bounce Infinity Electric Scooter (Happy Ride's - Koramangala)",
        address: "56, 7th Block, Koramangala, near BDA Complex, Koramangala",
        phone: "+91 96574 85213"
    },
];

const DealershipSelection = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const loadMoreDealerships = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <div className="dealer-ship-selction-section-main">
            <div className="dealer-ship-selction-container">
                <div className="dealer-ship-box-title-main">
                    <h3>Please Select a dealership</h3>
                </div>
                <div className="dealer-ship-selcetion-box-section-main">
                    {dealerships.slice(0, visibleCount).map((dealer, index) => (
                        <div className="dealer-ship-box-one" key={index}>
                            <div className="dealer-title-flx-main">
                                <h4>{dealer.title}</h4>
                                <img src={sidearrrtow} alt="Side arrow two" />
                                <div className="side-hv">
                                    <img src={sidearrrone} alt="Side arrow one" />
                                </div>
                            </div>
                            <div className="location-dealer-flx-main">
                                <img src={locatintwo} alt="Location two" />
                                <div className="loc-hv">
                                    <img src={locatinone} alt="Location one" />
                                </div>
                                <p>{dealer.address}</p>
                            </div>
                            <div className="phone-dealer-ship-flx-main">
                                <img src={phonetwo} alt="Phone two" />
                                <div className="phon-hv">
                                    <img src={phoneone} alt="Phone one" />
                                </div>
                                <span>{dealer.phone}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleCount < dealerships.length && (
                    <div className="show-more-nn">
                        <div className="show-more-div">
                            <button onClick={loadMoreDealerships}>Show more</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DealershipSelection;
