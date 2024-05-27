import React, { useState } from 'react';
import "./socialmediadetails.scss";
import Footer from "../../common/footer";
import Headertwo from "../../common/headertwo"
import detailsone from "../../assets/socialmediadetailsimage/detailsone.png"
import detailstwo from "../../assets/socialmediadetailsimage/detailstwo.png"
import detailsthree from "../../assets/socialmediadetailsimage/detailsthree.png"
import pressone from "../../assets/socialmediadetailsimage/pressone.png"
import presstwo from "../../assets/socialmediadetailsimage/presstwo.png"
import pressthree from "../../assets/socialmediadetailsimage/pressthree.png"

export default function Socialmediadetails() {

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


            <Headertwo />




            <div className="blank-div-social-detail"></div>




            <section>
                <div className="social-detail-container-main">
                    <div className="social-detail-page-first-sec-image">
                        <img src={detailsone} alt="detailsone" />
                    </div>
                    <div className="social-detail-main-det">
                        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                    <div className="social-detail-main-sc-det">
                        <div className="social-detail-sc-box-inner-one">
                            <img src={detailstwo} alt="detailstwo" />
                            <div className="detail-tes-inner-box">
                                <h3>Lorem Ipsum is simply dummy text</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                            </div>
                        </div>
                        <div className="social-detail-sc-box-inner-one">
                            <img src={detailsthree} alt="detailsthree" />
                            <div className="detail-tes-inner-box">
                                <h3>Lorem Ipsum is simply dummy text</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="press-stm-section-main">
                <div className="container-press">
                    <div className="press-title-main">
                        <h1>Press Statement</h1>
                    </div>
                    <div className="press-card-div-main-sc">
                        <div className="press-card-div-box-one">
                            <img src={pressone} alt="pressone" />
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                                {showMore && (
                                    <div className="pera-active-more">
                                        Here is the second half of the paragraph. You can add more content here.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </p>
                            <button type='submit' onClick={handleClick}>{showMore ? 'Show Less' : 'View more'}</button>
                        </div>

                        <div className="press-card-div-box-one">
                            <img src={presstwo} alt="presstwo" />
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                                {showMore2 && (
                                    <div className="pera-active-more">
                                        Here is the second half of the paragraph. You can add more content here.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </p>
                            <button type='submit' onClick={handleClick2}>{showMore2 ? 'Show Less' : 'View more'}</button>
                        </div>

                        <div className="press-card-div-box-one">
                            <img src={pressthree} alt="pressthree" />
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                                {showMore3 && (
                                    <div className="pera-active-more">
                                        Here is the second half of the paragraph. You can add more content here.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </p>
                            <button type='submit' onClick={handleClick3}>{showMore3 ? 'Show Less' : 'View more'}</button>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    )
}
