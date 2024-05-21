import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./dealership.scss";
import herobanner from "../../assets/dealershipimage/dealershipherobanner.png"
import magnify from "../../assets/testrideimage/maginfine.png"
import scootergroup from "../../assets/dealershipimage/scootergroup.png";
import home from "../../assets/dealershipimage/home.png";
import locationh from "../../assets/dealershipimage/location.png";
import halfscooter from "../../assets/dealershipimage/halfscooter.png";
import logoh from "../../assets/image/logo (1) 2.png"
import { IoChevronDown } from "react-icons/io5";
import hamburger from "../../assets/headerimage/hamburger.png";
import mobilelogo from "../../assets/headerimage/headerlogo2.png";
import { RiCloseFill } from "react-icons/ri";
import logo from "../../assets/electricscooterimage/logofooter.png";
import locationf from "../../assets/footerimage/location.png";
import phone from "../../assets/footerimage/telephone.png";
import mail from "../../assets/footerimage/email.png";
import copyright from "../../assets/footerimage/copyright.png";
import esscooter from "../../assets/dealershipimage/E1 SPORTY RED 3.png";

export default function Dealership() {


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
        // Scroll to the top of the page when the component mounts
        topRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

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
                                    <Link id="dropdown-id-main-s-sc" to={"/Financial"}>
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
