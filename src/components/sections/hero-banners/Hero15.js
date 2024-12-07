import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Hero15 = () => {
  return (
    <div
      className="herobanner d-flex align-items-center height__970 herobanner__front__img__wrapper position-relative bg__image herobanner__with__transparent__header"
      style={{ 
        background: 'linear-gradient(135deg, #0052CC 0%, #00875A 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper herobanner__content__wrapper--2 herobanner__content__wrapper--3">
                  <div className="herobanner__title">
                    <h1>
                      <span className="ht__whie__bg">Transform Your Business</span>
                      <br />
                      with Modern
                      <br />
                      <span className="animated--header-first-word">Solutions </span>
                      <span
                        className="txt-type text__gradient"
                        data-wait="3000"
                        data-words='["in AI", "in Automation", "in Growth", "in Success"]'
                      >
                        {" "}
                      </span>
                    </h1>
                  </div>
                  <div className="herobanner__text">
                    <p>
                      RJ Business Solutions delivers comprehensive business services
                      including AI implementation, payroll & HR, business formation,
                      and strategic growth solutions.
                    </p>
                  </div>
                  <div className="herobanner__button">
                    <ButtonPrimary
                      text={"Get Started Today"}
                      path={"/contact"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern geometric overlay pattern */}
      <div 
        className="geometric-overlay" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default Hero15;
