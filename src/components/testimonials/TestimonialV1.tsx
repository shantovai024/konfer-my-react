import testimonialV1Data from "../../assets/jsonData/testimonials/testimonialV1Data.json"
import SingleTestimonialV1 from "./SingleTestimonialV1";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import AnimatedText from "../animation/AnimatedText";

interface DataType {
    sectionClass?: string
}

const TestimonialV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <section className={`testimonial-section ${sectionClass ? sectionClass : ""}`}>
                <div className="shape-nine bounce-y" />

                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Testimonials</span>
                        <AnimatedText>
                            See What Our Valued <br /> Customers Say
                        </AnimatedText>
                    </div>

                    <div className="outer-box">
                        <Swiper
                            className="testi-swiper"
                            slidesPerView={2}
                            // spaceBetween={98}
                            loop={true}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                576: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1100: {
                                    slidesPerView: 2,
                                    spaceBetween: 60,
                                }
                            }}
                            modules={[Navigation]}
                        >
                            {testimonialV1Data.map(testimonial =>
                                <SwiperSlide className="testimonial-block" key={testimonial.id}>
                                    <SingleTestimonialV1 testimonial={testimonial} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <div className="nav-box">
                            <div className="swiper-button-prev"><span className="icon fa fa-arrow-left" /></div>
                            <div className="swiper-button-next"><span className="icon fa fa-arrow-right" /></div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default TestimonialV1;