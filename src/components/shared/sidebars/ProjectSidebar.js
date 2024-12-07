"use client";
import React from "react";
import Download from "./widgets/Download";

const ProjectSidebar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="col-xl-4 col-lg-4 cl-md-12 col-12">
      <div className="project__details__sidebar sidebar">
        <div
          className="project__details__sidebar__info"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="project__details__sidebar__heading">
            <h6>Project info:</h6>
          </div>
          <div className="project__info__list">
            <div className="project__info__single">
              <span>Website:</span>
              <p>
                <a href="https://rjbizsolution.com" target="_blank" rel="noopener noreferrer">
                  www.rjbizsolution.com
                </a>
              </p>
            </div>
            <li>
              <span>Date:</span>
              <p>10 Feb, 2024</p>
            </li>
            <li>
              <span>Consultant:</span>
              <p>Ramiro Parsons</p>
            </li>
            <li>
              <span>Location:</span>
              <p> Arizona, USA.</p>
            </li>
            <li>
              <span>Duration</span>
              <p> 06 Months</p>
            </li>
          </div>
          <div className="headerarea__icon project__details__sidebar__icon">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/">
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.skype.com/en/">
                  <i className="icofont-skype"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="project__details__get__quote"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="project__details__sidebar__heading get__quote__heading">
            <h6>Get a Quote:</h6>
          </div>
          <form onSubmit={handleSubmit} className="project__sidebar__form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your phone"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Enter your notes"
                rows="3"
                required
              ></textarea>
            </div>
            <div className="project__details__get__quote__button">
              <button type="submit" className="default__button">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>

        <Download />
      </div>
    </div>
  );
};

export default ProjectSidebar;
