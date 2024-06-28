import React, { useState } from 'react';
import "./TestRideDetailsFillUpSection.scss";

function TestRideDetailsFillUpSection() {
    const [address, setAddress] = useState('');
    const [pinCode, setPinCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., send data to API
        console.log('Address:', address);
        console.log('Pin Code:', pinCode);
    }
    return (
        <div>
            <div className="addresss-div-rsp-main">
                <div className="address-container">
                    <div className="address-title-main">
                        <h1>Please fill your address</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="adddress-input-section-main">
                        <div className="address-input-box-one">
                            <h2>Address</h2>
                            <input
                                type="text"
                                placeholder='Enter your address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div className="address-input-box-one">
                            <h2>Pin Code</h2>
                            <input
                                type="text"
                                placeholder='Enter your pincode'
                                value={pinCode}
                                onChange={(e) => setPinCode(e.target.value)}
                            />
                        </div>
                    </form>

                    <div className="done-button-main">
                        <button type="submit">Done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestRideDetailsFillUpSection;