import SocialV1 from "../social/SocialV1";

const HeaderTopV1 = () => {
    return (
        <>
            <div className="header-top">
                <div className="auto-container">
                    <div className="inner-box">
                        <ul className="contact-list">
                            <li><span className="bold">Address:</span> 30 Bridge, Brooklyn Street, USA.</li>
                            <li><span className="bold">Phone:</span> <a href="tel:+250327101235">+25 032 7101235</a></li>
                        </ul>
                        <ul className="social-icon">
                            <SocialV1 />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV1;