import priceV2Data from "../../assets/jsonData/price/priceV2Data.json"
import AnimatedText from "../animation/AnimatedText";
import Counter from "../counter/Counter";
import PriceV2Button from "./PriceV2Button";
import SinglePriceV2 from "./SinglePriceV2";

const PriceV2 = () => {
    return (
        <>
            <section className="pricing-section-two">
                <div className="shape-twentytwo bounce-y" />
                <div className="auto-container">
                    <div className="pricing-tabs tabs-box">
                        <div className="row">

                            {/* Tabs Column */}
                            <div className="tabs-column col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft">
                                <div className="inner-column">
                                    <div className="sec-title orange">
                                        <span className="sub-title">Conference Ticket Price</span>
                                        <AnimatedText>
                                            We Trust Force <br /> of Individual <br />Commitment.
                                        </AnimatedText>
                                        <div className="text">We are web designers, developers, project managers, And digital marketing professionals dedicated to Creative and solutions using the latest trend. digital marketing professionals dedicated to Creative and solution</div>
                                    </div>
                                    <div className="tab-btn-box">

                                        {/* Counter */}
                                        <div className="counter-block-three">
                                            <div className="inner-box">
                                                <div className="count-box">
                                                    <span className="count-text" >
                                                        <Counter end={5} />
                                                    </span> k+
                                                </div>
                                                <h5 className="counter-title">Sales a Ticket For Our <br /> Conference </h5>
                                            </div>
                                        </div>

                                        {/* Tab Button */}
                                        <ul className="tab-btns tab-buttons clearfix nav nav-tabs">
                                            {priceV2Data.map(list =>
                                                <PriceV2Button list={list} key={list.id} />
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            {/* Image Column */}
                            <div className="tabs-content col-xl-6 col-lg-12 col-md-12 col-sm-12">

                                {priceV2Data.map(plan => (
                                    <div className={`tab tab-pane fade ${plan.tabClass}`} id={plan.tabId} key={plan.id}>
                                        <div className="outer-box">
                                            <figure className="image bounce-y">
                                                <img src="/images/resource/pricing2-1.jpg" alt="Image" />
                                            </figure>
                                            <div className="pricing-block-two">
                                                <SinglePriceV2 plan={plan} />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PriceV2;