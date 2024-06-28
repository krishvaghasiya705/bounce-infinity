import React from 'react';
import "./PortableBatterySectionHome.scss";
import batterycharginggirl from "../../../assets/image/batterycharginggirl.png";

function PortableBatterySectionHome() {
    return (
        <div>
            <div class="battery-section-main" data-aos="fade-up">
                <div class="container-battery">
                    <div class="portable-battery-title-main">
                        <h4>Portable battery</h4>
                    </div>
                    <div class="charge-pera-box-main-flex">
                        <div class="charge-pera-box-one" data-aos="fade-right">
                            <h5>Charge everywhere at any plug point.</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        </div>
                        <div class="charge-pera-box-two" data-aos="fade-left">
                            <img src={batterycharginggirl} alt="batterycharginggirl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortableBatterySectionHome;
