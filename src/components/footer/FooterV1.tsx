import { Link } from "react-router-dom";
import SocialV1 from "../social/SocialV1";

const FooterV1 = () => {
    return (
        <>
            <footer className="main-footer footer-style-one">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/3.jpg)' }} />
                <div className="shape-eleven bounce-y" />
                <div className="shape-twelve bounce-y" />

                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">

                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        <div className="logo">
                                            <Link to="/">
                                                <img src="/images/logo.svg" alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="text">Event is a great opportunity to engage with experts in the field, share ideas, and network with peers. Please by to confirm your attendance.</div>
                                        <ul className="social-icon-one">
                                            <SocialV1 />
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="footer-widget links-widget">
                                    <h3 className="widget-title">Quick Links</h3>
                                    <div className="widget-content">
                                        <ul className="user-links">
                                            <li><i className="fa fa-angle-double-right"></i><Link to="/about-us">About Us</Link></li>
                                            <li><i className="fa fa-angle-double-right"></i><Link to="/services">Services</Link></li>
                                            <li><i className="fa fa-angle-double-right"></i><Link to="/projects">Projects</Link></li>
                                            <li><i className="fa fa-angle-double-right"></i><Link to="/schedule">Schedule</Link></li>
                                            <li><i className="fa fa-angle-double-right"></i><Link to="/blog">Blogs</Link></li>
                                            <li><i className="fa fa-angle-double-right"></i><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <div className="footer-widget gallery-widget">
                                    <h3 className="widget-title">Gallery</h3>
                                    <div className="widget-content">
                                        <div className="swiper gallery-swiper">
                                            {/* <div className="insta-gallery swiper-wrapper">
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-1.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-1.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-2.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-2.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-3.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-3.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-4.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-4.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-5.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-5.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-6.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-6.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-1.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-1.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-2.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-2.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-3.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-3.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-4.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-4.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-5.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-5.jpg" alt="Image" /></a></figure>
                                                <figure className="image swiper-slide"><a href="images/resource/gallery-thumb-6.jpg" data-rel="lightcase"><img src="images/resource/gallery-thumb-6.jpg" alt="Image" /></a></figure>
                                            </div> */}
                                        </div>
                                        <div className="nav-box">
                                            <div className="swiper-button-prev"><span className="icon fa fa-arrow-left " /></div>
                                            <div className="swiper-button-next"><span className="icon fa fa-arrow-right " /></div>
                                        </div>
                                    </div>
                                    <div className="contact-widget">
                                        <h3 className="widget-title">Information</h3>
                                        <div className="widget-content">
                                            <div className="contact-list-box">
                                                <ul className="contact-list-two light">
                                                    <li>
                                                        <i className="fa fa-map-marker-alt" />
                                                        30 Bridge, Brooklyn street, <br /> United State of America.
                                                    </li>
                                                </ul>
                                                <ul className="contact-list-two two light">
                                                    <li>
                                                        <i className="fa fa-envelope" />
                                                        <a href="mailto:confer@hotmail.com">confer@hotmail.com</a>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-phone" />
                                                        <a href="tel:+250327101235">+25 032 7101235</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">
                                &copy; Copyright {(new Date().getFullYear())} All Rights Reserved by
                                 <Link to="https://themeforest.net/user/expert-themes/portfolio" target='_blank'>Expert-Themes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default FooterV1;