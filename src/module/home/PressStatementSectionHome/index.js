import React, { useState } from 'react';
import "./PressStatementSectionHome.scss";
import pressone from "../../../assets/cardimage/pressone.png";
import presstwo from "../../../assets/cardimage/presstwo.png";
import pressthree from "../../../assets/cardimage/pressthree.png";

function PressStatementSectionHome() {
    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore);
    };

    const handleClick2 = () => {
        setShowMore2(!showMore2);
    };

    const handleClick3 = () => {
        setShowMore3(!showMore3);
    };
    return (
        <div>
            <div className="press-stm-section-main">
                <div className="container-press">
                    <div className="press-title-main">
                        <h1>Press Statement</h1>
                    </div>
                    <div className="press-card-div-main">
                        <div className="press-card-div-box-one" data-aos="fade-up" data-aos-duration="1000">
                            <img src={pressone} alt="pressone" />
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                                <div className={`pera-active-more ${showMore ? 'show' : ''}`}>
                                    Here is the second half of the paragraph. You can add more content here.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </p>
                            <button type='button' onClick={handleClick}>{showMore ? 'Show Less' : 'View more'}</button>
                        </div>

                        <div className="press-card-div-box-one" data-aos="fade-up" data-aos-duration="1000">
                            <img src={presstwo} alt="presstwo" />
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                                <div className={`pera-active-more ${showMore2 ? 'show' : ''}`}>
                                    Here is the second half of the paragraph. You can add more content here.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </p>
                            <button type='button' onClick={handleClick2}>{showMore2 ? 'Show Less' : 'View more'}</button>
                        </div>

                        <div className="press-card-div-box-one" data-aos="fade-up" data-aos-duration="1000">
                            <img src={pressthree} alt="pressthree" />
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                                <div className={`pera-active-more ${showMore3 ? 'show' : ''}`}>
                                    Here is the second half of the paragraph. You can add more content here.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </p>
                            <button type='button' onClick={handleClick3}>{showMore3 ? 'Show Less' : 'View more'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PressStatementSectionHome;
