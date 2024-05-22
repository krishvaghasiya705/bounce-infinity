import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./dealership.scss";
import Headerone from "../../common/headerone"
import Footer from "../../common/footer";
import halfscooter from "../../assets/dealershipimage/halfscooter.png";
import herobanner from "../../assets/dealershipimage/dealershipherobanner.png"
import magnify from "../../assets/testrideimage/maginfine.png"
import scootergroup from "../../assets/dealershipimage/scootergroup.png";
import home from "../../assets/dealershipimage/home.png";
import locationh from "../../assets/dealershipimage/location.png";
import esscooter from "../../assets/dealershipimage/E1 SPORTY RED 3.png";

export default function Dealership() {




    useEffect(() => {
        const handleUrlChange = () => {
            window.location.reload();
        };

        window.addEventListener('popstate', handleUrlChange);

        return () => {
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, []);

    return (
        <div>




            <Headerone />







            <div className="dealer-ship-hero-banner-main">
                <img src={herobanner} alt="herobanner" />
            </div>



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
                                <input type="text" placeholder='Search' />
                                <img src={magnify} alt="magnify" />
                            </div>
                            <div className="test-drive-loaction-boxes-main">
                                <button type="submit">Delhi</button>
                                <button type="submit">Bangalore</button>
                                <button type="submit">Hyderabad</button>
                                <button type="submit">Jaipur</button>
                                <button type="submit">Mumbai</button>
                                <button type="submit">Vijayawada</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="partner-section-mian">
                <div className="scooter-group-back">
                    <div className="scooter-group-image">
                        <img src={scootergroup} alt="scootergroup" />
                    </div>
                </div>
                <div className="partener-div">
                    <div className="partner-title">
                        <h1>60+ partners across India</h1>
                    </div>
                    <div className="experience-pera">
                        <p>Experience India’s 1st electric scooter with removable batteries</p>
                    </div>
                    <div className="exclusive-list-main">
                        <span></span>
                        <small>Exclusive offers at dealerships</small>
                    </div>
                    <div className="exclusive-list-main">
                        <span></span>
                        <small>Instant loan approvals available</small>
                    </div>
                    <div className="book-button-main">
                        <Link to={"/Dealershipride"}>
                            <button type="submit">Book a Test Ride</button>
                        </Link>
                    </div>
                </div>
            </div>



            <div className="bring-home-section-noti-main">
                <div className="bring-home-container">
                    <div className="bring-home-box-inner-flx-main">
                        <div className="bring-home-title-box-main">
                            <h1>Bring home the Infinity E.1+</h1>
                            <p>Test ride the Infinity E.1+ at your convenience, in any of our stores.</p>
                        </div>
                        <div className="home-box-main">
                            <div className="home-circle-main">
                                <img src={home} alt="home" />
                            </div>
                            <div className="dealer-ship-exp-main">
                                <h1>60+</h1>
                                <p>Dealerships & experience centers</p>
                            </div>
                        </div>
                        <div className="location-box-main">
                            <div className="location-cicrle-main">
                                <img src={locationh} alt="locationh" />
                            </div>
                            <div className="cities-box-main">
                                <h1>100+</h1>
                                <p>cities across India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="subscribe-box-main">
                <div className="sub-box-container">
                    <div className="sub-box-back-main">
                        <div className="sub-box-inner-main">
                            <h2>Subscribe & be the first to get updates</h2>
                            <div className="input-box-two">
                                <input type="number" placeholder='Enter you Phone no' />
                                <select>
                                    <option value="1">+91</option>
                                    <option value="2">+92</option>
                                    <option value="3">+93</option>
                                </select>
                            </div>
                            <button type="submit">Subscribe</button>
                        </div>
                        <div className="half-scooter-main">
                            <img src={halfscooter} alt="halfscooter" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="subscribe-box-mobile">
                <div className="subscribe-box-mobile-main">
                    <div className="es-scooter-mobile-main">
                        <img src={esscooter} alt="esscooter" />
                    </div>
                    <div className="subscribe-mobile-title">
                        <h2>Subscribe & be the first to get updates</h2>
                    </div>
                    <div className="input-box-three">
                        <input type="number" placeholder='Enter you Phone no' />
                        <select>
                            <option value="1">+91</option>
                            <option value="2">+92</option>
                            <option value="3">+93</option>
                        </select>
                    </div>
                    <button type="submit">Subscribe</button>
                </div>
            </div>

            <Footer />







        </div>
    )
}
