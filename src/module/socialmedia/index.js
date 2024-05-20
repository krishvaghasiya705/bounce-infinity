import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./socialmedia.scss"
import pressone from "../../assets/socialmediaimage/pressone.png"
import presstwo from "../../assets/socialmediaimage/presstwo.png"
import pressthree from "../../assets/socialmediaimage/pressthree.png"
import person from "../../assets/socialmediaimage/person.png";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

export default function Socialmedia() {

  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);
  const [showMore6, setShowMore6] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  const handleClick2 = () => {
    setShowMore2(!showMore2);
  };

  const handleClick3 = () => {
    setShowMore3(!showMore3);
  };

  const handleClick4 = () => {
    setShowMore4(!showMore4);
  };

  const handleClick5 = () => {
    setShowMore5(!showMore5);
  };

  const handleClick6 = () => {
    setShowMore6(!showMore6);
  };




  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear"
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
                  <Link to={"/Slide"}>
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






      <div className="blank-div-social-media" ref={topRef}></div>

      <div className="press-stm-section-main">
        <div className="container-press">
          <div className="press-title-main">
            <h1>Social Media</h1>
          </div>
          <div className="press-card-div-main">
            <div className="press-card-div-box-one">
              <img src={pressone} alt="pressone" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick}>{showMore ? 'Show Less' : 'View more'}</button>
            </div>

            <div className="press-card-div-box-one">
              <img src={presstwo} alt="presstwo" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore2 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick2}>{showMore2 ? 'Show Less' : 'View more'}</button>
            </div>

            <div className="press-card-div-box-one">
              <img src={pressthree} alt="pressthree" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore3 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick3}>{showMore3 ? 'Show Less' : 'View more'}</button>
            </div>

            <div className="press-card-div-box-one">
              <img src={pressone} alt="pressone" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore4 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick4}>{showMore4 ? 'Show Less' : 'View more'}</button>
            </div>

            <div className="press-card-div-box-one">
              <img src={presstwo} alt="presstwo" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore5 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick5}>{showMore5 ? 'Show Less' : 'View more'}</button>
            </div>

            <div className="press-card-div-box-one">
              <img src={pressthree} alt="pressthree" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore6 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick6}>{showMore6 ? 'Show Less' : 'View more'}</button>
            </div>

          </div>
        </div>
      </div>







      <div className="client-review-slider-main-background">
        <div className="conatiner-review">
          <div className="client-review-title-main">
            <h1>What Our clients are saying</h1>
          </div>
          <div className="slider-container">
            <Slider {...settings}>

              <div className="slider-box-one" id='slider-box-opacity'>
                <h2>“</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="person-image-main">
                  <img src={person} alt="person" />
                </div>
                <h3>Marcus Torff</h3>
              </div>

              <div className="slider-box-one">
                <h2>“</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="person-image-main">
                  <img src={person} alt="person" />
                </div>
                <h3>Marcus Torff</h3>
              </div>

              <div className="slider-box-one" id='slider-box-opacity'>
                <h2>“</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="person-image-main">
                  <img src={person} alt="person" />
                </div>
                <h3>Marcus Torff</h3>
              </div>

            </Slider>
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