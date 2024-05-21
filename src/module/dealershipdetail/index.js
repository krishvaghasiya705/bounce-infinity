import React, { useRef, useState } from 'react'
import "./dealershipdetail.scss"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
import herobanerdetail from "../../assets/dealersgipdetailimage/Rectangle 33.png";
import locationdetail from "../../assets/dealersgipdetailimage/location.png";
import clockdetail from "../../assets/dealersgipdetailimage/clock.png";
import phonedetail from "../../assets/dealersgipdetailimage/phone.png";
import maildetail from "../../assets/dealersgipdetailimage/mail.png";
import { CgClose } from "react-icons/cg";;

export default function Dealershipdetail() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const location = useLocation();

    const topRef = useRef(null);


    const [IsOpen, SetIsOpen] = useState(false);

    const openModal = () => {
        SetIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        SetIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };


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
                                    <Link id="dropdown-id-main-sc" to="/Dealership" className={location.pathname === '/Dealership' || location.pathname === '/Dealershipride' || location.pathname === '/Dealershipdetail' ? 'active' : ''}>
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





            <div className="dealershipdetails-herobanner-main">
                <img src={herobanerdetail} alt="herobanerdetail" />
            </div>




            <div className="bounce-elc-sc-back-main">
                <div className="bounce-elc-sc-container">
                    <div className="bounce-elc-sc-flx-main">
                        <div className="bounce-el-box-main">
                            <h2>Bounce Infinity Electric Scooter (Jangra Automobiles)</h2>
                            <div className="bouncce-locate-pera">
                                <img src={locationdetail} alt="locationdetail" />
                                <p>WZ-182, Jangra Batteries, Palam Village, Delhi, Delhi, 110045</p>
                            </div>
                            <div className="bouncce-locate-pera">
                                <img src={clockdetail} alt="clockdetail" />
                                <p>Mon - Sun: 10 am - 8 pm</p>
                            </div>
                            <div className="bouncce-locate-pera">
                                <img src={phonedetail} alt="phonedetail" />
                                <p>+91 95846 12586</p>
                            </div>
                            <div className="bouncce-locate-pera">
                                <img src={maildetail} alt="maildetail" />
                                <p>patelmotores@gmail.com</p>
                            </div>
                            <div className="book-button">
                                <button onClick={openModal} type="submit">Book a Test Ride</button>
                            </div>
                        </div>

                        <div className="iframe-div-main">
                            <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2646888957643!2d-79.39355380833149!3d43.64266109581092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d034de1ea5%3A0x179beb81d9aa1511!2sEntertainment%20District%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1715084083390!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iFrame>
                        </div>
                    </div>
                </div>
            </div>

            {IsOpen && (
                <div className="modal-backdrop" onClick={handleBackdropClick}>
                    <div className="modal-content">
                        <div className="model-close-button">
                            <h3>Book a Test Ride</h3>
                            <button onClick={closeModal}>
                                <CgClose />
                            </button>
                        </div>
                        <div className="model-details-main">
                            <div className="model-main-button">
                                <button type="submit">
                                    <p>Test Ride at Doorstep</p>
                                </button>
                                <div className="second-model-button">
                                    <button type="submit">Test Ride at Dealership</button>
                                </div>
                            </div>

                            <div className="model-main-button-mobile">
                                <button type="submit">Ride at Dealership</button>
                                <button type="submit">Ride at Doorstep</button>
                            </div>

                            <div className="model-main-input-contant">
                                <div className="model-input-box-one">
                                    <h5>Name</h5>
                                    <input type="text" placeholder="Enter your name" />
                                </div>

                                <div className="model-input-box-one">
                                    <h5>Phone number</h5>
                                    <input type="number" placeholder="Enter your phone number" />
                                </div>

                                <div className="input-box-four">
                                    <h5>Phone number</h5>
                                    <input id="input-num" type="number" placeholder="Enter your phone number" />
                                    <select>
                                        <option value="1">+91</option>
                                        <option value="2">+92</option>
                                        <option value="3">+93</option>
                                    </select>
                                </div>

                                <div className="model-input-box-one">
                                    <h5>Date</h5>
                                    <select>
                                        <option selected value="1">Select date</option>
                                        <option value="2">Select date</option>
                                        <option value="3">Select date</option>
                                    </select>
                                </div>

                                <div className="model-input-box-one">
                                    <h5>Time slot</h5>
                                    <select>
                                        <option selected value="1">Select time slot</option>
                                        <option value="2">Select time slot</option>
                                        <option value="3">Select time slot</option>
                                    </select>
                                </div>

                                <div className="model-input-box-one">
                                    <h5>Pincode</h5>
                                    <input type="text" placeholder="Enter your pincode" />
                                </div>

                            </div>

                            <div className="confirm-button">
                                <button type="submit">Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}














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
