import React, { useEffect, useRef, useState } from "react";
import "./PerformanceTiming.scss"
import { useLocation } from "react-router-dom";
import logosec from "../../assets/socialmediaimage/headerlogosec.png"
import hamburger from "../../assets/headerimage/hamburger.png";
import mobilelogo from "../../assets/headerimage/headerlogo2.png";
import logo from "../../assets/footerimage/logo.png";
import locationf from "../../assets/footerimage/location.png";
import phone from "../../assets/footerimage/telephone.png";
import mail from "../../assets/footerimage/email.png";
import copyright from "../../assets/footerimage/copyright.png";
import rupees from "../../assets/cardimage/Vector.png";
import { IoChevronDown } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Pricing() {


    const topRef = useRef(null);

    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const location = useLocation();


    return (
        <div>




            <header ref={topRef}>
                <div className="header-main">
                    <div className="header-container">
                        <div className="header-contant">
                            <div className="header-contant-logo">
                                <Link to={"/"}>
                                    <img src={logosec} alt="logosec" />
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
                                    <Link id="dropdown-id-main-home" to="/Dealership" className={location.pathname === '/Dealership' || location.pathname === '/Dealershipride' ? 'active' : ''}>
                                        <a href="home">Dealerships</a>
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
                                    <Link id="dropdown-id-main-home-h-two" to="/Financial" className={location.pathname === '/Financial' || location.pathname === '/Socialmedia' || location.pathname === '/Socialmediadetails' ? 'active' : ''}>
                                        <p>Pages</p>
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
                                    <Link to={"/Pricing"} className={location.pathname === '/Pricing' ? 'active' : ''}>
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




            <div className="blank-div-social-detail"></div>






            <div className="pricing-section-second-box-main">
                <div className="pricing-section-container">

                    <div className="pricing-section-title-main">
                        <h1>Pricing Section</h1>
                    </div>
                    <div className="pricing-section-inp-section-main">
                        <div className="pricing-section-form-inp-one">
                            <h2>Select Variant</h2>
                            <div className="inp-first-main-div">
                                <select name="Select Variant">
                                    <option value={1}>Select Variant</option>
                                    <option value={2}>Select Variant</option>
                                    <option value={3}>Select Variant</option>
                                </select>
                            </div>
                        </div>
                        <div className="pricing-section-form-inp-two-inner-inp-one">
                            <h3>Select State</h3>
                            <select name="Select state">
                                <option value={1}>Select state</option>
                                <option value={2}>Select state</option>
                            </select>
                        </div>
                        <div className="pricing-section-form-inp-two-inner-inp-two">
                            <h4>Select City</h4>
                            <select name="Select City">
                                <option value={1}>Select City</option>
                                <option value={2}>Select City</option>
                            </select>
                        </div>
                    </div>
                    <div className="available-clr-title-main">
                        <div className="avialable-clr-main">
                            <h5>Available color</h5>
                            <p>
                                <span></span>
                                <span></span>
                                <span></span>
                            </p>
                        </div>
                        <div className="showroom-prize-div-main">
                            <h6>Ex-Showroom Price (including charger and GST)</h6>
                            <p><img src={rupees} alt="rupees" /> 1,55,553</p>
                        </div>
                        <div className="fame-pera-div-main">
                            <p>FAME II Subsidy</p>
                            <span>- <img src={rupees} alt="rupees" /> 21,131</span>
                        </div>
                        <div className="subsidy-pera-div-main">
                            <h1>Subsidy from State Government</h1>
                            <span>- <img src={rupees} alt="rupees" /> 0</span>
                        </div>
                        <div className="border-div-prz-btm"></div>
                        <div className="effective-pera-main">
                            <h2>Effective Price</h2>
                            <span><img src={rupees} alt="rupees" /> 1,34,422</span>
                        </div>
                        <div className="price-pera-main">
                            <p>*The price displayed is subject to change, final Vehicle price may vary and will be applicable as on the date of delivery</p>
                        </div>
                        <div className="price-pera-main-two">
                            <p>* The price displayed above excludes road taxes, insurance, registration and other charges. Click on Book Now to find the detailed price breakup.</p>
                        </div>
                        <div className="book-now-button">
                            <Link to={"/Accordian"}>
                                <button type='submit'>Book Now</button>
                            </Link>
                        </div>
                    </div>


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
