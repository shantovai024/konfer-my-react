import { Link } from 'react-router-dom';
import Typewriter, { TypewriterClass } from 'typewriter-effect';

const BannerV3 = () => {
    return (
        <>
            <section className="banner-section-three">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/banner/3.png)' }} />
                <div className="shape-twentysix bounce-y" />
                <div className="shape-twentyseven bounce-y" />
                <div className="floating-title">Climate Change</div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title-box">
                            <div className="title-outer">
                                <h1 className="title" data-aos="fade-left">Get meet</h1>
                                <h1 className="title">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "Grand Digital",
                                                "Regal Digital",
                                                "Digital Konfer",
                                            ],
                                            loop: true,
                                            autoStart: true,
                                        }}
                                        onInit={(typewriter: TypewriterClass) => {
                                            typewriter
                                                .typeString("Grand Digital")
                                                .pauseFor(2000)
                                                .deleteAll()
                                                .typeString("Regal Digital")
                                                .pauseFor(2000)
                                                .deleteAll()
                                                .typeString("Digital Konfer")
                                                .start();
                                        }}
                                    />
                                </h1>
                            </div>
                            <div className="btn-box hide-xxl" data-aos="fade-right" data-aos-delay="500">
                                <Link to="/pricing" className="theme-btn btn-style-one bg-orange">
                                    <span className="btn-title">Registration Now</span>
                                </Link>
                            </div>
                        </div>
                        <div className="image-box">
                            <figure className="image overlay-anim" data-aos="zoom-in" data-aos-delay="800">
                                <img src="/images/banner/3-1.jpg" alt="Image" />
                            </figure>
                            <div className="content">
                                <div className="icon-mic" />
                                <h1 className="title title-anim">Conference</h1>
                                <div className="text" data-aos="fade-right" data-aos-delay="2500">There are many variations of passages of Lorem Ipsum avail at, but majority have suffered alteration in some form, by injected hum our, or rando missed words.</div>
                            </div>
                        </div>
                        <div className="btn-box show-xxl" data-aos="fade-right" data-aos-delay="3000">
                            <Link to="/contact" className="theme-btn btn-style-one bg-yellow">
                                <span className="btn-title">Registration Now</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerV3;