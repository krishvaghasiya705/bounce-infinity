import React, { useState } from 'react';
import "./dealershipdetail.scss";
import Headerone from "../../common/headerone";
import Footer from "../../common/footer";
import halfscooter from "../../assets/dealershipimage/halfscooter.png";
import esscooter from "../../assets/dealershipimage/E1 SPORTY RED 3.png";
import herobanerdetail from "../../assets/dealersgipdetailimage/Rectangle 33.png";
import locationdetail from "../../assets/dealersgipdetailimage/location.png";
import clockdetail from "../../assets/dealersgipdetailimage/clock.png";
import phonedetail from "../../assets/dealersgipdetailimage/phone.png";
import maildetail from "../../assets/dealersgipdetailimage/mail.png";
import { CgClose } from "react-icons/cg";;

export default function Dealershipdetail() {


    const [IsOpen, SetIsOpen] = useState(false);

    const openModal = () => {
        SetIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        SetIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };


    return (
        <div>

            <Headerone />





            <div className="dealershipdetails-herobanner-main">
                <img src={herobanerdetail} alt="herobanerdetail" />
            </div>




            <div className="bounce-elc-sc-back-main">
                <div className="bounce-elc-sc-container">
                    <div className="bounce-elc-sc-flx-main">
                        <div className="bounce-el-box-main">
                            <h2>Bounce Infinity Electric Scooter (Jangra Automobiles)</h2>
                            <div className="bouncce-locate-pera">
                                <img src={locationdetail} alt="locationdetail" />
                                <p>WZ-182, Jangra Batteries, Palam Village, Delhi, Delhi, 110045</p>
                            </div>
                            <div className="bouncce-locate-pera">
                                <img src={clockdetail} alt="clockdetail" />
                                <p>Mon - Sun: 10 am - 8 pm</p>
                            </div>
                            <div className="bouncce-locate-pera">
                                <img src={phonedetail} alt="phonedetail" />
                                <p>+91 95846 12586</p>
                            </div>
                            <div className="bouncce-locate-pera">
                                <img src={maildetail} alt="maildetail" />
                                <p>patelmotores@gmail.com</p>
                            </div>
                            <div className="book-button">
                                <button onClick={openModal} type="submit">Book a Test Ride</button>
                            </div>
                        </div>

                        <div className="iframe-div-main">
                            <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2646888957643!2d-79.39355380833149!3d43.64266109581092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d034de1ea5%3A0x179beb81d9aa1511!2sEntertainment%20District%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1715084083390!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iFrame>
                        </div>
                    </div>
                </div>
            </div>

            {IsOpen && (
                <div className="modal-backdrop" onClick={handleBackdropClick}>
                    <div className="modal-content">
                        <div className="model-close-button">
                            <h3>Book a Test Ride</h3>
                            <button onClick={closeModal}>
                                <CgClose />
                            </button>
                        </div>
                        <div className="model-details-main">
                            <div className="model-main-button">
                                <button type="submit">
                                    <p>Test Ride at Doorstep</p>
                                </button>
                                <div className="second-model-button">
                                    <button type="submit">Test Ride at Dealership</button>
                                </div>
                            </div>

                            <div className="model-main-button-mobile">
                                <button type="submit">Ride at Dealership</button>
                                <button type="submit">Ride at Doorstep</button>
                            </div>

                            <div className="model-main-input-contant">
                                <div className="model-input-box-one">
                                    <h5>Name</h5>
                                    <input type="text" placeholder="Enter your name" />
                                </div>

                                <div className="model-input-box-one">
                                    <h5>Phone number</h5>
                                    <input type="number" placeholder="Enter your phone number" />
                                </div>

                                <div className="input-box-four">
                                    <h5>Phone number</h5>
                                    <input id="input-num" type="number" placeholder="Enter your phone number" />
                                    <select>
                                        <option value="1">+91</option>
                                        <option value="2">+92</option>
                                        <option value="3">+93</option>
                                    </select>
                                </div>

                                <div className="model-input-box-one">
                                    <h5>Date</h5>
                                    <select>
                                        <option selected value="1">Select date</option>
                                        <option value="2">Select date</option>
                                        <option value="3">Select date</option>
                                    </select>
                                </div>

                                <div className="model-input-box-one">
                                    <h5>Time slot</h5>
                                    <select>
                                        <option selected value="1">Select time slot</option>
                                        <option value="2">Select time slot</option>
                                        <option value="3">Select time slot</option>
                                    </select>
                                </div>

                                <div className="model-input-box-one">
                                    <h5>Pincode</h5>
                                    <input type="text" placeholder="Enter your pincode" />
                                </div>

                            </div>

                            <div className="confirm-button">
                                <button type="submit">Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}














            <div className="subscribe-box-main">
                <div className="sub-box-container">
                    <div className="sub-box-back-main">
                        <div className="sub-box-inner-main">
                            <h2>Subscribe & be the first to get updates</h2>
                            <div className="input-box-two">
                                <input type="number" placeholder='Enter you Phone no' />
                                <select>
                                    <option value="1">+91</option>
                                    <option value="2">+92</option>
                                    <option value="3">+93</option>
                                </select>
                            </div>
                            <button type="submit">Subscribe</button>
                        </div>
                        <div className="half-scooter-main">
                            <img src={halfscooter} alt="halfscooter" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="subscribe-box-mobile">
                <div className="subscribe-box-mobile-main">
                    <div className="es-scooter-mobile-main">
                        <img src={esscooter} alt="esscooter" />
                    </div>
                    <div className="subscribe-mobile-title">
                        <h2>Subscribe & be the first to get updates</h2>
                    </div>
                    <div className="input-box-three">
                        <input type="number" placeholder='Enter you Phone no' />
                        <select>
                            <option value="1">+91</option>
                            <option value="2">+92</option>
                            <option value="3">+93</option>
                        </select>
                    </div>
                    <button type="submit">Subscribe</button>
                </div>
            </div>

            <Footer />

        </div>
    )
}
