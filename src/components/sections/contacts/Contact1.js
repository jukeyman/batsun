"use client";
import Image from "next/image";
import contactImage from "@/assets/img/contact/contact.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useHeaderContex } from "@/providers/HeaderContex";

const serviceOptions = [
  { value: "ai-chatbot", label: "AI Chatbot Implementation" },
  { value: "workflow-automation", label: "Workflow Automation" },
  { value: "predictive-analytics", label: "Predictive Analytics" },
  { value: "email-automation", label: "Email Automation" },
  { value: "rpa", label: "RPA Solutions" },
  { value: "voice-assistant", label: "Voice Assistant Integration" },
  { value: "custom-ai", label: "Custom AI Solution" },
  { value: "consultation", label: "AI Consultation" }
];

const Contact1 = ({ pt, type, pb }) => {
  const { bodyBg, style } = useHeaderContex();

  return (
    <div
      className={`contact ${
        pb ? "sp_bottom_200" : type === 2 ? "sp_bottom_120" : "sp_bottom_140"
      } ${pt ? "sp_top_140" : ""}`}
      id="tb__contact"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className={`section__title text-center sp_bottom_70 ${
                bodyBg === "black" ? "section__title--3" : ""
              }`}
            >
              {type === 3 ? (
                <div className="section__title__button">
                  <span>CONTACT US</span>
                </div>
              ) : style === 4 ? (
                <div className="section__title__small">
                  <span>GET IN TOUCH</span>
                </div>
              ) : (
                <div className="section__title__button">
                  <span className="text__gradient">Contact Us</span>
                </div>
              )}

              <div className="section__title__heading">
                <h3>WE ARE HERE TO HELP YOUR BUSINESS GROW.</h3>
              </div>
            </div>
          </div>

          <div
            className="col-xl-7 col-lg-7 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="contact__form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your business email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="How can we help your business grow?"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-5 col-md-12 col-sm-12 contact__info__right"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="contact__info">
              <div
                className="contact__single__item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="contact__icon">
                  <span>
                    <i className="icofont-clock-time"></i>
                  </span>
                </div>
                <div className="contact__text">
                  <h6>Business Hours:</h6>
                  <p>Monday - Friday: 8 AM - 5:30 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>

              <div
                className="contact__single__item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="contact__icon">
                  <span>
                    <i className="icofont-phone"></i>
                  </span>
                </div>
                <div className="contact__text">
                  <h6>Call Us:</h6>
                  <p>(505) 355-6059</p>
                </div>
              </div>

              <div
                className="contact__single__item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="contact__icon">
                  <span>
                    <i className="icofont-location-pin"></i>
                  </span>
                </div>
                <div className="contact__text">
                  <h6>Location:</h6>
                  <p>RJ Business Solutions</p>
                  <p>1342 Nm 333 Ste C Ste 5254, Tijeras, NM 87059</p>
                </div>
              </div>
            </div>
            <div
              className="contact__img"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Image src={contactImage} alt="Contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
