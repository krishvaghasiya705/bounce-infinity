import React from "react";
import "./contactus.scss";
import Footer from "../../common/footer";
import Headerthree from "../../common/headerthree";
import contactimage from "../../assets/conatctusimage/conatctimage.png";

export default function Contact() {


  return (
    <div>

      <Headerthree />


      <div className="blank-div-social-detail"></div>





      <div className="section">
        <div className="contact-section-container">
          <div className="contact-us-title-main">
            <h1>Contact Us</h1>
            <p>Have a specific question? Ask it here and we'll contact you with a quick response.</p>
          </div>
          <div className="contact-section-main">
            <div className="contact-image-section-main">
              <img src={contactimage} alt="contactimage" />
            </div>
            <form required>
              <div className="contact-section-detail-main-fl">
                <div className="contact-first-box">
                  <h2>Select Variant</h2>
                  <select required>
                    <option selected value="1" required>Select Variant</option>
                    <option value="2" required>Select Variant</option>
                    <option value="3" required>Select Variant</option>
                  </select>
                </div>
                <div className="conatct-box-second">
                  <h2>Phone no.</h2>

                  <div className="conatct-number-input-main">
                    <input type="number" placeholder="Enter your phone no" />
                    <select required>
                      <option selected value="1">+91</option>
                      <option value="2" required>+92</option>
                      <option value="3" required>+93</option>
                    </select>
                  </div>
                </div>

                <div className="contact-pincode-iput-main-third">
                  <h2>Pincode</h2>
                  <input type="number" placeholder="Enter your pincode" required />
                </div>

                <div className="conatct-message-box-forth">
                  <h3>Message</h3>
                  <textarea name="message" cols="30" rows="10" placeholder="Write your message..." required></textarea>
                </div>

                <div className="contact-submit-button">
                  <button type="submit" required>Submit</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>


      <Footer />




    </div>
  )
}
