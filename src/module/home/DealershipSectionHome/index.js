import React from 'react';
import "./DealershipSectionHome.scss";
import rightarrow from "../../../assets/image/rightarrow.png";
import rightarrowt from "../../../assets/image/rightarrowt.png";

function DealershipSectionHome() {
    return (
        <div>
            <div class="dealership-sction-main" data-aos="fade-up">
                <div class="container-dealer-ship-main">
                    <div class="dealer-ship-title-main">
                        <h1>Dealership Section</h1>
                    </div>
                    <div class="dealer-ship-table-main">
                        <div class="pincode-div-main" data-aos="fade-up">
                            <div class="pincode-title-main">
                                <h2>PIN Code</h2>
                                <div class="pincode-inp-main">
                                    <input type="text" placeholder="Enter PIN Code" />
                                    <button type="submit">GO</button>
                                </div>
                            </div>
                            <h3 data-aos="fade-up">OR</h3>
                            <div class="detect-nearby-button" data-aos="fade-up">
                                <button type="submit">Detect Nearby Dealers</button>
                            </div>
                        </div>

                        <div class="dtect-border-btm" data-aos="fade-up"></div>

                        <div class="llp-boxes-main" data-aos="fade-up">
                            <div className="llp-box-one">
                                <h4>Patel Motors Pvt LLP</h4>
                                <div className="marcus-name-div-main">
                                    <p>Marcus Dias</p>
                                    <img src={rightarrow} alt="rightarrow" />
                                    <div className="right-arrow-div-hvr">
                                        <img src={rightarrowt} alt="rightarrowt" />
                                    </div>
                                </div>
                                <span>1.4 km</span>
                            </div>

                            <div className="llp-box-one">
                                <h4>Patel Motors Pvt LLP</h4>
                                <div className="marcus-name-div-main">
                                    <p>Marcus Dias</p>
                                    <img src={rightarrow} alt="rightarrow" />
                                    <div className="right-arrow-div-hvr">
                                        <img src={rightarrowt} alt="rightarrowt" />
                                    </div>
                                </div>
                                <span>1.4 km</span>
                            </div>

                            <div className="llp-box-one">
                                <h4>Patel Motors Pvt LLP</h4>
                                <div className="marcus-name-div-main">
                                    <p>Marcus Dias</p>
                                    <img src={rightarrow} alt="rightarrow" />
                                    <div className="right-arrow-div-hvr">
                                        <img src={rightarrowt} alt="rightarrowt" />
                                    </div>
                                </div>
                                <span>1.4 km</span>
                            </div>


                            <div className="llp-box-one">
                                <h4>Patel Motors Pvt LLP</h4>
                                <div className="marcus-name-div-main">
                                    <p>Marcus Dias</p>
                                    <img src={rightarrow} alt="rightarrow" />
                                    <div className="right-arrow-div-hvr">
                                        <img src={rightarrowt} alt="rightarrowt" />
                                    </div>
                                </div>
                                <span>1.4 km</span>
                            </div>


                            <div className="llp-box-one">
                                <h4>Patel Motors Pvt LLP</h4>
                                <div className="marcus-name-div-main">
                                    <p>Marcus Dias</p>
                                    <img src={rightarrow} alt="rightarrow" />
                                    <div className="right-arrow-div-hvr">
                                        <img src={rightarrowt} alt="rightarrowt" />
                                    </div>
                                </div>
                                <span>1.4 km</span>
                            </div>


                            <div className="llp-box-one">
                                <h4>Patel Motors Pvt LLP</h4>
                                <div className="marcus-name-div-main">
                                    <p>Marcus Dias</p>
                                    <img src={rightarrow} alt="rightarrow" />
                                    <div className="right-arrow-div-hvr">
                                        <img src={rightarrowt} alt="rightarrowt" />
                                    </div>
                                </div>
                                <span>1.4 km</span>
                            </div>
                        </div>

                        <div class="show-more-mobile-button-div" data-aos="fade-up">
                            <h1>Show more</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealershipSectionHome;
