import React from 'react'
import "./OurProductSectionHome.scss";
import groupscooterone from "../../../assets/image/Groupone.png";
import vectorone from "../../../assets/image/Vector.png";
import vectortwo from "../../../assets/image/Vector2.png";
import vectorthree from "../../../assets/image/vector3.png";
import vectorfour from "../../../assets/image/Vector4.png";

function OurProductSectionHome() {
    return (
        <div>
            <div className="our-product-div-main">
                <div className="container-prd" data-aos="fade-up">
                    <div className="product-title-main">
                        <h1>Our Products</h1>
                    </div>
                </div>

                <div className="container-prd">
                    <div className="prodduct-scooter-image-div-main" data-aos="fade-up" data-aos-delay="100">
                        <div className="product-type-box-side-main">
                            <div className="product-type-box-one">
                                <button type='submit'>E1</button>
                                <button type='submit'>E1+</button>
                                <button type='submit'>E1LE</button>
                            </div>
                            <div className="product-type-box-two" data-aos="fade-right" data-aos-delay="200">
                                <button type='button'>
                                    <span>
                                        <p></p>
                                    </span>
                                </button>

                                <strong>
                                    <span>
                                        <p></p>
                                    </span>
                                </strong>

                                <strong id='second-chng'>
                                    <span>
                                        <p></p>
                                    </span>
                                </strong>
                            </div>
                        </div>
                        <div className="prd-main-image-div" data-aos="zoom-in" data-aos-delay="300">
                            <img data-aos="zoom-in" src={groupscooterone} alt="groupscooterone" />
                            <div className="prd-detail-abt-box-side-main">
                                <div className="prd-detail-abt-box-one" data-aos="fade-left" data-aos-delay="400">
                                    <img src={vectorone} alt="vectorone" />
                                    <p>Real World Range</p>
                                    <span>100+ km</span>
                                </div>
                                <div className="prd-detail-abt-box-two" data-aos="fade-left" data-aos-delay="500">
                                    <img src={vectortwo} alt="vectortwo" />
                                    <p>Top speed</p>
                                    <span>55kmph</span>
                                </div>
                                <div className="prd-detail-abt-box-three" data-aos="fade-left" data-aos-delay="600">
                                    <img src={vectorthree} alt="vectorthree" />
                                    <p>Starts From</p>
                                    <span>₹ 1,04,999</span>
                                </div>
                                <div className="prd-detail-abt-box-four" data-aos="fade-left" data-aos-delay="700">
                                    <img src={vectorfour} alt="vectorfour" />
                                    <p>Battery</p>
                                    <span>2.5kWh</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-scooter-mobile-div-main">
                        <div className="our-prd-mobile-div-inner" data-aos="fade-up" data-aos-delay="100">
                            <div className="prd-scooter-mobile-main" data-aos="zoom-in" data-aos-delay="200">
                                <img src={groupscooterone} alt="groupscooterone" />
                            </div>

                            <div className="prd-detail-abt-box-side-main-mobile">
                                <div className="prd-detail-abt-box-one" data-aos="fade-left" data-aos-delay="300">
                                    <img src={vectorone} alt="vectorone" />
                                    <p>Real World Range</p>
                                    <span>100+ km</span>
                                </div>
                                <div className="prd-detail-abt-box-two" data-aos="fade-left" data-aos-delay="400">
                                    <img src={vectortwo} alt="vectortwo" />
                                    <p>Top speed</p>
                                    <span>55kmph</span>
                                </div>
                                <div className="prd-detail-abt-box-three" data-aos="fade-left" data-aos-delay="500">
                                    <img src={vectorthree} alt="vectorthree" />
                                    <p>Starts From</p>
                                    <span>₹ 1,04,999</span>
                                </div>
                                <div className="prd-detail-abt-box-four" data-aos="fade-left" data-aos-delay="600">
                                    <img src={vectorfour} alt="vectorfour" />
                                    <p>Battery</p>
                                    <span>2.5kWh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProductSectionHome;