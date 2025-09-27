import NewsLetterForm from "../form/NewsLetterForm";

const SubscribeV1 = () => {
    return (
        <>
            <section className="subscribe-section">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="content-box">
                            <div className="shape-ten"></div>
                            <div className="row">
                                <div className="content-column col-xl-5 col-lg-12 col-md-12 col-sm-12" data-aos="fade-left" data-aos-delay="100">
                                    <div className="inner-column">
                                        <div className="sub-title">Get The Latest Updates</div>
                                        <h3 className="title">Signup For Newsletter</h3>
                                    </div>
                                </div>
                                <div className="form-column col-xl-7 col-lg-12 col-md-12 col-sm-12" data-aos="fade-right" data-aos-delay="200">
                                    <div className="inner-column">
                                        <div className="subscribe-form">
                                            <NewsLetterForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SubscribeV1;