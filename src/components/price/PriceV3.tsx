import { Link } from "react-router-dom";
import AnimatedText from "../animation/AnimatedText";
import priceV3Data from "../../assets/jsonData/price/priceV3Data.json"
import SinglePriceV3 from "./SinglePriceV3";
import { useState } from "react";

const PriceV3 = () => {

    const [activePriceId, setActivePriceId] = useState(priceV3Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActivePriceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <section className="pricing-section-three">
                <div className="bg bg-pattern-8" />
                <div className="auto-container">
                    <div className="row">

                        {/* Blocks Column */}
                        <div className="blocks-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="row">

                                    {priceV3Data.map(plan =>
                                        <div
                                            className="pricing-block-three has-active col-lg-6 col-md-6 col-sm-12"
                                            data-aos="fade-left"
                                            data-aos-delay={plan.delay}
                                            key={plan.id}
                                        >
                                            <div
                                                key={plan.id}
                                                className={`inner-box ${activePriceId === plan.id ? "active" : ""}`}
                                                onMouseEnter={() => handleMouseEnter(plan.id)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <SinglePriceV3 plan={plan} />
                                            </div>
                                        </div>
                                    )}



                                </div>
                            </div>
                        </div>

                        <div className="content-column col-xl-4 col-lg-12 col-md-12 col-sm-12 wow fadeInRight">
                            <div className="inner-column">
                                <div className="sec-title orange">
                                    <span className="sub-title">About The Event</span>
                                    <AnimatedText>
                                        International Business
                                    </AnimatedText>
                                </div>

                                <div className="text">This conference is created by professional designers for other designers, improve their knowledge in design sphere. We community for years, that is why we have our audience.</div>

                                <div className="text">This conference is created by professional designers for other designers, who want to their knowledge in design sphere. by professional designers for other</div>

                                <div className="btn-box">
                                    <Link to="/contact" className="theme-btn btn-style-one bg-orange">
                                        <span className="btn-title">Become Member</span>
                                    </Link>
                                </div>
                                <div className="text bold">All prices exclude 25% VAT. For more details, view our
                                    <Link to="/about"> Terms & Policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PriceV3;