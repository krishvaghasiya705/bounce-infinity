import React from 'react';
import "./TestRideSelectionSection.scss"

const dates = [
    { day: "07 March", weekday: "Thursday" },
    { day: "08 March", weekday: "Friday" },
    { day: "09 March", weekday: "Saturday" },
    { day: "10 March", weekday: "Sunday" },
    { day: "11 March", weekday: "Monday" },
    { day: "12 March", weekday: "Tuesday" },
    { day: "13 March", weekday: "Wednesday" },
    { day: "14 March", weekday: "Thursday" },
    { day: "15 March", weekday: "Friday" },
    { day: "16 March", weekday: "Saturday" },
    { day: "17 March", weekday: "Sunday" },
];

const timeSlots = [
    "09:00 AM TO 12:00 PM",
    "12:00 PM TO 03:00 PM",
    "03:00 PM TO 06:00 PM",
    "06:00 PM TO 09:00 PM"
];

function TestRideSelectionSection() {
    return (
        <div>
            <div className="select-ride-main">
                <div className="select-div-container">
                    <div className="slect-ride-title">
                        <h5>Select a Test Ride Day</h5>
                    </div>
                    <div className="date-section-div-main">
                        {dates.map((date, index) => (
                            <button key={index} type="button">
                                <h6>{date.day}</h6>
                                <p>{date.weekday}</p>
                            </button>
                        ))}
                    </div>
                    {/* <div className="date-section-div-main-two">
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
                    </div> */}

                    <div className="slect-ride-date-border-one-main"></div>


                    <div className="time-slot-title-main">
                        <h1>Time Slot</h1>
                    </div>
                    <div className="time-slot-button-main">
                        {timeSlots.map((slot, index) => (
                            <button key={index} type="button">
                                <h2>{slot}</h2>
                            </button>
                        ))}
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
        </div>
    )
}

export default TestRideSelectionSection;
