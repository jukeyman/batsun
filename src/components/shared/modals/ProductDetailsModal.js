"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductDetailsModal = ({ product, onClose }) => {
  const [mainImage, setMainImage] = useState("/images/products/product-1.jpg");
  const [selectedTab, setSelectedTab] = useState("description");

  const productDetails = {
    description: `${product.title} is designed to help businesses streamline their operations and improve efficiency. This comprehensive solution includes all the tools and resources needed for successful implementation.

Key Features:
- Easy integration with existing systems
- Customizable workflows and templates
- Detailed documentation and guides
- Priority technical support
- Regular updates and improvements`,

    specifications: {
      compatibility: "Works with all major business platforms",
      requirements: "Modern web browser and internet connection",
      updates: "Regular monthly updates included",
      support: "24/7 technical support available",
      customization: "Full customization options",
      training: "Comprehensive training materials included"
    },

    implementation: `Our implementation process is designed to ensure your success:

1. Initial Assessment & Planning
2. Custom Configuration
3. Team Training
4. Deployment & Testing
5. Ongoing Support & Optimization

We provide full support throughout the implementation process to ensure smooth adoption and maximum value from your investment.`
  };

  return (
    <div className="modal__wrapper">
      <div className="modal__product__wrapper">
        <div className="modal__close">
          <button onClick={onClose}>
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="modal__img">
              <Image src={mainImage} alt={product.title} placeholder="blur" />
            </div>
            <div className="modal__small__img">
              <div className="modal__small__img__item">
                <Image
                  src="/images/products/product-1.jpg"
                  alt="Product Thumbnail 1"
                  onClick={() => setMainImage("/images/products/product-1.jpg")}
                  placeholder="blur"
                />
              </div>
              <div className="modal__small__img__item">
                <Image
                  src="/images/products/product-2.jpg"
                  alt="Product Thumbnail 2"
                  onClick={() => setMainImage("/images/products/product-2.jpg")}
                  placeholder="blur"
                />
              </div>
              <div className="modal__small__img__item">
                <Image
                  src="/images/products/product-3.jpg"
                  alt="Product Thumbnail 3"
                  onClick={() => setMainImage("/images/products/product-3.jpg")}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="modal__product__content">
              <div className="modal__product__title">
                <h3>{product.title}</h3>
              </div>
              <div className="modal__product__price">
                <span className="price">${product.price}</span>
                {product.previousPrice && (
                  <span className="old__price">${product.previousPrice}</span>
                )}
              </div>
              <div className="modal__product__rating">
                <div className="modal__product__rating__icon">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <span>({product.reviews} Reviews)</span>
              </div>
              <div className="modal__product__text">
                <p>{product.description}</p>
              </div>
              <div className="modal__product__cart">
                <div className="modal__product__quantity">
                  <button className="minus">-</button>
                  <input type="text" value="1" readOnly />
                  <button className="plus">+</button>
                </div>
                <div className="modal__product__cart__btn">
                  <button className="cart__btn">Add to Cart</button>
                </div>
              </div>
              <div className="modal__product__info">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${selectedTab === "description" ? "active" : ""}`}
                      onClick={() => setSelectedTab("description")}
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${selectedTab === "specifications" ? "active" : ""}`}
                      onClick={() => setSelectedTab("specifications")}
                    >
                      Specifications
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${selectedTab === "implementation" ? "active" : ""}`}
                      onClick={() => setSelectedTab("implementation")}
                    >
                      Implementation
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${selectedTab === "description" ? "show active" : ""}`}
                    id="description"
                  >
                    <p>{productDetails.description}</p>
                  </div>
                  <div
                    className={`tab-pane fade ${selectedTab === "specifications" ? "show active" : ""}`}
                    id="specifications"
                  >
                    <ul>
                      {Object.entries(productDetails.specifications).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`tab-pane fade ${selectedTab === "implementation" ? "show active" : ""}`}
                    id="implementation"
                  >
                    <p>{productDetails.implementation}</p>
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

export default ProductDetailsModal;
