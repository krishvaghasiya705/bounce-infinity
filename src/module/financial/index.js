import React from 'react';
import Headerone from "../../common/headerone"
import Footer from "../../common/footer";
import "./financialpage.scss";
import financialherobanner from "../../assets/financialimage/Rectangle 32.png"
import pressimageone from "../../assets/financialimage/pressimage1.png"
import pressimagetwo from "../../assets/financialimage/pressimage2.png"
import pressimagethree from "../../assets/financialimage/pressimage3.png"
import pdficon from "../../assets/financialimage/pdf icon.png";

export default function Financial() {

    return (
        <div>





            <Headerone />










            <div className="finance-hero-banner-main">
                <img src={financialherobanner} alt="financialherobanner" />
                <div className="financial-title-main">
                    <h1>Financials</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>




            <div className="press-statement-fn-page-main-back">
                <div className="press-statement-container-main">
                    <div className="press-statement-title-main">
                        <h2>Press Statement</h2>
                    </div>
                    <div className="press-statement-card-main-flx-div">
                        <div className="press-card-box-one-main">
                            <img src={pressimageone} alt="pressimageone" />
                            <div className="press-card-detail-main">
                                <h3>Unaudited Financial Results</h3>
                                <p>December 2023</p>
                            </div>
                        </div>

                        <div className="press-card-box-one-main">
                            <img src={pressimagetwo} alt="pressimageone" />
                            <div className="press-card-detail-main">
                                <h3>Unaudited Financial Results</h3>
                                <p>December 2023</p>
                            </div>
                        </div>

                        <div className="press-card-box-one-main">
                            <img src={pressimagethree} alt="pressimageone" />
                            <div className="press-card-detail-main">
                                <h3>Unaudited Financial Results</h3>
                                <p>December 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="report-section-back-main">
                <div className="report-section-container-main">
                    <div className="report-section-main-input-fl">
                        <select>
                            <option value="1">Select Report Type</option>
                            <option value="2">Select Report Type</option>
                            <option value="3">Select Report Type</option>
                        </select>

                        <select>
                            <option value="1">Select Year</option>
                            <option value="2">Select Year</option>
                            <option value="3">Select Year</option>
                        </select>
                    </div>
                    <div className="report-annual-card-fl-main">
                        <div className="report-annual-card-box-one">
                            <div className="annual-card-top-box-main"></div>
                            <div className="annual-report-detail-main">
                                <img src={pdficon} alt="pdficon" />
                                <div className="annual-report-detail-inner">
                                    <h3>Annual Report</h3>
                                    <p>July 2023</p>
                                </div>
                            </div>
                        </div>

                        <div className="report-annual-card-box-one">
                            <div className="annual-card-top-box-main"></div>
                            <div className="annual-report-detail-main">
                                <img src={pdficon} alt="pdficon" />
                                <div className="annual-report-detail-inner">
                                    <h3>Annual Report</h3>
                                    <p>July 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />



        </div>
    )
}
