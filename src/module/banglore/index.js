import React, { useState, useEffect } from 'react';
import "./banglore.scss";
import Footer from "../../common/footer";
import Headerfour from "../../common/headerfour";
import herobannerbanglore from "../../assets/bangaloreimage/herobanner.png";
import scootyone from "../../assets/bangaloreimage/e1red.png";
import scootytwo from "../../assets/bangaloreimage/e1grey.png";
import scootythree from "../../assets/bangaloreimage/e1black.png";
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





export default function Banglore() {

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

            <Headerfour />


            <div className="herobanner-banglore-main">
                <img src={herobannerbanglore} alt="herobannerbanglore" />
                <div className="herobanner-inner-main">
                    <div className="herobanner-inner-main-insc">
                        <div className="scooter-first-div-main">
                            <div className="banglore-electric-titl-main">
                                <h1>Electric Scooters in Bangalore</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                                <div className="book-now-button-banglore">
                                    <button type="button">Book Now</button>
                                </div>
                            </div>
                            <div className="herobanner-image-changer-button-main-div-sc">
                                <button onClick={() => handleImageChange(scootyone)} type="button" className={currentImage === scootyone ? 'active' : ''}></button>
                                <button onClick={() => handleImageChange(scootytwo)} type="button" className={currentImage === scootytwo ? 'active' : ''}></button>
                                <button onClick={() => handleImageChange(scootythree)} type="button" className={currentImage === scootythree ? 'active' : ''}></button>
                            </div>
                        </div>

                        <div className="scooter-div-main">
                            <img src={currentImage} alt="scooter" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="herobanner-banglore-mobile">
                <div className="herobanner-mobile-main">
                    <div>
                        <div className="bounce-title-div-main">
                            <h1>Electric Scooters in Bangalore</h1>
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
                                    <Link to="/Electricscooter"><button type="button">Read More <span></span></button></Link>
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
                                    <Link to="/Electricscooter"><button type="button">Read More <span></span></button></Link>
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
                                    <Link to="/Electricscooter"><button type="button">Read More <span></span></button></Link>
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


            <Footer />


        </div>
    )
}
