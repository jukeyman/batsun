import Image from "next/image";
import aboutImage2 from "@/assets/img/about/about__2.png";
import aboutSmallImage2 from "@/assets/img/about/about__small__img__2.png";

const About7 = ({ id }) => {
  return (
    <div
      className="about position-relative sp_bottom_120 sp_top_120"
      id={id ? id : "about__mission__area"}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div
              className="about__img__wrapper about__img__wrapper--2 position-relative"
              data-tilt
            >
              <Image
                className="about__img__1"
                src={aboutImage2}
                alt="Frequently Asked Questions"
                placeholder="blur"
              />
              <div className="about__big__title">
                <h1>FAQ</h1>
              </div>

              <div className="section__strock__line__animation">
                <Image
                  className="ssla__animation ssl__img__3"
                  src={aboutSmallImage2}
                  alt="FAQs Illustration"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div className="section__title section__title--2  sp_bottom_30">
                <div className="section__title__button">
                  <span className="text__gradient">FAQs About Our Services</span>
                </div>
                <div className="section__title__heading">
                  <h3>
                    ANSWERING YOUR QUESTIONS WITH{" "}
                    <span className="text__gradient">EXPERIENCE & EXPERTISE</span>.
                  </h3>
                </div>
              </div>

              <div className="faq__accordion">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        What services does RJ Business Solutions offer?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <p>
                          We provide a wide range of services including business
                          consulting, SEO optimization, digital marketing, HR solutions,
                          custom software development, and much more. Our solutions
                          are tailored to meet the specific needs of your business.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Why choose RJ Business Solutions?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body">
                        <p>
                          With over 29 years of experience, we bring unmatched expertise
                          and dedication to every project. We are committed to helping
                          your business achieve its goals through innovative and
                          effective solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        How can I get started with your services?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        <p>
                          Getting started is simple! Contact us through our website or
                          call our dedicated team. We’ll schedule a consultation to
                          discuss your needs and craft a personalized strategy for your
                          business.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        What industries do you specialize in?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFour"
                    >
                      <div className="accordion-body">
                        <p>
                          We cater to a diverse range of industries including
                          technology, finance, healthcare, retail, and more. Our
                          experienced team is equipped to handle the unique challenges
                          of various sectors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About7;
