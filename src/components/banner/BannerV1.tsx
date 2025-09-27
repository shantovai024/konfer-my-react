import { useMemo } from 'react';
import TimeV1 from '../counter/TimeV1';
import { Link } from 'react-router-dom';
import SplitText from '../animation/SplitText.jsx'

const BannerV1 = () => {

    const time = useMemo(() => new Date("Nov 07 2025"), []);

    return (
        <>
            <section className="banner-section">
                <div className="bg bg-image" style={{ backgroundImage: `url(/images/banner/1.png` }}></div>
                <div className="auto-container">
                    <div className="banner-layer"></div>
                    <div className="content-box">
                        <div className="author-box">
                            <div className="inner-box">
                                <div className="sign" data-aos="fade-up" data-aos-delay="500">
                                    <img src="/images/resource/banner-sign.png" alt="image" />
                                </div>
                                <div className="designation" data-aos="fade-up" data-aos-delay="700">GUEST SPEAKER</div>
                                <div className="line" data-aos="fade-right" data-aos-delay="1000">
                                    <img src="/images/icons/icon-line.png" alt="Line" />
                                </div>
                            </div>
                        </div>
                        <h1 className="title title-anim">
                            <SplitText
                                delay={100}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                            >
                                Conference
                            </SplitText>
                            <br />
                            <span className="banner-small-images me-4">
                                <img src="/images/banner/user-1.png" alt="image" data-aos="fade-right" data-aos-delay="2300" />
                                <img src="/images/banner/user-2.png" alt="image" data-aos="fade-right" data-aos-delay="2500" />
                                <img src="/images/banner/user-3.png" alt="image" data-aos="fade-right" data-aos-delay="2800" />
                            </span>
                            <SplitText
                                delay={100}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                                className="text-light"
                            >
                                For insights
                            </SplitText>
                        </h1>
                        <div className="location-box" data-aos="fade-right" data-aos-delay="3100">
                            <div className="text">Germany
                                <i className="icon fa fa-long-arrow-right ms-1"></i> <br />
                                1047 Brea Mall #1047 Brea, CA 92821
                            </div>
                            <div className="btn-box">
                                <Link to="/contact" className="theme-btn btn-style-one bg-yellow">
                                    <span className="btn-title">Registration Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Time Counter --> */}
                    <div className="time-counter" >
                        <TimeV1 expiryTimestamp={time} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerV1;