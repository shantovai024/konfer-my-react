import AnimatedText from "../animation/AnimatedText";
import testimonialV2Data from "../../assets/jsonData/testimonials/testimonialV2Data.json"
import SingleTestimonialV2 from "./SingleTestimonialV2";
import Counter from "../counter/Counter";
import { Link } from "react-router-dom";

const TestimonialV2 = () => {
    return (
        <>
            <section className="testimonial-section-two parallax-section">
                <div className="bg-box">
                    <div className="parallax-bg bg bg-image" data-speed="0.5"
                        style={{ backgroundImage: 'url(images/background/7.png)' }} />
                </div>
                <div className="auto-container">
                    <div className="sec-title-outer">
                        <div className="sec-title light mb-0">
                            <span className="sub-title">Testimonials</span>
                            <AnimatedText>
                                What Our Valued <br /> Customers Say
                            </AnimatedText>
                        </div>
                        <div className="image-box wow fadeInRight">
                            <img src="/images/resource/author-1.png" alt="Image" />
                            <img src="/images/resource/author-2.png" alt="Image" />
                            <img src="/images/resource/author-3.png" alt="Image" />
                        </div>
                    </div>
                    <div className="outer-box">
                        <div className="row">
                            {testimonialV2Data.map(testimonial =>
                                <SingleTestimonialV2 testimonial={testimonial} key={testimonial.id} />
                            )}
                        </div>
                    </div>
                    <div className="bottom-box">
                        <div className="text">if you want to see more review <Link to="/about">Click here.</Link></div>
                        <div className="counter-block-two">
                            <div className="inner-box">
                                <div className="count-box">
                                    <span className="count-text" data-speed={1000} data-stop={20}>
                                        <Counter end={5} />
                                    </span> k+
                                </div>
                                <div className="counter-title">Reviews For Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialV2;