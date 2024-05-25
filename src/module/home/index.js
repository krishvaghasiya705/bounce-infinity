import React, { useState, useEffect, useRef } from 'react';
import './home.scss';
import Faq from "../../common/faq"
import scootyone from "../../assets/image/scooty1.png";
import scootytwo from "../../assets/image/scooty2.png";
import scootythree from "../../assets/image/scooty3.png";
import groupscooterone from "../../assets/image/Groupone.png";
import vectorone from "../../assets/image/Vector.png";
import vectortwo from "../../assets/image/Vector2.png";
import vectorthree from "../../assets/image/vector3.png";
import vectorfour from "../../assets/image/Vector4.png";
import prdprzone from "../../assets/cardimage/Limited Edition Sparkle Black r-l 1.png";
import prdprztwo from "../../assets/cardimage/E1 SPORTY RED 3.png";
import prdprzthreee from "../../assets/image/E1grey.png";
import rupees from "../../assets/cardimage/Vector.png";
import redscooter from "../../assets/pricingimage/redscooter.png";
import rightarrow from "../../assets/image/rightarrow.png";
import batterycharginggirl from "../../assets/image/batterycharginggirl.png";
import person from "../../assets/image/person.png";
import pressone from "../../assets/cardimage/pressone.png";
import presstwo from "../../assets/cardimage/presstwo.png";
import pressthree from "../../assets/cardimage/pressthree.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import rightarrowt from "../../assets/image/rightarrowt.png"
import { Link } from 'react-router-dom';
// import { FaHome } from "react-icons/fa";









export default function Home() {

  const [currentImage, setCurrentImage] = useState(scootyone);

  const handleImageChange = (newImage) => {
    setCurrentImage(newImage);
  };

  useEffect(() => {
    const images = [scootyone, scootytwo, scootythree];
    let currentIndex = 0;

    const changeImage = () => {
      setCurrentImage(images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
    };

    const interval = setInterval(changeImage, 2000);

    return () => clearInterval(interval);
  }, []);

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

  const topRef = useRef(null);

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);


  return (
    <div>

      <div className="herobanner-back-ground-align-main-div" ref={topRef} >
        <div className="herobanner-back-ground-div-one">
          <div className="herobanner-title-main-div">
            <h1>Bounce Infinity Electric Scooters</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
            <button type='submit'>Reserve for 499/-</button>
          </div>
          <div className="herobanner-image-changer-button-main-div">
            <button onClick={() => handleImageChange(scootyone)} type="button" className={currentImage === scootyone ? 'active' : ''}></button>
            <button onClick={() => handleImageChange(scootytwo)} type="button" className={currentImage === scootytwo ? 'active' : ''}></button>
            <button onClick={() => handleImageChange(scootythree)} type="button" className={currentImage === scootythree ? 'active' : ''}></button>
          </div>
        </div>
        <div className="herobanner-back-ground-div-two">
          <div className="scooter-back-div-ab-main">
            <div className="scooter-image-back-ground-main">
              <img src={currentImage} alt="scooter" />
            </div>
          </div>
        </div>
      </div>


      <div className="herobanner-mobile">
        <div className="herobanner-mobile-main">
          <div>
            <div className="bounce-title-div-main">
              <h1>Bounce Infinity Electric Scooters</h1>
            </div>
            <div className="bounce-pera-div-main">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
            </div>
            <div className="herobanner-mobile-button-main">
              <button type='submit'>Reserve for 499/-</button>
            </div>
          </div>
          <div className="herobanner-mobile-image-changer-button-main-div">
            <button onClick={() => handleImageChange(scootyone)} type="button" className={currentImage === scootyone ? 'active' : ''}></button>
            <button onClick={() => handleImageChange(scootytwo)} type="button" className={currentImage === scootytwo ? 'active' : ''}></button>
            <button onClick={() => handleImageChange(scootythree)} type="button" className={currentImage === scootythree ? 'active' : ''}></button>
          </div>
          <div className="herobanner-mobile-bike-image">
            <img src={currentImage} alt="scooter" />
          </div>
        </div>
      </div>

      <div className="our-product-div-main">
        <div className="container-prd">
          <div className="product-title-main">
            <h1>Our Products</h1>
          </div>
        </div>

        <div className="container-prd">
          <div className="prodduct-scooter-image-div-main">
            <div className="product-type-box-side-main">
              <div className="product-type-box-one">
                <button type='submit'>E1</button>
                <button type='submit'>E1+</button>
                <button type='submit'>E1LE</button>
              </div>
              <div className="product-type-box-two">
                <button type='button'>
                  <span>
                    <p></p>
                  </span>
                </button>

                <strong>
                  <span>
                    <p></p>
                  </span>
                </strong>

                <strong id='second-chng'>
                  <span>
                    <p></p>
                  </span>
                </strong>

              </div>
            </div>
            <div className="prd-main-image-div">
              <img src={groupscooterone} alt="groupscooterone" />
              <div className="prd-detail-abt-box-side-main">
                <div className="prd-detail-abt-box-one">
                  <img src={vectorone} alt="vectorone" />
                  <p>Real World Range</p>
                  <span>100+ km</span>
                </div>
                <div className="prd-detail-abt-box-two">
                  <img src={vectortwo} alt="vectortwo" />
                  <p>Top speed</p>
                  <span>55kmph</span>
                </div>
                <div className="prd-detail-abt-box-three">
                  <img src={vectorthree} alt="vectorthree" />
                  <p>Starts From</p>
                  <span>₹ 1,04,999</span>
                </div>
                <div className="prd-detail-abt-box-four">
                  <img src={vectorfour} alt="vectorfour" />
                  <p>Battery</p>
                  <span>2.5kWh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="product-scooter-mobile-div-main">
            <div className="our-prd-mobile-div-inner">
              <div className="prd-scooter-mobile-main">
                <img src={groupscooterone} alt="groupscooterone" />
              </div>


              <div className="prd-detail-abt-box-side-main-mobile">
                <div className="prd-detail-abt-box-one">
                  <img src={vectorone} alt="vectorone" />
                  <p>Real World Range</p>
                  <span>100+ km</span>
                </div>
                <div className="prd-detail-abt-box-two">
                  <img src={vectortwo} alt="vectortwo" />
                  <p>Top speed</p>
                  <span>55kmph</span>
                </div>
                <div className="prd-detail-abt-box-three">
                  <img src={vectorthree} alt="vectorthree" />
                  <p>Starts From</p>
                  <span>₹ 1,04,999</span>
                </div>
                <div className="prd-detail-abt-box-four">
                  <img src={vectorfour} alt="vectorfour" />
                  <p>Battery</p>
                  <span>2.5kWh</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container-prd">
        <div className="reserve-button-div-main">
          <button type='button'>Reserve Now</button>
        </div>
      </div>

      <div className="compare-div-main-bacck-ground">
        <div className="container-compare">
          <div className="compare-title-main-div">
            <h1>Comparison Between Models</h1>
          </div>
          <div className="product-and-detail-div-main">
            <div className="product-prize-side-div-main">
              <div className="product-prize-title">
                <h1>Our Products</h1>
              </div>
              <div className="product-prize-div">
                <a href="home">Price</a>
                <a href="home">Product name</a>
                <a href="home">Real World Range</a>
                <a href="home">Top speed</a>
                <a href="home">Battery</a>
              </div>
            </div>
            <div className="product-image-card-and-prize-card-main">

              <div className="product-prize-card-one">
                <Link to={"/Banglore"}>
                  <img src={prdprzone} alt="prdprzone" />
                </Link>
                <div className="product-prize-card">
                  <h1><img src={rupees} alt="rupees" /> 1,08,064</h1>
                  <h2>E1LE</h2>
                  <h2>70+ km</h2>
                  <h2>65kmph</h2>
                  <h2>1.9kWh</h2>
                </div>
              </div>

              <div className="product-prize-card-one">
                <Link to={"/Banglore"}>
                  <img src={prdprztwo} alt="prdprztwo" />
                </Link>
                <div className="product-prize-card">
                  <h1><img src={rupees} alt="rupees" /> 1,08,064</h1>
                  <h2>E1LE</h2>
                  <h2>70+ km</h2>
                  <h2>65kmph</h2>
                  <h2>1.9kWh</h2>
                </div>
              </div>

              <div className="product-prize-card-one">
                <Link to={"/Banglore"}>
                  <img src={prdprzthreee} alt="prdprzthreee" />
                </Link>
                <div className="product-prize-card">
                  <h1><img src={rupees} alt="rupees" /> 1,08,064</h1>
                  <h2>E1LE</h2>
                  <h2>70+ km</h2>
                  <h2>65kmph</h2>
                  <h2>1.9kWh</h2>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>



      <div className="pricing-section-main">
        <div className="pricing-section-first-box-background-main">
          <div>
            <img src={redscooter} alt="redscooter" />
            <div className="pagination-button-div-main">
              <button type='submit'></button>
              <button type='submit'></button>
              <button type='submit'></button>
            </div>
          </div>
        </div>
        <div className="pricing-section-second-box-main">
          <div className="pricing-section-title-main">
            <h1>Pricing Section</h1>
          </div>
          <div className="pricing-section-form-inp-one">
            <h2>Select Variant</h2>
            <div className="inp-first-main-div">
              <select name="Select Variant">
                <option value={1}>Select Variant</option>
                <option value={2}>Select Variant</option>
                <option value={3}>Select Variant</option>
              </select>
            </div>
          </div>
          <div className="pricing-section-form-inp-two">
            <div className="pricing-section-form-inp-two-inner-inp-one">
              <h3>Select State</h3>
              <select name="Select state">
                <option value={1}>Select state</option>
                <option value={2}>Select state</option>
              </select>
            </div>
            <div className="pricing-section-form-inp-two-inner-inp-two">
              <h4>Select City</h4>
              <select name="Select City">
                <option value={1}>Select City</option>
                <option value={2}>Select City</option>
              </select>
            </div>
          </div>
          <div className="available-clr-title-main">
            <div className="avialable-clr-main">
              <h5>Available color</h5>
              <p>
                <span></span>
                <span></span>
                <span></span>
              </p>
            </div>
            <div className="showroom-prize-div-main">
              <h6>Ex-Showroom Price (including charger and GST)</h6>
              <p><img src={rupees} alt="rupees" /> 1,55,553</p>
            </div>
            <div className="fame-pera-div-main">
              <p>FAME II Subsidy</p>
              <span>- <img src={rupees} alt="rupees" /> 21,131</span>
            </div>
            <div className="subsidy-pera-div-main">
              <h1>Subsidy from State Government</h1>
              <span>- <img src={rupees} alt="rupees" /> 0</span>
            </div>
            <div className="border-div-prz-btm"></div>
            <div className="effective-pera-main">
              <h2>Effective Price</h2>
              <span><img src={rupees} alt="rupees" /> 1,34,422</span>
            </div>
            <div className="price-pera-main">
              <p>*The price displayed is subject to change, final Vehicle price may vary and will be applicable as on the date of delivery</p>
            </div>
            <div className="price-pera-main-two">
              <p>* The price displayed above excludes road taxes, insurance, registration and other charges. Click on Book Now to find the detailed price breakup.</p>
            </div>
            <button type='submit'>Book Now</button>
          </div>
        </div>
      </div>



      <div className="dealership-sction-main">
        <div className="container-dealer-ship-main">
          <div className="dealer-ship-title-main">
            <h1>Dealership Section</h1>
          </div>
          <div className="dealer-ship-table-main">
            <div className="pincode-div-main">
              <div className="pincode-title-main">
                <h2>PIN Code</h2>
                <div className="pincode-inp-main">
                  <input type="text" placeholder='Enter PIN Code' />
                  <button type='submit'>GO</button>
                </div>
              </div>
              <h3>OR</h3>
              <div className="detect-nearby-button">
                <button type='submit'>Detect Nearby Dealrs</button>
              </div>
            </div>

            <div className="dtect-border-btm"></div>

            <div className="llp-boxes-main">
              <div className="llp-box-one">
                <h4>Patel Motors Pvt LLP</h4>
                <div className="marcus-name-div-main">
                  <p>Marcus Dias</p>
                  <img src={rightarrow} alt="rightarrow" />
                  <div className="right-arrow-div-hvr">
                    <img src={rightarrowt} alt="rightarrowt" />
                  </div>
                </div>
                <span>1.4 km</span>
              </div>

              <div className="llp-box-one">
                <h4>Patel Motors Pvt LLP</h4>
                <div className="marcus-name-div-main">
                  <p>Marcus Dias</p>
                  <img src={rightarrow} alt="rightarrow" />
                  <div className="right-arrow-div-hvr">
                    <img src={rightarrowt} alt="rightarrowt" />
                  </div>
                </div>
                <span>1.4 km</span>
              </div>

              <div className="llp-box-one">
                <h4>Patel Motors Pvt LLP</h4>
                <div className="marcus-name-div-main">
                  <p>Marcus Dias</p>
                  <img src={rightarrow} alt="rightarrow" />
                  <div className="right-arrow-div-hvr">
                    <img src={rightarrowt} alt="rightarrowt" />
                  </div>
                </div>
                <span>1.4 km</span>
              </div>


              <div className="llp-box-one">
                <h4>Patel Motors Pvt LLP</h4>
                <div className="marcus-name-div-main">
                  <p>Marcus Dias</p>
                  <img src={rightarrow} alt="rightarrow" />
                  <div className="right-arrow-div-hvr">
                    <img src={rightarrowt} alt="rightarrowt" />
                  </div>
                </div>
                <span>1.4 km</span>
              </div>


              <div className="llp-box-one">
                <h4>Patel Motors Pvt LLP</h4>
                <div className="marcus-name-div-main">
                  <p>Marcus Dias</p>
                  <img src={rightarrow} alt="rightarrow" />
                  <div className="right-arrow-div-hvr">
                    <img src={rightarrowt} alt="rightarrowt" />
                  </div>
                </div>
                <span>1.4 km</span>
              </div>


              <div className="llp-box-one">
                <h4>Patel Motors Pvt LLP</h4>
                <div className="marcus-name-div-main">
                  <p>Marcus Dias</p>
                  <img src={rightarrow} alt="rightarrow" />
                  <div className="right-arrow-div-hvr">
                    <img src={rightarrowt} alt="rightarrowt" />
                  </div>
                </div>
                <span>1.4 km</span>
              </div>
            </div>

            <div className="show-more-mobile-button-div">
              <h1>Show more</h1>
            </div>
          </div>
        </div>

      </div>




      <div className="emi-calculator-div-main">
        <div className='emi-container'>
          <div className="emi-calculator-title">
            <h1>EMI Calculator</h1>
          </div>
          <div className="loan-payment-boxes-main">
            <div>
              <div className="loan-payment-box-one">
                <div className="loan-ammount-box-one">
                  <div className="loan-ammount-title">
                    <h2>Loan Amount</h2>
                    <p>30,000</p>
                  </div>
                  <div className="loan-ammount-increase-line-main">
                    <div className="loan-ammount-increase-line-red-one"></div>
                    <div className="loan-ammount-increase-line-red-two"></div>
                  </div>
                </div>
                <div className="loan-ammount-box-one">
                  <div className="loan-ammount-title">
                    <h2>Loan Tenure</h2>
                    <p>8 Months</p>
                  </div>
                  <div className="loan-ammount-increase-line-main">
                    <div className="loan-ammount-increase-line-red-one"></div>
                    <div className="loan-ammount-increase-line-red-two"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="loan-payment-box-two">
              <div className="payment-div-main-flex">
                <div className="payment-div-one-main">
                  <div className="down-payment-div-main">
                    <h3>Down Payment</h3>
                    <p><img src={rupees} alt="rupees" />1,04,422</p>
                  </div>
                  <p>Including 0% Processing fee other charges</p>
                </div>
                <div className="payment-div-two-main">
                  <div className="down-payment-div-main">
                    <h3>Monthly EMI</h3>
                    <p><img src={rupees} alt="rupees" />875</p>
                  </div>
                  <p>With 9.99% Rate of Interest</p>
                </div>
              </div>
            </div>
          </div>

          <div className="down-payment-div-main-last">
            <div className="down-paymane-div-one">
              <h1>Down Payment</h1>
              <input type="number" placeholder='Enter amount' />
            </div>
            <div className="down-paymane-div-two">
              <h1>Interest</h1>
              <select name="Select Interest">
                <option value="1">Select Interest</option>
                <option value="2">Select Interest</option>
              </select>
            </div>
          </div>

          <div className="benefits-box-main">
            <div className="benefits-title-main">
              <div className="dot-main"></div>
              <h1>Benefits of Easy Finance</h1>
            </div>
            <div className="benefits-types-div-main">
              <p><span></span>Loan approval in 5 minutes</p>
              <p><span></span>Digital pre-approved offer</p>
              <p><span></span>Low down payment</p>
              <p><span></span>Easy documentation</p>
              <p><span></span>Attractive interest rates</p>
              <p><span></span>Zero processing fees</p>
            </div>
          </div>
        </div>


      </div>




      <div className="battery-section-main">
        <div className="container-battery">
          <div className="portable-battery-title-main">
            <h4>Portable battery</h4>
          </div>
          <div className="charge-pera-box-main-flex">
            <div className="charge-pera-box-one">
              <h5>Charge everywhere at any plug point.</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="charge-pera-box-two">
              <img src={batterycharginggirl} alt="batterycharginggirl" />
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

              {[1, 2, 3].map(() => {
                return (
                  <div className="slider-box-one">
                    <h2>“</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="person-image-main">
                      <img src={person} alt="person" />
                    </div>
                    <h3>Marcus Torff</h3>
                  </div>
                )
              })}

            </Slider>
          </div>
        </div>
      </div>



      <Faq />




      <div className="press-stm-section-main">
        <div className="container-press">
          <div className="press-title-main">
            <h1>Press Statement</h1>
          </div>
          <div className="press-card-div-main">
            <div className="press-card-div-box-one">
              <img src={pressone} alt="pressone" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                <div className={`pera-active-more ${showMore ? 'show' : ''}`}>
                  Here is the second half of the paragraph. You can add more content here.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </p>
              <button type='button' onClick={handleClick}>{showMore ? 'Show Less' : 'View more'}</button>
            </div>

            <div className="press-card-div-box-one">
              <img src={presstwo} alt="presstwo" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                <div className={`pera-active-more ${showMore2 ? 'show' : ''}`}>
                  Here is the second half of the paragraph. You can add more content here.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </p>
              <button type='button' onClick={handleClick2}>{showMore2 ? 'Show Less' : 'View more'}</button>
            </div>

            <div className="press-card-div-box-one">
              <img src={pressthree} alt="pressthree" />
              <h2>Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
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
  );
}
