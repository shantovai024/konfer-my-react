import { Link } from "react-router-dom";
import SocialV1 from "../social/SocialV1";

interface DataType {
    openSidebar: boolean;
    sidebarClose: () => void;
}

const SidebarV1 = ({ openSidebar, sidebarClose }: DataType) => {

    return (
        <>
            <div id="hidden-bar" className={`hidden-bar ${openSidebar ? "active-hidden-bar" : ""}`} >
                <div className="inner-box">
                    <div className="upper-box">
                        <div className="logo-box">
                            <div className="nav-logo">
                                <Link to="/">
                                    <img src="/images/logo-2.svg" alt="image" />
                                </Link>
                            </div>
                        </div>
                        <div className="close-btn" onClick={sidebarClose}><i className="icon fa fa-times"></i></div>
                    </div>
                    <div className="text-box">
                        <h4 className="title">Transforming your ideas into digital reality</h4>
                        <div className="text">Sed ut perspiciatis unde omnis natus error voluptatem santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab nllo inventore veritatis quasi architecto beatae vitae</div>
                    </div>
                    <ul className="contact-list-one">
                        <li>
                            <i className="icon lnr-icon-phone-handset"></i>
                            <span className="title">Call Now</span>
                            <div className="text"><a href="tel:+250327101235">+25 032 7101235</a></div>
                        </li>
                        <li>
                            <i className="icon lnr-icon-envelope1"></i>
                            <span className="title">Send Email</span>
                            <div className="text"><a href="mailto:confer@hotmail.com">confer@hotmail.com</a></div>
                        </li>
                        <li>
                            <i className="icon lnr-icon-map-marker"></i>
                            <span className="title">Address</span>
                            <div className="text">30 Bridge, Brooklyn street, <br /> United State of America.</div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <SocialV1 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarV1;