import React, { useCallback, useEffect, useState } from 'react';
import "./PricingSectionHome.scss";
import rupees from "../../../assets/cardimage/Vector.png";
import scooty1 from "../../../assets/pricingimage/redscooter.png";
import scooty2 from "../../../assets/image/scooty2.png";
import scooty3 from "../../../assets/image/scooty3.png";

const images = [
    scooty1,
    scooty2,
    scooty3
];

function PricingSectionHome() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const changeImage = useCallback((index) => {
        if (isSliding) return;

        setIsSliding(true);

        setTimeout(() => {
            setCurrentImageIndex(index);
            setIsSliding(false);
        }, 500);
    }, [isSliding]);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % images.length;
            changeImage(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentImageIndex, changeImage]);
    return (
        <div>
            <div className="pricing-section-main" data-aos="fade-up">
                <div className="pricing-section-first-box-background-main">
                    <div className={`image-container-sc ${isSliding ? 'slide-sc' : ''}`}>
                        <img src={images[currentImageIndex]} alt="sliding" />
                    </div>
                    <div className="paginaation-button-div-main">
                        <div className="pagination-button-div-main">
                            {images.map((_, index) => (
                                <button key={index} className={index === currentImageIndex ? 'active' : ''} onClick={() => changeImage(index)}></button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pricing-section-second-box-main" data-aos="fade-left">
                    <div className="pricing-section-title-main">
                        <h1 data-aos="fade-right">Pricing Section</h1>
                    </div>
                    <div className="pricing-section-form-inp-one" data-aos="fade-up">
                        <h2>Select Variant</h2>
                        <div className="inp-first-main-div">
                            <select name="Select Variant">
                                <option value={1}>Select Variant</option>
                                <option value={2}>Select Variant</option>
                                <option value={3}>Select Variant</option>
                            </select>
                        </div>
                    </div>
                    <div className="pricing-section-form-inp-two" data-aos="fade-up">
                        <div className="pricing-section-form-inp-two-inner-inp-one">
                            <h3>Select State</h3>
                            <select name="Select state">
                                <option value={1}>Select state</option>
                                <option value={2}>Select state</option>
                            </select>
                        </div>
                        <div className="pricing-section-form-inp-two-inner-inp-two">
                            <h4>Select City</h4>
                            <select name="Select City">
                                <option value={1}>Select City</option>
                                <option value={2}>Select City</option>
                            </select>
                        </div>
                    </div>
                    <div className="available-clr-title-main" data-aos="fade-up">
                        <div className="avialable-clr-main">
                            <h5>Available color</h5>
                            <p>
                                <span></span>
                                <span></span>
                                <span></span>
                            </p>
                        </div>
                        <div className="showroom-prize-div-main">
                            <h6>Ex-Showroom Price (including charger and GST)</h6>
                            <p><img src={rupees} alt="rupees" /> 1,55,553</p>
                        </div>
                        <div className="fame-pera-div-main">
                            <p>FAME II Subsidy</p>
                            <span>- <img src={rupees} alt="rupees" /> 21,131</span>
                        </div>
                        <div className="subsidy-pera-div-main">
                            <h1>Subsidy from State Government</h1>
                            <span>- <img src={rupees} alt="rupees" /> 0</span>
                        </div>
                        <div className="border-div-prz-btm"></div>
                        <div className="effective-pera-main">
                            <h2>Effective Price</h2>
                            <span><img src={rupees} alt="rupees" /> 1,34,422</span>
                        </div>
                        <div className="price-pera-main">
                            <p>*The price displayed is subject to change, final Vehicle price may vary and will be applicable as on the date of delivery</p>
                        </div>
                        <div className="price-pera-main-two">
                            <p>* The price displayed above excludes road taxes, insurance, registration and other charges. Click on Book Now to find the detailed price breakup.</p>
                        </div>
                        <button type='submit' data-aos="flip-up">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingSectionHome;
