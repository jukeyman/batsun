import React from "react";

const ProductDesc = () => {
  return (
    <div className="descriptionarea sp_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 descriptionarea__tab__wrapper">
            <ul
              className="nav  descriptionarea__tab__button"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="descriptionarea__link active"
                  data-bs-toggle="tab"
                  data-bs-target="#description"
                  type="button"
                >
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="descriptionarea__link"
                  data-bs-toggle="tab"
                  data-bs-target="#video"
                  type="button"
                >
                  Video
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="descriptionarea__link"
                  data-bs-toggle="tab"
                  data-bs-target="#product__Type"
                  type="button"
                >
                  Product Type
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="descriptionarea__link"
                  data-bs-toggle="tab"
                  data-bs-target="#delivery__system"
                  type="button"
                >
                  Delivery system
                </button>
              </li>
            </ul>
            <div
              className="tab-content tab__content__wrapper"
              id="myTabContent"
            >
              <div
                className="tab-pane fade show active"
                id="description"
                role="tabpanel"
                aria-labelledby="description"
              >
                <p>
                  Our comprehensive AI and automation solutions are designed to transform your business operations. 
                  We specialize in implementing cutting-edge artificial intelligence technologies that streamline 
                  workflows, reduce operational costs, and enhance customer experiences. Our solutions include 
                  custom chatbots, process automation tools, and intelligent analytics platforms.
                </p>
                <p>
                  Each solution is tailored to your specific industry needs, whether you're in retail, 
                  healthcare, finance, or manufacturing. We focus on delivering measurable results with 
                  rapid implementation and ongoing support to ensure your success.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="video"
                role="tabpanel"
                aria-labelledby="video"
              >
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/vHdclsdkp28"
                  title="RJ Business Solutions AI & Automation Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div
                className="tab-pane fade"
                id="product__Type"
                role="tabpanel"
                aria-labelledby="product__Type"
              >
                <p>
                  Our AI solutions incorporate the latest advancements in machine learning and natural 
                  language processing. Key features include intelligent process automation, predictive 
                  analytics, and adaptive learning capabilities that evolve with your business needs.
                </p>
                <p>
                  Implementation includes comprehensive training, documentation, and ongoing technical 
                  support. Our team works closely with your staff to ensure smooth integration and 
                  maximum adoption of the new technologies, leading to optimal ROI and business growth.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="delivery__system"
                role="tabpanel"
                aria-labelledby="delivery__system"
              >
                <p>
                  Our delivery system follows a proven methodology: Initial assessment, customized 
                  solution design, phased implementation, and continuous optimization. We prioritize 
                  minimal disruption to your existing operations while ensuring rapid deployment of 
                  new capabilities.
                </p>
                <p>
                  Post-implementation support includes 24/7 technical assistance, regular performance 
                  reviews, and proactive system updates to maintain peak efficiency. Our team remains 
                  engaged throughout the process to ensure your success and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
