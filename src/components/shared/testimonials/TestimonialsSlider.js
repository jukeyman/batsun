"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsSlide2 from "./TestimonialsSlide2";
import testimonialSmallImage3 from "@/assets/img/testimonial/testimonial__small__img__3.png";
import testimonialImage3 from "@/assets/img/testimonial/testimonial__3.png";
import { Navigation } from "swiper/modules";
const TestimonialsSlider = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      image: "/images/testimonials/1.jpg",
      desc: "RJ Business Solutions transformed our operations with their AI automation services. The efficiency gains were immediate and substantial. Their team's expertise and support were invaluable throughout the implementation.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, GrowthPath Solutions",
      image: "/images/testimonials/2.jpg",
      desc: "The business formation services provided by RJ Business Solutions were exceptional. They guided us through every step of the process, making it seamless and stress-free. Their ongoing support has been instrumental in our growth.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "HR Director, InnovateNow",
      image: "/images/testimonials/3.jpg",
      desc: "Implementing RJ Business Solutions' payroll and HR services has streamlined our entire human resources operation. The automated systems and expert support have saved us countless hours and improved accuracy significantly.",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Operations Manager, Swift Logistics",
      image: "/images/testimonials/4.jpg",
      desc: "The strategic growth consulting from RJ Business Solutions helped us identify and capitalize on new market opportunities. Their data-driven approach and industry expertise were exactly what we needed to scale our business.",
    },
    {
      id: 5,
      name: "Lisa Martinez",
      position: "Small Business Owner",
      image: "/images/testimonials/5.jpg",
      desc: "As a mom entrepreneur, RJ Business Solutions' support has been invaluable. Their comprehensive services and flexible solutions allowed me to focus on growing my business while maintaining work-life balance.",
    }
  ];
  return (
    <Swiper
      className="testimonial__slider__active__2 position-static"
      grabCursor={true}
      navigation={true}
      modules={[Navigation]}
      slidesPerView={1}
      breakpoints={{
        575: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 1,
        },

        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 2,
        },
        1500: {
          slidesPerView: 2,
        },
      }}
      wrapperClass="testimonial__2__wrap"
    >
      {testimonialData?.map((testimonial, idx) => (
        <SwiperSlide className="col-md-3 testimonial__single__slider" key={idx}>
          <TestimonialsSlide2 slide={testimonial} />
        </SwiperSlide>
      ))}

      <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows">
        <div className="swiper-button-next arrow-btn arrow-btn-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 12H20.33"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="swiper-button-prev arrow-btn arrow-btn-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.57031 5.92999L3.50031 12L9.57031 18.07"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5 12H3.67"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Swiper>
  );
};

export default TestimonialsSlider;
