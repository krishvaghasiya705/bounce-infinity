import React, { useEffect, useRef, useState } from "react";
import "./elecricbanglore.scss"
import Faq from "../../common/faq"
import Headertwo from "../../common/headertwo";
import Footer from "../../common/footer";
import herobannerelectricbanglore from "../../assets/electricbangloreimage/Group 239295.png";
import scootyone from "../../assets/electricbangloreimage/Group 642.png";
import scootytwo from "../../assets/electricbangloreimage/Group 642 (2).png";
import scootythree from "../../assets/electricbangloreimage/Group 642 (3).png";
import cardimage from "../../assets/electricbangloreimage/cardimage.png";
import locationicon from "../../assets/electricbangloreimage/locationicon.png";
import phoneicon from "../../assets/electricbangloreimage/phoneicon.png";

export default function Electricbanglore() {

    const [currentImages, setCurrentImages] = useState(scootyone);

    const handleImageChange = (newImage) => {
        setCurrentImages(newImage);
    };

    useEffect(() => {
        const images = [scootyone, scootytwo, scootythree];
        let currentIndex = 0;

        const changeImage = () => {
            setCurrentImages(images[currentIndex]);
            currentIndex = (currentIndex + 1) % images.length;
        };

        const interval = setInterval(changeImage, 2000);

        return () => clearInterval(interval);
    }, []);





    const topRef = useRef(null);

    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const [activeGroup1, setActiveGroup1] = useState(2);
    const [activeGroup2, setActiveGroup2] = useState(4);
    const [activeGroup3, setActiveGroup3] = useState(6);
    const [activeGroup4, setActiveGroup4] = useState(8);
    const [activeGroup5, setActiveGroup5] = useState(10);
    const [activeGroup6, setActiveGroup6] = useState(12);

    const handleClickGroup1 = (buttonNumber) => {
        setActiveGroup1(buttonNumber);
    };

    const handleClickGroup2 = (buttonNumber) => {
        setActiveGroup2(buttonNumber);
    };
    const handleClickGroup3 = (buttonNumber) => {
        setActiveGroup3(buttonNumber);
    };

    const handleClickGroup4 = (buttonNumber) => {
        setActiveGroup4(buttonNumber);
    };
    const handleClickGroup5 = (buttonNumber) => {
        setActiveGroup5(buttonNumber);
    };

    const handleClickGroup6 = (buttonNumber) => {
        setActiveGroup6(buttonNumber);
    };



    return (
        <div>

            <Headertwo />



            <div className="elcetric-banglore-page-blank-div" ref={topRef}></div>




            <div className="herobanner-main">
                <div className="herobanner-main">
                    <img src={herobannerelectricbanglore} alt="herobannerelectricbanglore" />
                </div>
                <div className="banglore-scooter-image-align-main">
                    <img src={currentImages} alt="scooter" />
                </div>
                <div className="herobanner-scooter-div-main">
                    <div className="electric-scooter-dealer-box-main">
                        <h1>Electric Scooter Dealers & Showroom in Bangalore</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                        <div className="book-now-buttton-main">
                            <button>Book Now</button>
                        </div>

                        <div className="herobanner-baanglore-image-changer-button-main-div">
                            <button onClick={() => handleImageChange(scootyone)} type="button" className={currentImages === scootyone ? 'active' : ''}></button>
                            <button onClick={() => handleImageChange(scootytwo)} type="button" className={currentImages === scootytwo ? 'active' : ''}></button>
                            <button onClick={() => handleImageChange(scootythree)} type="button" className={currentImages === scootythree ? 'active' : ''}></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="locate-box-main">
                <div className="locate-box-container">
                    <div className="locate-box-inner-main">
                        <div className="locate-title-main">
                            <h2>LOCATE THE NEAREST DEALER</h2>
                        </div>
                        <div className="state-city-inputss-main-div">
                            <div className="stat-input-main">
                                <h3>Select State</h3>
                                <select>
                                    <option selected value="1">Your state</option>
                                    <option value="2">Your state</option>
                                    <option value="3">Your state</option>
                                </select>
                            </div>
                            <div className="stat-input-main">
                                <h3>Select City</h3>
                                <select>
                                    <option selected value="1">Your City</option>
                                    <option value="2">Your City</option>
                                    <option value="3">Your City</option>
                                </select>
                            </div>
                            <div className="stat-input-main">
                                <h3>Pincode</h3>
                                <select>
                                    <option selected value="1">Your pincode</option>
                                    <option value="2">Your pincode</option>
                                    <option value="3">Your pincode</option>
                                </select>
                            </div>
                            <button type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card-section-main-banglore-main">
                <div className="card-section-continer-main">
                    <div className="card-grid-section--main-banglore-page">
                        <div className="card-box-one-main">
                            <div className="card-image-main">
                                <img src={cardimage} alt="cardimage" />
                            </div>
                            <div className="card-main-content">
                                <h4>Bounce Infinity Electric Scooter (Jangra Automobiles)</h4>
                                <div className="location-div-main">
                                    <img src={locationicon} alt="locationicon" />
                                    <p>WZ-182, Jangra Batteries, Palam Village,Delhi, Delhi, 110045</p>
                                </div>
                                <div className="phone-div-main">
                                    <img src={phoneicon} alt="phoneicon" />
                                    <p>+91 97569 64787</p>
                                </div>
                                <div className="button-flx-div-main">
                                    <button onClick={() => handleClickGroup1(1)} className={activeGroup1 === 1 ? 'active' : ''}>First Button</button>
                                    <button onClick={() => handleClickGroup1(2)} className={activeGroup1 === 2 ? 'active' : ''}>Website</button>
                                </div>
                            </div>
                        </div>

                        <div className="card-box-one-main">
                            <div className="card-image-main">
                                <img src={cardimage} alt="cardimage" />
                            </div>
                            <div className="card-main-content">
                                <h4>Bounce Infinity Electric Scooter (Jangra Automobiles)</h4>
                                <div className="location-div-main">
                                    <img src={locationicon} alt="locationicon" />
                                    <p>WZ-182, Jangra Batteries, Palam Village,Delhi, Delhi, 110045</p>
                                </div>
                                <div className="phone-div-main">
                                    <img src={phoneicon} alt="phoneicon" />
                                    <p>+91 97569 64787</p>
                                </div>
                                <div className="button-flx-div-main">
                                    <button onClick={() => handleClickGroup2(3)} className={activeGroup2 === 3 ? 'active' : ''}>First Button</button>
                                    <button onClick={() => handleClickGroup2(4)} className={activeGroup2 === 4 ? 'active' : ''}>Website</button>
                                </div>
                            </div>
                        </div>

                        <div className="card-box-one-main">
                            <div className="card-image-main">
                                <img src={cardimage} alt="cardimage" />
                            </div>
                            <div className="card-main-content">
                                <h4>Bounce Infinity Electric Scooter (Jangra Automobiles)</h4>
                                <div className="location-div-main">
                                    <img src={locationicon} alt="locationicon" />
                                    <p>WZ-182, Jangra Batteries, Palam Village,Delhi, Delhi, 110045</p>
                                </div>
                                <div className="phone-div-main">
                                    <img src={phoneicon} alt="phoneicon" />
                                    <p>+91 97569 64787</p>
                                </div>
                                <div className="button-flx-div-main">
                                    <button onClick={() => handleClickGroup3(5)} className={activeGroup3 === 5 ? 'active' : ''}>First Button</button>
                                    <button onClick={() => handleClickGroup3(6)} className={activeGroup3 === 6 ? 'active' : ''}>Website</button>
                                </div>
                            </div>
                        </div>

                        <div className="card-box-one-main">
                            <div className="card-image-main">
                                <img src={cardimage} alt="cardimage" />
                            </div>
                            <div className="card-main-content">
                                <h4>Bounce Infinity Electric Scooter (Jangra Automobiles)</h4>
                                <div className="location-div-main">
                                    <img src={locationicon} alt="locationicon" />
                                    <p>WZ-182, Jangra Batteries, Palam Village,Delhi, Delhi, 110045</p>
                                </div>
                                <div className="phone-div-main">
                                    <img src={phoneicon} alt="phoneicon" />
                                    <p>+91 97569 64787</p>
                                </div>
                                <div className="button-flx-div-main">
                                    <button onClick={() => handleClickGroup4(7)} className={activeGroup4 === 7 ? 'active' : ''}>First Button</button>
                                    <button onClick={() => handleClickGroup4(8)} className={activeGroup4 === 8 ? 'active' : ''}>Website</button>
                                </div>
                            </div>
                        </div>

                        <div className="card-box-one-main">
                            <div className="card-image-main">
                                <img src={cardimage} alt="cardimage" />
                            </div>
                            <div className="card-main-content">
                                <h4>Bounce Infinity Electric Scooter (Jangra Automobiles)</h4>
                                <div className="location-div-main">
                                    <img src={locationicon} alt="locationicon" />
                                    <p>WZ-182, Jangra Batteries, Palam Village,Delhi, Delhi, 110045</p>
                                </div>
                                <div className="phone-div-main">
                                    <img src={phoneicon} alt="phoneicon" />
                                    <p>+91 97569 64787</p>
                                </div>
                                <div className="button-flx-div-main">
                                    <button onClick={() => handleClickGroup5(9)} className={activeGroup5 === 9 ? 'active' : ''}>First Button</button>
                                    <button onClick={() => handleClickGroup5(10)} className={activeGroup5 === 10 ? 'active' : ''}>Website</button>
                                </div>
                            </div>
                        </div>

                        <div className="card-box-one-main">
                            <div className="card-image-main">
                                <img src={cardimage} alt="cardimage" />
                            </div>
                            <div className="card-main-content">
                                <h4>Bounce Infinity Electric Scooter (Jangra Automobiles)</h4>
                                <div className="location-div-main">
                                    <img src={locationicon} alt="locationicon" />
                                    <p>WZ-182, Jangra Batteries, Palam Village,Delhi, Delhi, 110045</p>
                                </div>
                                <div className="phone-div-main">
                                    <img src={phoneicon} alt="phoneicon" />
                                    <p>+91 97569 64787</p>
                                </div>
                                <div className="button-flx-div-main">
                                    <button onClick={() => handleClickGroup6(11)} className={activeGroup6 === 11 ? 'active' : ''}>First Button</button>
                                    <button onClick={() => handleClickGroup6(12)} className={activeGroup6 === 12 ? 'active' : ''}>Website</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Faq />




            <Footer />

        </div >
    )
}
