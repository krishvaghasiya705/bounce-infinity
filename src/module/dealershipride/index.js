import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./dealersshipride.scss";
import Footer from "../../common/footer";
import Headerone from "../../common/headerone"
import herobanner from "../../assets/dealershipimage/dealershipherobanner.png"
import halfscooter from "../../assets/dealershipimage/halfscooter.png";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoGrid } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import scooteroneride from "../../assets/dealershiprideimage/scooteroneride.png"
import scootertworide from "../../assets/dealershiprideimage/scootertworide.png"
import { FaMapMarkerAlt } from "react-icons/fa";
import esscooter from "../../assets/dealershipimage/E1 SPORTY RED 3.png";

export default function Dealershipride() {


    const [div1Visible, setDiv1Visible] = useState(true);
    const [div2Visible, setDiv2Visible] = useState(false);

    const toggleDiv1 = () => {
        setDiv1Visible(true);
        setDiv2Visible(false);
    };

    const toggleDiv2 = () => {
        if (!div2Visible) {
            setDiv1Visible(false);
            setDiv2Visible(true);
        }
    };

    const [activeGroup1, setActiveGroup1] = useState(2);
    const [activeGroup2, setActiveGroup2] = useState(4);

    const handleClickGroup1 = (buttonNumber) => {
        setActiveGroup1(buttonNumber);
    };

    const handleClickGroup2 = (buttonNumber) => {
        setActiveGroup2(buttonNumber);
    };

    return (
        <div>


            <Headerone />












            <div className="dealer-ship-hero-banner-main">
                <img src={herobanner} alt="herobanner" />
                <div className="dealer-ship-sc-clr"></div>
                <div className="dealer-ship-title-main">
                    <h1>Bounce infinity dealers in Delhi</h1>
                    <p>Visit the nearby dealer to test ride and buy the new infinity E.1+</p>
                </div>
            </div>




            <div className="dealership-ride-main">
                <div className="dealership-ride-container">
                    <div className="dealership-ride-inp-bttn">

                        <div className="dealership-ride-inp">
                            <input type="text" placeholder="Delhi" />
                            <p>
                                <PiMagnifyingGlassBold />
                            </p>
                        </div>

                        <div className="toggle-button-main">
                            <button onClick={toggleDiv1} className={div1Visible ? 'active' : ''}>
                                <p><IoGrid /></p>
                                {div1Visible ? 'Grid View' : 'Grid View'}
                            </button>

                            <button onClick={toggleDiv2} className={div2Visible ? 'active' : ''}>
                                <p><SiGooglemaps /></p>
                                {div2Visible ? 'Shop Map' : 'Shop Map'}
                            </button>
                        </div>
                    </div>

                    {div1Visible && (
                        <div>
                            <div className="dealership-state-title">
                                <h1>Dealership in Delhi</h1>
                            </div>
                            <div className="cards-main-flx">


                                <div className="card-ride-box-one">
                                    <div className="scooter-crd-img-main">
                                        <img src={scooteroneride} alt="scooteroneride" />
                                    </div>
                                    <div className="card-ride-details-main">
                                        <h2>Bounce Infinity Electric Scooter (Jangra Automobiles)</h2>
                                        <p><span><FaMapMarkerAlt /></span>WZ-182, Jangra Batteries, Palam Village,
                                            Delhi, Delhi, 110045</p>
                                        <div className="details-button-div-flx-main">
                                            <Link to={"/Dealershipdetail"}>
                                                <button onClick={() => handleClickGroup1(1)} className={activeGroup1 === 1 ? 'active' : ''}>View Detail</button>
                                            </Link>
                                            <button onClick={() => handleClickGroup1(2)} className={activeGroup1 === 2 ? 'active' : ''}>Book a Testride</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-ride-box-one">
                                    <div className="scooter-crd-img-main">
                                        <img src={scootertworide} alt="scootertworide" />
                                    </div>
                                    <div className="card-ride-details-main">
                                        <h2>Bounce Infinity Electric Scooter (Jangra Automobiles)</h2>
                                        <p><span><FaMapMarkerAlt /></span>WZ-182, Jangra Batteries, Palam Village,
                                            Delhi, Delhi, 110045</p>
                                        <div className="details-button-div-flx-main">
                                            <Link to={"/Dealershipdetail"}>
                                                <button onClick={() => handleClickGroup2(3)} className={activeGroup2 === 3 ? 'active' : ''}>View Detail</button>
                                            </Link>
                                            <button onClick={() => handleClickGroup2(4)} className={activeGroup2 === 4 ? 'active' : ''}>Book a Testride</button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )}

                    {div2Visible && (
                        <div className="iframe-div-main">
                            <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2646888957643!2d-79.39355380833149!3d43.64266109581092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d034de1ea5%3A0x179beb81d9aa1511!2sEntertainment%20District%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1715084083390!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iFrame>
                        </div>
                    )}
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
