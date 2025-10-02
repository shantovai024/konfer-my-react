import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import testimonialV3Data from "../../assets/jsonData/testimonials/testimonialV3Data.json"
import SingleTestimonialV3 from "./SingleTestimonialV3";
import AnimatedText from "../animation/AnimatedText";
import { useState } from "react";
import { Controller, Navigation } from "swiper/modules";

const TestimonialV3 = () => {
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <section className="testimonial-section-three">
            <div className="auto-container">
                <div className="sec-title orange text-center">
                    <span className="sub-title">Testimonial</span>
                    <AnimatedText>
                        Our Valued Customer <br /> Say That
                    </AnimatedText>
                </div>

                {/* Thumb Slider */}
                <div className="swiper-three-thumb-outer">
                    <Swiper
                        className="testi-swiper-three-thumb"
                        modules={[Controller]}
                        slidesPerView="auto"
                        centeredSlides={true}
                        loop={true}
                        onSwiper={(swiper) => setThumbsSwiper(swiper)}
                        controller={{ control: mainSwiper }}
                    >
                        {testimonialV3Data.map(testimonial =>
                            <SwiperSlide key={testimonial.id}>
                                <img src={`/images/resource/${testimonial.image}`} alt="Image" />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>

                <Swiper
                    className="testi-swiper-three"
                    modules={[Navigation, Controller]}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    onSwiper={(swiper) => setMainSwiper(swiper)}
                    controller={{ control: thumbsSwiper }}
                >
                    {testimonialV3Data.map(testimonial =>
                        <SwiperSlide className="testimonial-block-three" key={testimonial.id}>
                            <SingleTestimonialV3 testimonial={testimonial} />
                        </SwiperSlide>
                    )}
                    <div className="nav-box">
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialV3;