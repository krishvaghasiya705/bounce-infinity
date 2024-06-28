import React from 'react';
import "./ComparisonSectionHome.scss"
import prdprzone from "../../../assets/cardimage/Limited Edition Sparkle Black r-l 1.png";
import prdprztwo from "../../../assets/cardimage/E1 SPORTY RED 3.png";
import prdprzthreee from "../../../assets/image/E1grey.png";
import rupees from "../../../assets/cardimage/Vector.png";
import { Link } from 'react-router-dom';

function ComparisonSectionHome() {
    return (
        <div>
            <div className="container-prd">
                <div className="reserve-button-div-main" data-aos="fade-up">
                    <button type='button'>Reserve Now</button>
                </div>
            </div>

            <div className="compare-div-main-bacck-ground" data-aos="fade-in">
                <div className="container-compare">
                    <div className="compare-title-main-div" data-aos="zoom-in">
                        <h1>Comparison Between Models</h1>
                    </div>
                    <div className="product-and-detail-div-main">
                        <div className="product-prize-side-div-main" data-aos="fade-right">
                            <div className="product-prize-title">
                                <h1>Our Products</h1>
                            </div>
                            <div className="product-prize-div">
                                <a href="home">Price</a>
                                <a href="home">Product name</a>
                                <a href="home">Real World Range</a>
                                <a href="home">Top speed</a>
                                <a href="home">Battery</a>
                            </div>
                        </div>
                        <div className="product-image-card-and-prize-card-main">
                            <div className="product-prize-card-one" data-aos="flip-left">
                                <Link to={"/Banglore"}>
                                    <img src={prdprzone} alt="prdprzone" />
                                </Link>
                                <div className="product-prize-card">
                                    <h1><img src={rupees} alt="rupees" /> 1,08,064</h1>
                                    <h2>E1LE</h2>
                                    <h2>70+ km</h2>
                                    <h2>65kmph</h2>
                                    <h2>1.9kWh</h2>
                                </div>
                            </div>

                            <div className="product-prize-card-one" data-aos="flip-left">
                                <Link to={"/Banglore"}>
                                    <img src={prdprztwo} alt="prdprztwo" />
                                </Link>
                                <div className="product-prize-card">
                                    <h1><img src={rupees} alt="rupees" /> 1,08,064</h1>
                                    <h2>E1LE</h2>
                                    <h2>70+ km</h2>
                                    <h2>65kmph</h2>
                                    <h2>1.9kWh</h2>
                                </div>
                            </div>

                            <div className="product-prize-card-one" data-aos="flip-left">
                                <Link to={"/Banglore"}>
                                    <img src={prdprzthreee} alt="prdprzthreee" />
                                </Link>
                                <div className="product-prize-card">
                                    <h1><img src={rupees} alt="rupees" /> 1,08,064</h1>
                                    <h2>E1LE</h2>
                                    <h2>70+ km</h2>
                                    <h2>65kmph</h2>
                                    <h2>1.9kWh</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComparisonSectionHome;
