import { Link } from "react-router-dom";
import AnimatedText from "../animation/AnimatedText";

const AboutV1 = () => {
    return (
        <>
            <section className="about-section">
                <div className="icon-one bounce-y" />
                <div className="icon-two bounce-y" />
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="image-box" data-aos="fade-up">
                            <div className="image-outer">
                                <figure className="image overlay-anim">
                                    <img src="/images/resource/about1-1.png" alt="Image" />
                                </figure>
                                <div className="icon-nineteen" />
                                <div className="icon-twenty" />
                            </div>
                            <div className="speaker-box">
                                <i className="icon flaticon-mic" />
                                <div className="count">15</div>
                                <div className="text">Iconic <br /> Speakers</div>
                            </div>
                        </div>
                    </div>
                    <div className="outer-box two">
                        <div className="image-box">
                            <div className="image-outer">
                                <figure className="image overlay-anim">
                                    <img src="/images/resource/about1-2.png" alt="Image" />
                                </figure>
                                <div className="icon-twentyfour" />
                            </div>
                        </div>
                        <div className="content-box" data-aos="fade-right" data-aos-delay="200">
                            <div className="sec-title">
                                <span className="sub-title">About Event</span>
                                <AnimatedText>
                                    Meet Web Development <br /> Talents Around Word
                                </AnimatedText>
                                <div className="text text-anim">Like previous year this year we are arranging world marketing summit 2025. Its the gathering of all the big and amazing marketing & branding minds from all over the world. Discussing the best techniques for branding to deep dive into consumers mind. Will try to spread best knowledge about marketing.</div>
                            </div>
                            <div className="btn-box">
                                <Link to="/pricing" className="theme-btn btn-style-one icon-btn bg-yellow">
                                    <i className="icon flaticon-tickets"></i>
                                    <span className="btn-title">Buy Ticket</span>
                                </Link>
                                <Link to="/contact" className="theme-btn btn-style-one icon-btn">
                                    <i className="icon flaticon-placeholder"></i>
                                    <span className="btn-title">Location</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="outer-box show-xl">
                        <div className="image-box" data-aos="fade-up">
                            <figure className="image">
                                <img src="/images/resource/about1-1.png" alt="Image" />
                            </figure>
                            <div className="speaker-box">
                                <i className="icon flaticon-mic" />
                                <div className="count">15</div>
                                <div className="text">Iconic <br /> Speakers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV1;