import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoh from "../../assets/image/logo (1) 2.png"
import { IoChevronDown } from "react-icons/io5";
import hamburger from "../../assets/headerimage/hamburger.png";
import mobilelogo from "../../assets/headerimage/headerlogo2.png";
import { RiCloseFill } from "react-icons/ri";
import "./headerone.scss"

const Headerone = () => {

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
                                    <Link id="dropdown-id-main-s-sc" to={"/Financial"} className={location.pathname === '/Financial' ? 'active' : ''}>

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

export default Headerone;