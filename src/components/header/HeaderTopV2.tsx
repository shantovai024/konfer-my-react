import SocialV1 from "../social/SocialV1";

const HeaderTopV2 = () => {
    return (
        <>
            <div className="header-top-two">
                <div className="auto-container">
                    <div className="clearfix">
                        <div className="top-left clearfix">
                            <ul className="links clearfix">
                                <li><a href="tel:1-000-000-0000"><span className="icon fa fa-phone"></span>Call : 1-000-000-0000</a></li>
                                <li><a href="mailto:info@konfer.com"><span className="icon fa fa-envelope"></span>info@konfer.com</a></li>
                                <li><span className="icon fa fa-clock me-2"></span>Open Hours 09:00 am - 06:00 pm</li>
                            </ul>
                        </div>
                        <div className="top-right clearfix d-none d-lg-block">
                            <ul className="social-icons">
                                <SocialV1 />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV2;