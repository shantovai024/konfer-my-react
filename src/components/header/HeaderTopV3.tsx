import SocialV1 from "../social/SocialV1";

const HeaderTopV2 = () => {
    return (
        <>
            <div className="header-top">
                <div className="auto-container">
                    <div className="inner-box">
                        <div className="icon-seventeen"></div>
                        <div className="icon-eighteen"></div>
                        <ul className="contact-list">
                            <li><span className="bold">Address:</span> 30 Bridge, Brooklyn street, USA.</li>
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

export default HeaderTopV2;