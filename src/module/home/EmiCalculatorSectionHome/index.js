import React from 'react';
import "./EmiCalculatorSectionHome.scss"
import rupees from "../../../assets/cardimage/Vector.png";

function EmiCalculatorSectionHome() {
    return (
        <div>
            <div className="emi-calculator-div-main">
                <div className='emi-container' data-aos="fade-up">
                    <div className="emi-calculator-title">
                        <h1>EMI Calculator</h1>
                    </div>
                    <div className="loan-payment-boxes-main">
                        <div>
                            <div className="loan-payment-box-one" data-aos="fade-up">
                                <div className="loan-ammount-box-one">
                                    <div className="loan-ammount-title">
                                        <h2>Loan Amount</h2>
                                        <p>30,000</p>
                                    </div>
                                    <div className="loan-ammount-increase-line-main">
                                        <div className="loan-ammount-increase-line-red-one"></div>
                                        <div className="loan-ammount-increase-line-red-two"></div>
                                    </div>
                                </div>
                                <div className="loan-ammount-box-one">
                                    <div className="loan-ammount-title">
                                        <h2>Loan Tenure</h2>
                                        <p>8 Months</p>
                                    </div>
                                    <div className="loan-ammount-increase-line-main">
                                        <div className="loan-ammount-increase-line-red-one"></div>
                                        <div className="loan-ammount-increase-line-red-two"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="loan-payment-box-two" data-aos="fade-up">
                            <div className="payment-div-main-flex">
                                <div className="payment-div-one-main">
                                    <div className="down-payment-div-main">
                                        <h3>Down Payment</h3>
                                        <p><img src={rupees} alt="rupees" />1,04,422</p>
                                    </div>
                                    <p>Including 0% Processing fee other charges</p>
                                </div>
                                <div className="payment-div-two-main">
                                    <div className="down-payment-div-main">
                                        <h3>Monthly EMI</h3>
                                        <p><img src={rupees} alt="rupees" />875</p>
                                    </div>
                                    <p>With 9.99% Rate of Interest</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="down-payment-div-main-last" data-aos="fade-up">
                        <div className="down-paymane-div-one">
                            <h1>Down Payment</h1>
                            <input type="number" placeholder='Enter amount' />
                        </div>
                        <div className="down-paymane-div-two">
                            <h1>Interest</h1>
                            <select name="Select Interest">
                                <option value="1">Select Interest</option>
                                <option value="2">Select Interest</option>
                            </select>
                        </div>
                    </div>

                    <div className="benefits-box-main" data-aos="fade-up">
                        <div className="benefits-title-main">
                            <div className="dot-main"></div>
                            <h1>Benefits of Easy Finance</h1>
                        </div>
                        <div className="benefits-types-div-main">
                            <p><span></span>Loan approval in 5 minutes</p>
                            <p><span></span>Digital pre-approved offer</p>
                            <p><span></span>Low down payment</p>
                            <p><span></span>Easy documentation</p>
                            <p><span></span>Attractive interest rates</p>
                            <p><span></span>Zero processing fees</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmiCalculatorSectionHome;
