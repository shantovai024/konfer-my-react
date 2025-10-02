import { Link } from "react-router-dom";
import SplitText from '../animation/SplitText.jsx';

interface DataType {
    id: number;
    bgImage: string;
    signImage: string;
    designation: string;
    lineImage: string;
    title: string;
    subtitle: string;
    smallImages: string[];
    country: string;
    address: string;
    buttonText: string;
}

const SingleBannerV1 = ({ banner }: { banner: DataType }) => {
    const { bgImage, title, subtitle, country, address, buttonText, smallImages } = banner

    return (
        <>
            <div className="bg bg-image" style={{ backgroundImage: `url(/images/banner/${bgImage})` }} />
            <div className="auto-container">
                <div className="content-box">
                    <div className="author-box">
                        <div className="inner-box">
                            <div className="sign" data-aos="fade-up" data-aos-delay="500">
                                <img src="/images/resource/banner-sign.png" alt="Signature" />
                            </div>
                            <div className="designation animate-3" data-aos="fade-up" data-aos-delay="700">GUEST SPEAKER</div>
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
                            {title}
                        </SplitText>
                        <br />
                        <span className="banner-small-images me-4">
                            {smallImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={`/images/banner/${img}`}
                                    alt="image"
                                    className="animate-x"
                                />
                            ))}
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
                            {subtitle}
                        </SplitText>
                    </h1>
                    <div className="location-box" data-aos="fade-right" data-aos-delay="3100">
                        <div className="text">{country}
                            <i className="icon fa fa-long-arrow-right ms-1" /> <br />
                            {address}
                        </div>
                        <div className="btn-box">
                            <Link to="/contact" className="theme-btn btn-style-one bg-yellow">
                                <span className="btn-title">{buttonText}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV1;