import React, { useState } from 'react';
import "./BookTestRideSection.scss";
import magnify from "../../../assets/testrideimage/maginfine.png"

const locations = ["Delhi", "Bangalore", "Hyderabad", "Jaipur", "Mumbai", "Vijayawada"];

function BookTestRideSection() {
    const [search, setSearch] = useState("");
    return (
        <div>
            <div className="book-ride-section-main">
                <div className="book-ride-section-container">
                    <div className="book-ride-box-back-main">
                        <div>
                            <div className="book-test-ride-title">
                                <h1>Book A Test Ride Today</h1>
                            </div>
                            <div className="experience-pera-main">
                                <p>Experience the Bounce Infinity at your doorstep.</p>
                            </div>
                            <div className="test-ride-box-inner-input">
                                <input
                                    type="text"
                                    placeholder='Search'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <img src={magnify} alt="magnify" />
                            </div>
                            <div className="test-drive-loaction-boxes-main">
                                {locations.map(location => (
                                    <button key={location} type="submit">{location}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookTestRideSection;