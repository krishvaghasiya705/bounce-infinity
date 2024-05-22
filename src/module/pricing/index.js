import React from "react";
import "./PerformanceTiming.scss"
import Headerthree from "../../common/headerthree";
import Footer from "../../common/footer";
import rupees from "../../assets/cardimage/Vector.png";
import { Link } from 'react-router-dom';

export default function Pricing() {
    return (
        <div>

            <Headerthree />





            <div className="blank-div-social-detail"></div>






            <div className="pricing-section-second-box-main">
                <div className="pricing-section-container">

                    <div className="pricing-section-title-main">
                        <h1>Pricing Section</h1>
                    </div>
                    <div className="pricing-section-inp-section-main">
                        <div className="pricing-section-form-inp-one">
                            <h2>Select Variant</h2>
                            <div className="inp-first-main-div">
                                <select name="Select Variant">
                                    <option value={1}>Select Variant</option>
                                    <option value={2}>Select Variant</option>
                                    <option value={3}>Select Variant</option>
                                </select>
                            </div>
                        </div>
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
                    <div className="available-clr-title-main">
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
                        <div className="book-now-button">
                            <Link to={"/Accordian"}>
                                <button type='submit'>Book Now</button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>




            <Footer />



        </div>
    )
}
