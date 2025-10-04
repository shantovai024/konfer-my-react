import { Link } from "react-router-dom";
import SocialV1 from "../social/SocialV1";
import { toast } from "react-toastify";
import blogV1Data from "../../assets/jsonData/blog/blogV1Data.json";
import FooterRecentPost from "../widgets/FooterRecentPost";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const FooterV2 = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Your Message")
    }

    return (
        <>
            <footer className="main-footer footer-style-two">
                <div className="bg bg-pattern-4" />
                <div className="shape-eighteen" />
                <div className="icon-twelve" />
                <div className="icon-thirteen" />

                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">

                            <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        <div className="logo">
                                            <Link to="/">
                                                <img src="/images/logo.svg" alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="text">We bring over 2,600 journalists from the world”s leading publications to Web Summit. They’re part</div>
                                        <div className="email-box">
                                            <a href="mailto:info@email.com" className="email">info@email.com</a>
                                        </div>
                                        <ul className="social-icon-two light">
                                            <SocialV1 />
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <div className="widget-content">
                                        <ul className="user-links">
                                            <li>
                                                <i className="fa fa-arrow-right" />
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-arrow-right" />
                                                <Link to="/speaker">Leadership</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-arrow-right" />
                                                <Link to="/about">Terms</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-arrow-right" />
                                                <Link to="/about">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-arrow-right" />
                                                <Link to="/about">Licenses</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-arrow-right" />
                                                <Link to="/about">Privacy Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget newsletter-widget">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <div className="widget-content">
                                        <div className="text">Subscribe to our newsletter & keep up with all the latest events.</div>
                                        <h5 className="title"><i className="flaticon-place" />Address</h5>
                                        <div className="text">30 Bridge, Brooklyn street, United State of America.</div>
                                        <div className="newsletter-form">
                                            <form onSubmit={handleForm}>
                                                <div className="form-group">
                                                    <input type="email" name="email" className="email" autoComplete="off" placeholder="Subscribe Email" required />
                                                    <button type="submit" className="button">
                                                        <i className="flaticon-mail" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget post-widget">
                                    <h4 className="widget-title">Latest News</h4>
                                    <div className="widget-content">
                                        {blogV1Data.slice(0, 2).map(blog =>
                                            <FooterRecentPost blog={blog} key={blog.id} />
                                        )}
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
                                <Link to="https://themeforest.net/user/expert-themes/portfolio" target='_blank'> Expert-Themes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV2;