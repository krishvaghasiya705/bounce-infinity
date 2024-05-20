import React, { useEffect, useRef, useState } from 'react';
import "./testride.scss";
import testriderscooterone from "../../assets/testrideimage/test-ride-scooter-one.png";
import magnify from "../../assets/testrideimage/maginfine.png"
import sidearrrone from "../../assets/testrideimage/sidearrone.png";
import locatinone from "../../assets/testrideimage/locationone.png";
import phoneone from "../../assets/testrideimage/phoneone.png";
import sidearrrtow from "../../assets/testrideimage/sidearrowtwo.png";
import locatintwo from "../../assets/testrideimage/locationtwo.png";
import phonetwo from "../../assets/testrideimage/phonetwo.png";
// import { Link } from 'react-router-dom';


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


export default function Testride() {

    const topRef = useRef(null);

    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth" });
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
            <div className="herobanner-test-ride" ref={topRef} >
                <img src={testriderscooterone} alt="testriderscooterone" />
            </div>
            <div className="book-ride-section-main">
                <div className="book-ride-section-container">
                    <div className="book-ride-box-back-main">
                        <div>
                            <div className="book-test-ride-title">
                                <h1>Book A Test Ride Today</h1>
                            </div>
                            <div className="experience-pera-main">
                                <p>Experience the Bounce Infinity at your doorstep.</p>
                            </div>
                            <div className="test-ride-box-inner-input">
                                <input type="text" placeholder='Search' />
                                <img src={magnify} alt="magnify" />
                            </div>
                            <div className="test-drive-loaction-boxes-main">
                                <button type="submit">Delhi</button>
                                <button type="submit">Bangalore</button>
                                <button type="submit">Hyderabad</button>
                                <button type="submit">Jaipur</button>
                                <button type="submit">Mumbai</button>
                                <button type="submit">Vijayawada</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="take-ride-box-main">
                <div className="take-ride-container">
                    <div className="take-box-flexinner-main">
                        <div>
                            <div className="take-ride-title-main">
                                <h2>Take a test ride without moving an inch</h2>
                            </div>
                            <div className="take-ride-pera-main">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="take-ride-button-two-button-main">
                                <button type="submit">Test Ride at Dealership</button>
                                <button type="submit">Test Ride at Doorstep</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="addresss-div-rsp-main">
                <div className="address-container">
                    <div className="address-title-main">
                        <h1>Please fill your address</h1>
                    </div>
                    <div className="adddress-input-section-main">
                        <div className="address-input-box-one">
                            <h2>Address</h2>
                            <input type="text" placeholder='Enter your address' />
                        </div>

                        <div className="address-input-box-one">
                            <h2>Pin Code</h2>
                            <input type="text" placeholder='Enter your pincode' />
                        </div>
                    </div>

                    <div className="done-button-main">
                        <button type="submit">Done</button>
                    </div>
                </div>
            </div>




            <div className="dealer-ship-selction-section-main">
                <div className="dealer-ship-selction-container">
                    <div className="dealer-ship-box-title-main">
                        <h3>Please Select a dealership</h3>
                    </div>
                    <div className="dealer-ship-selcetion-box-section-main">
                        <div className="dealer-ship-box-one">
                            <div className="dealer-title-flx-main">
                                <h4>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h4>
                                <img src={sidearrrtow} alt="sidearrrtwo" />
                                <div className="side-hv">
                                    <img src={sidearrrone} alt="sidearrrone" />
                                </div>
                            </div>
                            <div className="location-dealer-flx-main">
                                <img src={locatintwo} alt="locatintwo" />
                                <div className="loc-hv">
                                    <img src={locatinone} alt="locatinone" />
                                </div>
                                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
                            </div>
                            <div className="phone-dealer-ship-flx-main">
                                <img src={phonetwo} alt="phonetwo" />
                                <div className="phon-hv">
                                    <img src={phoneone} alt="phoneone" />
                                </div>
                                <span>+91 97569 64787</span>
                            </div>
                        </div>
                        <div className="dealer-ship-box-one">
                            <div className="dealer-title-flx-main">
                                <h4>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h4>
                                <img src={sidearrrtow} alt="sidearrrtwo" />
                                <div className="side-hv">
                                    <img src={sidearrrone} alt="sidearrrone" />
                                </div>
                            </div>
                            <div className="location-dealer-flx-main">
                                <img src={locatintwo} alt="locatintwo" />
                                <div className="loc-hv">
                                    <img src={locatinone} alt="locatinone" />
                                </div>
                                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
                            </div>
                            <div className="phone-dealer-ship-flx-main">
                                <img src={phonetwo} alt="phonetwo" />
                                <div className="phon-hv">
                                    <img src={phoneone} alt="phoneone" />
                                </div>
                                <span>+91 97569 64787</span>
                            </div>
                        </div>
                        <div className="dealer-ship-box-one">
                            <div className="dealer-title-flx-main">
                                <h4>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h4>
                                <img src={sidearrrtow} alt="sidearrrtwo" />
                                <div className="side-hv">
                                    <img src={sidearrrone} alt="sidearrrone" />
                                </div>
                            </div>
                            <div className="location-dealer-flx-main">
                                <img src={locatintwo} alt="locatintwo" />
                                <div className="loc-hv">
                                    <img src={locatinone} alt="locatinone" />
                                </div>
                                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
                            </div>
                            <div className="phone-dealer-ship-flx-main">
                                <img src={phonetwo} alt="phonetwo" />
                                <div className="phon-hv">
                                    <img src={phoneone} alt="phoneone" />
                                </div>
                                <span>+91 97569 64787</span>
                            </div>
                        </div>
                        <div className="dealer-ship-box-one">
                            <div className="dealer-title-flx-main">
                                <h4>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h4>
                                <img src={sidearrrtow} alt="sidearrrtwo" />
                                <div className="side-hv">
                                    <img src={sidearrrone} alt="sidearrrone" />
                                </div>
                            </div>
                            <div className="location-dealer-flx-main">
                                <img src={locatintwo} alt="locatintwo" />
                                <div className="loc-hv">
                                    <img src={locatinone} alt="locatinone" />
                                </div>
                                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
                            </div>
                            <div className="phone-dealer-ship-flx-main">
                                <img src={phonetwo} alt="phonetwo" />
                                <div className="phon-hv">
                                    <img src={phoneone} alt="phoneone" />
                                </div>
                                <span>+91 97569 64787</span>
                            </div>
                        </div>
                        <div className="dealer-ship-box-one">
                            <div className="dealer-title-flx-main">
                                <h4>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h4>
                                <img src={sidearrrtow} alt="sidearrrtwo" />
                                <div className="side-hv">
                                    <img src={sidearrrone} alt="sidearrrone" />
                                </div>
                            </div>
                            <div className="location-dealer-flx-main">
                                <img src={locatintwo} alt="locatintwo" />
                                <div className="loc-hv">
                                    <img src={locatinone} alt="locatinone" />
                                </div>
                                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
                            </div>
                            <div className="phone-dealer-ship-flx-main">
                                <img src={phonetwo} alt="phonetwo" />
                                <div className="phon-hv">
                                    <img src={phoneone} alt="phoneone" />
                                </div>
                                <span>+91 97569 64787</span>
                            </div>
                        </div>
                        <div className="dealer-ship-box-one">
                            <div className="dealer-title-flx-main">
                                <h4>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h4>
                                <img src={sidearrrtow} alt="sidearrrtwo" />
                                <div className="side-hv">
                                    <img src={sidearrrone} alt="sidearrrone" />
                                </div>
                            </div>
                            <div className="location-dealer-flx-main">
                                <img src={locatintwo} alt="locatintwo" />
                                <div className="loc-hv">
                                    <img src={locatinone} alt="locatinone" />
                                </div>
                                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
                            </div>
                            <div className="phone-dealer-ship-flx-main">
                                <img src={phonetwo} alt="phonetwo" />
                                <div className="phon-hv">
                                    <img src={phoneone} alt="phoneone" />
                                </div>
                                <span>+91 97569 64787</span>
                            </div>
                        </div>
                    </div>

                    <div className="show-more-nn">
                        <div className="show-more-div">
                            <a href="home">Show more</a>
                        </div>
                    </div>
                </div>
            </div>




            <div className="select-ride-main">
                <div className="select-div-container">
                    <div className="slect-ride-title">
                        <h5>Select a Test Ride Day</h5>
                    </div>
                    <div className="date-section-div-main">
                        <button type="submit">
                            <h6>07 March</h6>
                            <p>Thursday</p>
                        </button>
                        <button type="submit">
                            <h6>08 March</h6>
                            <p>Thursday</p>
                        </button>
                        <button type="submit">
                            <h6>09 March</h6>
                            <p>Thursday</p>
                        </button>
                        <button type="submit">
                            <h6>10 March</h6>
                            <p>Thursday</p>
                        </button>
                        <button type="submit">
                            <h6>11 March</h6>
                            <p>Thursday</p>
                        </button>
                        <button type="submit">
                            <h6>12 March</h6>
                            <p>Thursday</p>
                        </button>
                        <button type="submit">
                            <h6>13 March</h6>
                            <p>Thursday</p>
                        </button>
                    </div>
                    <div className="date-section-div-main-two">
                        <button type="submit">
                            <h6>14 March</h6>
                            <p>Thursday</p>
                        </button>
                        <button type="submit">
                            <h6>15 March</h6>
                            <p>Thursday</p>
                        </button>
                        <button type="submit">
                            <h6>16 March</h6>
                            <p>Thursday</p>
                        </button>
                        <button type="submit">
                            <h6>17 March</h6>
                            <p>Thursday</p>
                        </button>
                    </div>

                    <div className="slect-ride-date-border-one-main"></div>


                    <div className="time-slot-title-main">
                        <h1>Time Slot</h1>
                    </div>
                    <div className="time-slot-button-main">
                        <button type="submit">
                            <h2>09:00 AM TO 12:00 PM</h2>
                        </button>

                        <button type="submit">
                            <h2>09:00 AM TO 12:00 PM</h2>
                        </button>

                        <button type="submit">
                            <h2>09:00 AM TO 12:00 PM</h2>
                        </button>

                        <button type="submit">
                            <h2>09:00 AM TO 12:00 PM</h2>
                        </button>
                    </div>

                    <div className="personal-details-section-main">
                        <div className="personal-details-container">
                            <div className="personal-details-title-main">
                                <h3>Personal Details</h3>
                            </div>
                            <div className="personal-details-contact-main">
                                <div className="input-box-one">
                                    <h4>Full Name</h4>
                                    <input type="text" placeholder='Enter you full name' />
                                </div>

                                <div className="input-box-one">
                                    <h4>Email</h4>
                                    <input type="text" placeholder='Enter you email' />
                                </div>

                                <div className="input-box-sec">
                                    <h4>Phone no.</h4>
                                    <div className="input-box-two">
                                        <input type="number" placeholder='Enter you Phone no' />
                                        <select>
                                            <option value="1">+91</option>
                                            <option value="2">+92</option>
                                            <option value="3">+93</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="input-box-one">
                                    <h4>Pin code</h4>
                                    <input type="text" placeholder='Enter your pin code' />
                                </div>
                            </div>

                            <div className="book-test-ride-button">
                                <button type='submit'>Book a Test Ride</button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="personal-click-pera-container">
                    <div className="click-per-main">
                        <span></span>
                        <p>By clicking “Confirm Booking”, I am giving my consent to Bounce Electric 1 Pvt Limited and its service providers to hold my personal data and communicate with me by e-mail, SMS or phone call for test ride purposes.</p>

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


        </div>
    )
}
