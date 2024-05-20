import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './header.scss';
import logo from "../../assets/image/logo (1) 2.png"
import { IoChevronDown } from "react-icons/io5";
import hamburger from "../../assets/headerimage/hamburger.png";
import mobilelogo from "../../assets/headerimage/headerlogo2.png";
import { RiCloseFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Header() {

    const topRef = useRef(null);

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
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
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="header-contant-menu">
                                <div className="header-contant-menu-ancer">
                                    <Link to="/" className={location.pathname === '/' || location.pathname === '/Banglore' ? 'active' : ''}>
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
        </div>
    )
}
