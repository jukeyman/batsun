"use client";
import Image from "next/image";
import contactImage from "@/assets/img/contact/contact.png";
import { useState } from "react";

const ContactPrimary = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Subject:",
    message: "write a message....",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Thanks! Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Subject:",
          message: "write a message....",
        });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("Failed to send email.");
    }
  };

  return (
    <div className="contact sp_top_140 sp_bottom_80">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title text-center sp_bottom_80">
              <div className="section__title__button">
                <span className="text__gradient">Contact</span>
              </div>
              <div className="section__title__heading contact__heading">
                <h3>Consulting support is just a call or email away.</h3>
              </div>
            </div>
          </div>
          <div
            className="col-xl-7 col-lg-7 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="contact__input__wrapper contact__grident__bg">
              <form
                id="contact-form"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-xl-12">
                    <div className="contact__input">
                      <input
                        className="contact__common__input"
                        type="text"
                        name="name"
                        id="con_name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact__input">
                      <input
                        className="contact__common__input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        id="con_email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact__input">
                      <input
                        className="contact__common__input"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <select
                      className="contact__common__input"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      id="subject"
                    >
                      <option value="Subject:">Subject:</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Business Proposal">
                        Business Proposal
                      </option>
                      <option value="Customer Support">
                        Customer Support
                      </option>
                    </select>
                  </div>
                  <div className="col-xl-12">
                    <textarea
                      className="contact__common__input"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      id="con_message"
                      cols="30"
                      rows="10"
                    />
                  </div>
                  <div className="col-xl-12">
                    <div className="contact__button">
                      <button
                        type="submit"
                        value="submit"
                        className="default__button"
                        name="submit"
                      >
                        SEND MESSAGE
                      </button>
                      {status ? <p className="form-messege">{status}</p> : ""}
                    </div>
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
              <div className="contact__single__item">
                <div className="contact__icon">
                  <i className="icofont-clock-time"></i>
                </div>
                <div className="contact__text">
                  <h6>Hours:</h6>
                  <p>Monday - Friday: 8 AM - 5:30 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>

              <div className="contact__single__item">
                <div className="contact__icon">
                  <i className="icofont-phone"></i>
                </div>
                <div className="contact__text">
                  <h6>Call Us:</h6>
                  <p>(505) 355-6059</p>
                </div>
              </div>

              <div className="contact__single__item">
                <div className="contact__icon">
                  <i className="icofont-location-pin"></i>
                </div>
                <div className="contact__text">
                  <h6>Location:</h6>
                  <p>RJ Business Solutions</p>
                  <p>1342 Nm 333 Ste C Ste 5254, Tijeras, NM 87059</p>
                </div>
              </div>
            </div>
            <div className="contact__img">
              <Image src={contactImage} alt="Contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPrimary;
