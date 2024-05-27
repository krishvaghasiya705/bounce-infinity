import React, { useEffect, useRef, useState } from "react";
import "./headerthree.scss";
import { IoChevronDown } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { RiCloseFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import logosec from "../../assets/socialmediaimage/headerlogosec.png"
import hamburger from "../../assets/headerimage/hamburger.png";
import mobilelogo from "../../assets/headerimage/headerlogo2.png";
import dropdown from "../../assets/headerimage/dropdownscc.png";

const Headerthree = () => {

    const [Open, SetOpen] = useState(false);

    const toggleDropdown = () => {
        SetOpen(!Open);
    };

    const [Open1, SetOpen1] = useState(false);

    const toggleDropdown1 = () => {
        SetOpen1(!Open1);
    };

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
                                    <Link to={"/"} className={location.pathname === '/' || location.pathname === '/Banglore' ? 'active' : ''}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/Testride"} className={location.pathname === '/Testride' ? 'active' : ''}>Test Ride</Link>
                                </li>
                                <li className="dropdown">
                                    <div onClick={toggleDropdown} className="dropdown-button">
                                        <span className={location.pathname === '/Dealership' || location.pathname === '/Dealershipride' ? 'active' : ''}>Dealerships</span>
                                    </div>
                                    <img className={`img ${Open ? 'rotate' : ''}`} src={dropdown} alt="dropdown" />
                                </li>
                                <div className={`dropdown-content ${Open ? 'show' : ''}`}>
                                    <Link to={"/Dealership"} className={location.pathname === '/Dealership' ? 'active' : ''}>Dealerships</Link>
                                    <Link to={"/Dealershipride"} className={location.pathname === '/Dealership' || location.pathname === '/Dealershipride' ? 'active' : ''}>Book Ride</Link>
                                    <Link to={"/Dealershipdetail"} className={location.pathname === '/Dealership' || location.pathname === '/Dealershipdetail' ? 'active' : ''}>Ride Details</Link>
                                </div>
                                <li className="dropdown">
                                    <div onClick={toggleDropdown1} className="dropdown-button">
                                        <span className={location.pathname === '/Financial' || location.pathname === '/Socialmedia' || location.pathname === '/Socialmediadetails' ? 'active' : ''}>Pages</span>
                                    </div>
                                    <img className={`img ${Open1 ? 'rotate' : ''}`} src={dropdown} alt="dropdown" />
                                </li>
                                <div className={`dropdown-content ${Open1 ? 'show' : ''}`}>
                                    <Link to={"/Financial"} className={location.pathname === '/Financial' ? 'active' : ''}>Pages / Financial</Link>
                                    <Link to={"/Socialmedia"} className={location.pathname === '/Socialmedia' ? 'active' : ''}>Social Media</Link>
                                    <Link to={"/Socialmediadetails"} className={location.pathname === '/Socialmediadetails' ? 'active' : ''}>Social Media Details</Link>
                                </div>
                                <li>
                                    <Link to={"/Pricing"} className={location.pathname === '/Pricing' ? 'active' : ''}>Pricing</Link>
                                </li>
                                <li>
                                    <Link to={"/Contact"} className={location.pathname === '/Contact' ? 'active' : ''}>Contact Us</Link>
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

export default Headerthree;