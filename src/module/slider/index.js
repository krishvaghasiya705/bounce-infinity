import React, { useState } from 'react';
import Slider from "react-slick";
import "./slider.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import person from "../../assets/image/person.png";
export default function Slide() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>

            <div className="slider-container">
                <Slider {...settings}>

                    <div className="slider-box-one" id='slider-box-opacity'>
                        <h2>“</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="person-image-main">
                            <img src={person} alt="person" />
                        </div>
                        <h3>Marcus Torff</h3>
                    </div>

                    <div className="slider-box-one">
                        <h2>“</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="person-image-main">
                            <img src={person} alt="person" />
                        </div>
                        <h3>Marcus Torff</h3>
                    </div>

                    <div className="slider-box-one" id='slider-box-opacity'>
                        <h2>“</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="person-image-main">
                            <img src={person} alt="person" />
                        </div>
                        <h3>Marcus Torff</h3>
                    </div>

                </Slider>
            </div>


        </div>
    )
}


const ReadMore = ({ text, linesToShow }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showAll, setShowAll] = useState(false);
  
    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };
  
    const handleClick = () => {
      setShowAll(!showAll);
    };
  
    const renderText = () => {
      if (isExpanded || showAll) {
        return text.split('\n').map((line, index) => (
          <span key={index} className="read-more-line">
            {line}
            <br />
          </span>
        ));
      } else {
        return text.split('\n').slice(0, linesToShow).map((line, index) => (
          <span key={index} className="read-more-line">
            {line}
            <br />
          </span>
        ));
      }
    };
  
    return (
      <div className="read-more-container">
        {renderText()}
        {text.split('\n').length > linesToShow && (
          <button onClick={handleClick} className="read-more-button">
            {showAll ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    );
  };
