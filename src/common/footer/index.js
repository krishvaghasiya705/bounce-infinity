import React from 'react'
import './footer.scss';
import logo from "../../assets/footerimage/logo.png";
import location from "../../assets/footerimage/location.png";
import phone from "../../assets/footerimage/telephone.png";
import mail from "../../assets/footerimage/email.png";
import copyright from "../../assets/footerimage/copyright.png";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
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
                                <img src={location} alt="location" />
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
                            <img src={location} alt="location" />
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
