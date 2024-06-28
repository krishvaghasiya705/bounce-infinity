import React, { useEffect, useRef, useState } from 'react';
import "./Herobanner.scss";

import scootyone from "../../../assets/image/scooty1.png";
import scootytwo from "../../../assets/image/scooty2.png";
import scootythree from "../../../assets/image/scooty3.png";


// import scooty1 from "../../../assets/pricingimage/redscooter.png";
// import scooty2 from "../../../assets/image/scooty2.png";
// import scooty3 from "../../../assets/image/scooty3.png";


function Herobanner() {

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

    const topRef = useRef(null);

    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);
    return (
        <div>
            <div className="herobanner-back-ground-align-main-div" ref={topRef}>
                <div className="herobanner-back-ground-div-one">
                    <div className="herobanner-title-main-div">
                        <h1 data-aos="fade-up">Bounce Infinity Electric Scooters</h1>
                        <p data-aos="fade-up" data-aos-delay="200">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                        <button type="submit" data-aos="fade-up" data-aos-delay="400">Reserve for 499/-</button>
                    </div>
                    <div className="herobanner-image-changer-button-main-div">
                        <button onClick={() => handleImageChange(scootyone)} type="button" className={currentImage === scootyone ? 'active' : ''}></button>
                        <button onClick={() => handleImageChange(scootytwo)} type="button" className={currentImage === scootytwo ? 'active' : ''}></button>
                        <button onClick={() => handleImageChange(scootythree)} type="button" className={currentImage === scootythree ? 'active' : ''}></button>
                    </div>
                </div>
                <div className="herobanner-back-ground-div-two">
                    <div className="scooter-back-div-ab-main">
                        <div className="scooter-image-back-ground-main">
                            <img src={currentImage} alt="scooter" data-aos="zoom-in" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="herobanner-mobile" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-offset="200">
                <div className="herobanner-mobile-main">
                    <div>
                        <div className="bounce-title-div-main" data-aos="fade-down">
                            <h1>Bounce Infinity Electric Scooters</h1>
                        </div>
                        <div className="bounce-pera-div-main" data-aos="fade-up" data-aos-delay="200">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                        </div>
                        <div className="herobanner-mobile-button-main" data-aos="fade-up" data-aos-delay="400">
                            <button type='submit'>Reserve for 499/-</button>
                        </div>
                    </div>
                    <div className="herobanner-mobile-image-changer-button-main-div">
                        <button onClick={() => handleImageChange(scootyone)} type="button" className={currentImage === scootyone ? 'active' : ''}></button>
                        <button onClick={() => handleImageChange(scootytwo)} type="button" className={currentImage === scootytwo ? 'active' : ''}></button>
                        <button onClick={() => handleImageChange(scootythree)} type="button" className={currentImage === scootythree ? 'active' : ''}></button>
                    </div>
                    <div className="herobanner-mobile-bike-image" data-aos="zoom-in" data-aos-delay="800">
                        <img src={currentImage} alt="scooter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herobanner;
