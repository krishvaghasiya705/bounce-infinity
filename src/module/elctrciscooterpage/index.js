import React, { useState, useEffect, useRef } from 'react';
import "./elecricscooterpage.scss";
import { useLocation } from 'react-router-dom';
import logo from "../../assets/electricscooterimage/logofooter.png"
import { IoChevronDown } from "react-icons/io5";
import hamburger from "../../assets/headerimage/hamburger.png";
import mobilelogo from "../../assets/headerimage/headerlogo2.png";
import { RiCloseFill } from "react-icons/ri";
import logoh from "../../assets/bangaloreimage/logoheader.png";
import locationf from "../../assets/footerimage/location.png";
import phone from "../../assets/footerimage/telephone.png";
import mail from "../../assets/footerimage/email.png";
import copyright from "../../assets/footerimage/copyright.png";
import herobannerscooter from "../../assets/electricscooterimage/Group 239295.png";
import scootyone from "../../assets/electricscooterimage/E1 SPORTY RED 3.png";
import scootytwo from "../../assets/electricscooterimage/E1+ SERENE GREEN 1.png";
import scootythree from "../../assets/electricscooterimage/E1+ ROCK GREY.png";
import E1scootyone from "../../assets/bangaloreimage/E1scootyone.png";
import E1scootytwo from "../../assets/bangaloreimage/E2scootytwo.png";
import E1scootythree from "../../assets/bangaloreimage/E3scoothree.png";
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





export default function Electricscooter() {

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





    const [currentImage, setCurrentImage] = useState(scootyone);

    const handleImageChange = (newImage) => {
        setCurrentImage(newImage);
    };

    useEffect(() => {
        const images = [scootyone, scootytwo, scootythree];
        let currentIndex = 0;

        const changeImage = () => {
            setCurrentImage(images[currentIndex]);
            currentIndex = (currentIndex + 1) % images.length;
        };

        const interval = setInterval(changeImage, 2000);

        return () => clearInterval(interval);
    }, []);



    const accordionItems = [
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        { title: "Lorem Ipsum is simply dummy text ?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
    ];


    return (
        <div>




            <header className="header-banglore" ref={topRef}>
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
                                    <Link to="/" className={location.pathname === '/' || location.pathname === '/Banglore' || location.pathname === '/Electricscooter' ? 'active' : ''}>
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





















            <div className="herobanner-electric-main">
                <img src={herobannerscooter} alt="herobannerscooter" />
                <div className="herobanner-inner-main">
                    <div className="herobanner-inner-main-insc">
                        <div className="scooter-first-div-main">
                            <div className="banglore-electric-titl-main">
                                <h1>Top Electric Scooter Under 1 Lakh</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                                <div className="book-now-button-banglore">
                                    <button type="button">Book Now</button>
                                </div>
                            </div>
                            <div className="herobanner-elec-page-button-main">
                                <div className="herobanner-image-changer-button-main-div-sc">
                                    <button onClick={() => handleImageChange(scootyone)} type="button" className={currentImage === scootyone ? 'active' : ''}></button>
                                    <button onClick={() => handleImageChange(scootytwo)} type="button" className={currentImage === scootytwo ? 'active' : ''}></button>
                                    <button onClick={() => handleImageChange(scootythree)} type="button" className={currentImage === scootythree ? 'active' : ''}></button>
                                </div>
                            </div>
                        </div>

                        <div className="scooter-div-two-main">
                            <div className="scooter-div-main">
                                <img src={currentImage} alt="scooter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="herobanner-elec-mobile">
                <div className="herobanner-mobile-main">
                    <div>
                        <div className="bounce-title-div-main">
                            <h1>Top Electric Scooter Under 1 Lakh</h1>
                        </div>
                        <div className="bounce-pera-div-main">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                        </div>
                        <div className="herobanner-mobile-button-main">
                            <button type='submit'>Book Now</button>
                        </div>
                    </div>
                    <div className="herobanner-mobile-image-changer-button-main-div">
                        <button onClick={() => handleImageChange(scootyone)} type="button" className={currentImage === scootyone ? 'active' : ''}></button>
                        <button onClick={() => handleImageChange(scootytwo)} type="button" className={currentImage === scootytwo ? 'active' : ''}></button>
                        <button onClick={() => handleImageChange(scootythree)} type="button" className={currentImage === scootythree ? 'active' : ''}></button>
                    </div>
                    <div className="herobanner-mobile-bike-image">
                        <img src={currentImage} alt="scooter" />
                    </div>
                </div>
            </div>








            <div className="electric-scooter-section-main-bnglore-page">
                <div className="electric-scooter-container-main-bnglore-page">
                    <div className="electric-sccooter-title-banglore-main">
                        <h2>Electric Scooters in Bangalore</h2>
                    </div>
                    <div className="scoter-crd-main-section-flx">

                        <div className="scooter-crd-box-one-main">
                            <div className="infinity-image-scooter-main">
                                <img src={E1scootyone} alt="E1scootyone" />
                            </div>
                            <div className="electic-section-inner-detail-main">
                                <h3>E1LE</h3>
                                <h4>Battery  -  1.9 kWh</h4>
                                <h5>Real World Range  -  70+ km</h5>
                            </div>
                            <div className="electric-section-inner-details-sc-in">
                                <h6>Price</h6>
                                <p>₹1,08,064</p>
                                <div className="read-more-button">
                                    <button type="button">Read More <span></span></button>
                                </div>
                            </div>
                        </div>

                        <div className="scooter-crd-box-one-main">
                            <div className="infinity-image-scooter-main">
                                <img src={E1scootytwo} alt="E1scootytwo" />
                            </div>
                            <div className="electic-section-inner-detail-main">
                                <h3>E1</h3>
                                <h4>Battery  -  2.5k Wh</h4>
                                <h5>Real World Range  -  100+ km</h5>
                            </div>
                            <div className="electric-section-inner-details-sc-in">
                                <h6>Price</h6>
                                <p>₹1,04,999</p>
                                <div className="read-more-button">
                                    <button type="button">Read More <span></span></button>
                                </div>
                            </div>
                        </div>

                        <div className="scooter-crd-box-one-main">
                            <div className="infinity-image-scooter-main">
                                <img src={E1scootythree} alt="E1scootythree" />
                            </div>
                            <div className="electic-section-inner-detail-main">
                                <h3>E1+</h3>
                                <h4>Battery  -  1.9 kWh</h4>
                                <h5>Real World Range  -  70+ km</h5>
                            </div>
                            <div className="electric-section-inner-details-sc-in">
                                <h6>Price</h6>
                                <p>₹89,999</p>
                                <div className="read-more-button">
                                    <button type="button">Read More <span></span></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>







            <div className="faq-section-main">
                <div className="faq-container">
                    <div className="faq-title-main">
                        <h1>Have Any Question?</h1>
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
