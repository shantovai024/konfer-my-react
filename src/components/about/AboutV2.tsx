import { Link } from "react-router-dom";
import AnimatedText from "../animation/AnimatedText";
import aboutV2Data from '../../assets/jsonData/about/aboutV2Data.json'
import SingleAboutV2 from "./SingleAboutV2";

const AboutV2 = () => {
    return (
        <>
            <section className="about-section-two">
                <div className="shape-fourteen" />
                <div className="large-container">
                    <div className="row">

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="icon-six" />
                                <figure className="image overlay-anim">
                                    <img src="/images/resource/about2-1.jpg" alt="Image" />
                                </figure>
                                <figure className="image two overlay-anim">
                                    <img src="/images/resource/about2-2.jpg" alt="Image" />
                                </figure>
                                <div className="author-box bounce-x">
                                    <img src="/images/resource/author-1.png" alt="Image" />
                                    <img src="/images/resource/author-2.png" alt="Image" />
                                    <img src="/images/resource/author-3.png" alt="Image" />
                                    <div className="text">2k</div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12" data-aos="fade-right">
                            <div className="inner-column">
                                <div className="sec-title orange">
                                    <span className="sub-title">about our business conferences</span>
                                    <AnimatedText>
                                        Building The <br /> Future of Events & <br /> Conferences
                                    </AnimatedText>
                                    <div className="text">Like previous year this year we are arranging world marketing summit 2025. Its the gathering of all the big and amazing marketing & branding minds from all over the world. Discussing the best techniques for branding to deep dive into consumers mind. Will try to spread best knowledge about marketing.</div>
                                </div>
                                <ul className="feature-list-two two-column">
                                    {aboutV2Data.map(about =>
                                        <SingleAboutV2 about={about} key={about.id} />
                                    )}
                                </ul>
                                <div className="btn-box">
                                    <Link to="/pricing" className="theme-btn btn-style-one icon-btn bg-pink">
                                        <i className="icon flaticon-tickets" />
                                        <span className="btn-title">Buy Ticket</span>
                                    </Link>
                                    <Link to="/contact" className="theme-btn btn-style-one icon-btn bg-orange">
                                        <i className="icon flaticon-placeholder" />
                                        <span className="btn-title">Location</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV2;