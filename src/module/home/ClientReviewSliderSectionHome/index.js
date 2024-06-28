import React from 'react';
import "./ClientReviewSliderSectionHome.scss"
import person from "../../../assets/image/person.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

function ClientReviewSliderSectionHome() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
        ],
    };


    return (
        <div>
            <div className="client-review-slider-main-background">
                <div className="conatiner-review" data-aos="fade-up">
                    <div className="client-review-title-main">
                        <h1>What Our clients are saying</h1>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {[1, 2, 3].map((_, index) => (
                                <div className="slider-box-one" key={index}>
                                    <h2>“</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <div className="person-image-main">
                                        <img src={person} alt="person" />
                                    </div>
                                    <h3>Marcus Torff</h3>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientReviewSliderSectionHome;
