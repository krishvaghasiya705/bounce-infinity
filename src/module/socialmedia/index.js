import React, { useState } from 'react'
import "./socialmedia.scss"
import Headertwo from "../../common/headertwo"
import Footer from "../../common/footer";
import pressone from "../../assets/socialmediaimage/pressone.png"
import presstwo from "../../assets/socialmediaimage/presstwo.png"
import pressthree from "../../assets/socialmediaimage/pressthree.png"
import person from "../../assets/socialmediaimage/person.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

export default function Socialmedia() {

  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);
  const [showMore6, setShowMore6] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  const handleClick2 = () => {
    setShowMore2(!showMore2);
  };

  const handleClick3 = () => {
    setShowMore3(!showMore3);
  };

  const handleClick4 = () => {
    setShowMore4(!showMore4);
  };

  const handleClick5 = () => {
    setShowMore5(!showMore5);
  };

  const handleClick6 = () => {
    setShowMore6(!showMore6);
  };




  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear"
  };




  return (
    <div>


      <Headertwo />





      <div className="blank-div-social-media"></div>

      <div className="press-stm-section-main">
        <div className="container-press">
          <div className="press-title-main">
            <h1>Social Media</h1>
          </div>
          <div className="press-card-div-main">
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

            <div className="press-card-div-box-one">
              <img src={pressone} alt="pressone" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore4 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick4}>{showMore4 ? 'Show Less' : 'View more'}</button>
            </div>

            <div className="press-card-div-box-one">
              <img src={presstwo} alt="presstwo" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore5 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick5}>{showMore5 ? 'Show Less' : 'View more'}</button>
            </div>

            <div className="press-card-div-box-one">
              <img src={pressthree} alt="pressthree" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore6 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick6}>{showMore6 ? 'Show Less' : 'View more'}</button>
            </div>

          </div>
        </div>
      </div>







      <div className="client-review-slider-main-background">
        <div className="conatiner-review">
          <div className="client-review-title-main">
            <h1>What Our clients are saying</h1>
          </div>
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
      </div>



      <Footer />





    </div>
  )
}
