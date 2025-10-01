import { Link } from "react-router-dom";
import AnimatedText from "../animation/AnimatedText";

const AboutV3 = () => {
    return (
        <>
            <section className="about-section-three pt-0">
                <div className="large-container">
                    <div className="row">

                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image overlay-anim">
                                        <img src="/images/resource/about3-1.jpg" alt="Image" />
                                    </figure>
                                    <figure className="image two overlay-anim">
                                        <img src="/images/resource/about3-2.jpg" alt="Image" />
                                    </figure>
                                </div>
                                <div className="exp-box bounce-x">
                                    <h2 className="title">+ 25</h2>
                                    <div className="text">Years of <br /> Experience</div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
                            <div className="inner-column">
                                <div className="sec-title orange">
                                    <span className="sub-title">About Company</span>
                                    <h2 className="text-reveal-anim">
                                        <AnimatedText>
                                            International <br /> Business Event For Conferences
                                        </AnimatedText>
                                    </h2>
                                    <div className="text">There are many variations of passages of avail but the majority have suffered alteration in some form, by injected humor, or randomized words.</div>
                                </div>
                                <div className="bottom-box">
                                    <div className="blocks-box">

                                        <div className="about-block">
                                            <div className="inner-box">
                                                <svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M25 1V49M1 25H49M34.3913 25C34.3913 30.1867 30.1867 34.3913 25 34.3913C19.8133 34.3913 15.6087 30.1867 15.6087 25C15.6087 19.8133 19.8133 15.6087 25 15.6087C30.1867 15.6087 34.3913 19.8133 34.3913 25ZM43.7826 25C43.7826 35.3733 35.3733 43.7826 25 43.7826C14.6267 43.7826 6.21739 35.3733 6.21739 25C6.21739 14.6267 14.6267 6.21739 25 6.21739C35.3733 6.21739 43.7826 14.6267 43.7826 25Z" stroke="#52048E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <div className="content">
                                                    <h4 className="title">Target Audience</h4>
                                                    <div className="text">Utilize social media platforms, email newsletters, and  partnerships with event organizers</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="about-block">
                                            <div className="inner-box">
                                                <i className="icon flaticon-team" />
                                                <div className="content">
                                                    <h4 className="title">20+ Main Sponsor</h4>
                                                    <div className="text two">Utilize social media platforms, email newsletters, and  partnerships with event organizers</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="thumb-box">
                                            <figure className="image">
                                                <img src="/images/resource/about3-thumb.png" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link to="/about" className="theme-btn btn-style-one bg-orange">
                                            <span className="btn-title">Discover More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV3;