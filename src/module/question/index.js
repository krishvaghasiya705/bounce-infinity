import React, { useEffect, useRef, useState } from "react";
import "./accordian.scss"
import { useLocation } from "react-router-dom";
import logosec from "../../assets/socialmediaimage/headerlogosec.png"
import hamburger from "../../assets/headerimage/hamburger.png";
import mobilelogo from "../../assets/headerimage/headerlogo2.png";
import logo from "../../assets/footerimage/logo.png";
import locationf from "../../assets/footerimage/location.png";
import phone from "../../assets/footerimage/telephone.png";
import mail from "../../assets/footerimage/email.png";
import copyright from "../../assets/footerimage/copyright.png";
import { IoChevronDown } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`} onClick={() => toggleItem(index)}>
                    <div className={`accordion-title ${openIndex === index ? 'open' : ''}`} onClick={() => toggleItem(index)}>
                        <h3>{item.title}</h3>
                        <span className={`icon ${openIndex === index ? 'minus' : 'plus'}`}></span>
                    </div>
                    <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                        <p>
                            {item.content}
                        </p>
                        <div className={`accordion-content-side-line ${openIndex === index ? 'open' : ''}`}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Accordian() {


    const accordionItems = [
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
    ];


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
                                    <Link to={"/Pricing"} className={location.pathname === '/Pricing' || location.pathname === '/Accordian' ? 'active' : ''}>
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









            <div className="faq-section-main-sc">
                <div className="faq-container">
                    <div className="faq-title-main">
                        <h1>frequently asked question</h1>
                    </div>
                </div>

                <div className="accordian-container">
                    <Accordion items={accordionItems} />
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
