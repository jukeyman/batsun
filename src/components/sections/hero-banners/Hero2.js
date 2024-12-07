import BrandBadge from "@/components/shared/badges/BrandBadge";
import Image from "next/image";
import heroBgImage1 from "@/assets/img/herobaner/herobanner__bg__1.png";
import heroImage5 from "@/assets/img/herobaner/herobanner__5.jpg";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Hero2 = ({ title, img }) => {
  const heroContent = {
    title: "Transform Your Business with AI & Automation",
    subtitle: "Intelligent Solutions for Modern Businesses",
    description: "Streamline operations, boost efficiency, and drive growth with our cutting-edge AI chatbots, workflow automation, and intelligent business solutions.",
    button: {
      text: "Get Started",
      link: "#contact"
    }
  };

  return (
    <div
      className="herobanner herobanner--2 position-relative d-flex align-items-center height__1028 herobanner__with__transparent__header"
      style={{ background: `url('${heroBgImage1.src}')` }}
    >
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper">
                  <div className="herobanner__title herobanner__title--2">
                    <h1>{title ? title : heroContent.title}</h1>
                  </div>
                  <div className="herobanner__text herobanner__text--2">
                    <p>
                      {title ? title : heroContent.subtitle}
                    </p>
                    <p>
                      {heroContent.description}
                    </p>
                  </div>
                  <div className="herobanner__button">
                    <ButtonPrimary text={heroContent.button.text} path={heroContent.button.link} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrandBadge badge={"hero"} />

      <div className="herobanner__img herobanner__img--2">
        <Image src={img ? img : heroImage5} alt="Marketing" />
      </div>
    </div>
  );
};

export default Hero2;
