import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./dealersshipride.scss"
import herobanner from "../../assets/dealershipimage/dealershipherobanner.png"
import halfscooter from "../../assets/dealershipimage/halfscooter.png";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoGrid } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import scooteroneride from "../../assets/dealershiprideimage/scooteroneride.png"
import scootertworide from "../../assets/dealershiprideimage/scootertworide.png"
import { FaMapMarkerAlt } from "react-icons/fa";
import logoh from "../../assets/image/logo (1) 2.png"
import { IoChevronDown } from "react-icons/io5";
import hamburger from "../../assets/headerimage/hamburger.png";
import mobilelogo from "../../assets/headerimage/headerlogo2.png";
import { RiCloseFill } from "react-icons/ri";
import logo from "../../assets/footerimage/logo.png";
import locationf from "../../assets/footerimage/location.png";
import phone from "../../assets/footerimage/telephone.png";
import mail from "../../assets/footerimage/email.png";
import copyright from "../../assets/footerimage/copyright.png";
import esscooter from "../../assets/dealershipimage/E1 SPORTY RED 3.png";

export default function Dealershipride() {


    const [div1Visible, setDiv1Visible] = useState(true); // Set div1Visible to true by default
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


    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const location = useLocation();

    const topRef = useRef(null);

    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div ref={topRef}>


            <header className="header" ref={topRef}>
                <div className="header-main">
                    <div className="header-container">
                        <div className="header-contant">
                            <div className="header-contant-logo">
                                <Link to={"/"}>
                                    <img src={logoh} alt="logoh" />
                                </Link>
                            </div>
                            <div className="header-contant-menu">
                                <div className="header-contant-menu-ancer">
                                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                        <p>Home</p>
                                        <div className="hover-brd-cls"></div>
                                    </Link>
                                </div>
                                <div className="header-contant-menu-ancer">
                                    <Link to="/Testride" className={location.pathname === '/Testride' ? 'active' : ''}>
                                        <p>Test Ride</p>
                                        <div className="hover-brd-cls"></div>
                                    </Link>
                                </div>
                                <div className="header-contant-menu-ancer">
                                    <Link id="dropdown-id-main-sc" to="/Dealership" className={location.pathname === '/Dealership' || location.pathname === '/Dealershipride' ? 'active' : ''}>
                                        <p>Dealerships</p>
                                        <span><IoChevronDown /></span>

                                        <div className="drop-down-box-main">
                                            <div className="drop-down-contant-box">
                                                <div className="dropdown-contant-inner-box-one">
                                                    <div className="dropdown-contant-text">
                                                        <Link to={"/Dealershipride"}>Book Ride</Link>
                                                    </div>
                                                    <div className="dropdown-contant-text">
                                                        <Link to={"/Dealershipdetail"}>Ride Detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="header-contant-menu-ancer">
                                    <Link id="dropdown-id-main-sc" to={"/Financial"}>
                                        <a href="home">Pages</a>
                                        <span><IoChevronDown /></span>

                                        <div className="drop-down-box-main">
                                            <div className="drop-down-contant-box">
                                                <div className="dropdown-contant-inner-box-one">
                                                    <div className="dropdown-contant-text">
                                                        <Link to={"/Financial"}>Financial</Link>
                                                    </div>
                                                    <div className="dropdown-contant-text">
                                                        <Link to={"/Socialmedia"}>Social Media</Link>
                                                    </div>
                                                    <div className="dropdown-contant-text">
                                                        <Link to={"/Socialmediadetails"}>Social Media details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="header-contant-menu-ancer">
                                <Link to={"/Pricing"}>
                                    <p>Pricing</p>
                                    <div className="hover-brd-cls"></div>
                                </Link>
                                </div>
                                <div className="header-contant-menu-ancer">
                                    <Link to={"/Contact"} className={location.pathname === '/Contact' ? 'active' : ''}>
                                        <p>Contact Us</p>
                                        <div className="hover-brd-cls"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>




            <div className="header-mobile-main" >
                <div className="mobile-header-div-ineer">
                    <div className="hamburger-div">
                        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                            <p className="close" onClick={closeSidebar}><RiCloseFill /></p>
                            <ul>
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/Testride"}>Test Ride</Link>
                                </li>
                                <li>
                                    <Link to={"/Dealership"}>Dealerships</Link>
                                </li>
                                <li>
                                    <a href="home">Pages</a>
                                </li>
                                <li>
                                    <a href="home">Pricing</a>
                                </li>
                                <li>
                                    <a href="home">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <span className='span' onClick={toggleSidebar}>
                            <img src={hamburger} alt="hamburger" />
                        </span>
                    </div>
                    <div className="mobile-logo">
                        <Link to={"/"}>
                            <img src={mobilelogo} alt="mobilelogo" />
                        </Link>
                    </div>
                </div>
            </div>












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









            <footer>
                <div className="footer-container">
                    <div className="footer-containt">
                        <div className="footer-contant-pera">
                            <Link to={"/"}>
                                <img src={logo} alt="logo" />
                            </Link>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="footer-contant-link">
                            <a href="home">Useful Links</a>
                            <Link to={"/Testride"}>Test Ride</Link>
                            <Link to={"/Testride"}>Find a Dealer</Link>
                            <Link to={"/Dealership"}>Become a Dealer</Link>
                            <a href="home">Contact Us</a>
                        </div>
                        <div className="footer-contant-contact">
                            <h1>Contact Us</h1>
                            <div className="footer-contact-inner">
                                <img src={locationf} alt="locationf" />
                                <h2>1201-1206, 12th Floor, Spaze Plazo, Sector-69 Haryana</h2>
                            </div>

                            <div className="footer-contact-inner">
                                <img src={phone} alt="phone" />
                                <h3>08069760700</h3>
                            </div>

                            <div className="footer-contact-inner">
                                <img src={mail} alt="mail" />
                                <h4>bounceinfinity@gmail.com</h4>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-pera-main">
                        <img src={copyright} alt="copyright" />
                        <p>Copyright 2024. All right reserved.</p>
                    </div>
                </div>
            </footer>

            <div className="footer-mobile">
                <div className="footer-logo-mobile-main">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="footer-mobile-pera-main">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="footer-mobile-contant-main-title">
                    <h1>Useful Links</h1>
                </div>
                <div className="footer-mobile-contant-main">
                    <a href="home">Become a Dealer</a>
                    <p>|</p>
                    <a href="home">Find a Dealer</a>
                    <p>|</p>
                    <a href="home">Contact Us</a>
                    <p>|</p>
                    <a href="home">Contact Us</a>
                </div>
                <div className="footer-mobile-contact-last-border-main">
                    <div className="footer-mobile-contact-title">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="footer-mobile-contact-main">
                        <div className="footer-contact-box">
                            <img src={locationf} alt="locationf" />
                            <p>1201-1206, 12th Floor Spaze Plazo Sector-69 Haryana</p>
                        </div>

                        <div className="footer-contact-box">
                            <img src={phone} alt="phone" />
                            <p>08069760700</p>
                        </div>

                        <div className="footer-contact-box">
                            <img src={mail} alt="mail" />
                            <p>bounceinfinity@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-mobile-copyright">
                    <img src={copyright} alt="copyright" />
                    <p>Copyright 2024. All right reserved.</p>
                </div>
            </div>















        </div>
    )
}
