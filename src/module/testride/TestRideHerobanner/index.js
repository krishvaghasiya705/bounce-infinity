import React, { useEffect, useRef } from 'react';
import "./TestRideHerobanner.scss";
import testriderscooterone from "../../../assets/testrideimage/test-ride-scooter-one.png";

function TestRideHerobanner() {
    const topRef = useRef(null);

    useEffect(() => {
        topRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div>
            <div className="herobanner-test-ride" ref={topRef} >
                <img src={testriderscooterone} alt="testriderscooterone" />
            </div>
        </div>
    )
}

export default TestRideHerobanner;