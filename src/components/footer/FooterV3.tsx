import { Link } from "react-router-dom";
import SocialV1 from "../social/SocialV1";
import { toast } from "react-toastify";
import blogV1Data from "../../assets/jsonData/blog/blogV1Data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import FooterRecentPostV2 from "../widgets/FooterRecentPostV2";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const FooterV3 = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Your Message")
    }

    return (
        <>
            <footer className="main-footer footer-style-three">
                <div className="bg bg-pattern-10" />
                <div className="icon-fourteen bounce-x" />
                <div className="icon-fifteen" />
                <div className="icon-sixteen" />

                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="footer-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        <div className="icon-star" />
                                        <h1 className="title">Let's Connect.</h1>
                                        <div className="text">Quisquam est, qui dolorem ipsum quia dolor sit amet, consecte adipisci velit, sed quia non numquam eius modi tempora incidu labore et dolore magnam.</div>
                                        <ul className="social-icon-two light">
                                            <SocialV1 />
                                        </ul>
                                        <div className="copyright-text">
                                            &copy; Copyright {(new Date().getFullYear())} All Rights Reserved by
                                            <Link to="https://themeforest.net/user/expert-themes/portfolio" target='_blank'> Expert-Themes</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Column */}
                            <div className="footer-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                                <div className="footer-widget post-widget">
                                    <div className="widget-content">
                                        <Swiper className="post-swiper"
                                            slidesPerView={1}
                                            spaceBetween={98}
                                            loop={true}
                                            navigation={{
                                                nextEl: ".swiper-button-next",
                                                prevEl: ".swiper-button-prev",
                                            }}
                                        >
                                            {blogV1Data.slice(10, 12).map(blog =>
                                                <SwiperSlide className="recent-post" key={blog.id}>
                                                    <FooterRecentPostV2 blog={blog} />
                                                </SwiperSlide>
                                            )}
                                        </Swiper>
                                        <div className="nav-box">
                                            <div className="swiper-button-prev"><span className="icon fa fa-arrow-left " /></div>
                                            <div className="swiper-button-next"><span className="icon fa fa-arrow-right " /></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-widget newsletter-widget">
                                    <h3 className="widget-title">Newsletter</h3>
                                    <div className="widget-content">
                                        <div className="text">Subscribe to our newsletter &amp; keep up with all the latest events.</div>
                                        <div className="newsletter-form-two">
                                            <form onSubmit={handleForm}>
                                                <div className="form-group">
                                                    <input type="email" name="email" className="email" autoComplete="off" placeholder="Subscribe Email ......" required />
                                                    <button type="submit" className="button">
                                                        <i className="flaticon-mail" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-widget contact-widget">
                                    <h3 className="widget-title">Information</h3>
                                    <div className="widget-content">
                                        <ul className="contact-list-three light">
                                            <li className="location">
                                                <i className="fa fa-map-marker-alt" />
                                                30 Bridge, Brooklyn street, <br /> United State of America.
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <i className="fa fa-phone" />
                                                    <div className="h5">Contact No.</div>
                                                </div>
                                                <a href="tel:+250327101235">+25 032 7101235</a>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <i className="fa fa-envelope" />
                                                    <div className="h5">Email Address</div>
                                                </div>
                                                <a href="mailto:confer@hotmail.com">confer@hotmail.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV3;