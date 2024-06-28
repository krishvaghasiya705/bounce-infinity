import React from 'react';
import PropTypes from 'prop-types';
import "./TestRideBoxSection.scss";

function TestRideBoxSection({ title, description, buttons }) {
    return (
        <div className="take-ride-box-main">
            <div className="take-ride-container">
                <div className="take-box-flexinner-main">
                    <div>
                        <div className="take-ride-title-main">
                            <h2>{title}</h2>
                        </div>
                        <div className="take-ride-pera-main">
                            <p>{description}</p>
                        </div>
                        <div className="take-ride-button-two-button-main">
                            {buttons.map((button, index) => (
                                <button key={index} type="submit">{button}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

TestRideBoxSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function App() {
    const title = "Take a test ride without moving an inch";
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    const buttons = ["Test Ride at Dealership", "Test Ride at Doorstep"];

    return (
        <div>
            <TestRideBoxSection title={title} description={description} buttons={buttons} />
        </div>
    );
}

export default App;
