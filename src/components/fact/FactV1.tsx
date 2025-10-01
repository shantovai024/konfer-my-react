import { Link } from "react-router-dom";
import AnimatedText from "../animation/AnimatedText";
import factV1Data from "../../assets/jsonData/fact/factV1Data.json"
import SingleFactV1 from "./SingleFactV1";

const FactV1 = () => {
    return (
        <>
            <section className="funfact-section">
                <div className="bg bg-pattern-7" />
                <div className="shape-thirtytwo bounce-y" />
                <div className="shape-thirtythree bounce-y" />
                <div className="auto-container">
                    <div className="sec-title-outer">
                        <div className="sec-title light mb-0">
                            <span className="sub-title">Why Choose Us</span>
                            <h2 className="text-reveal-anim">
                                <AnimatedText>
                                    We Turning <br /> Your Dream into Reality.
                                </AnimatedText>
                            </h2>
                        </div>
                        <div className="text-box">
                            <div className="text">Like previous year this year we are arranging world marketing summit 2024. Its the gathering of all the big and amazing marketing & branding minds from all over the world. Discussing the best techniques for branding to deep dive into consumers mind. Will try to spread best knowledge about marketing.</div>
                            <div className="btn-box">
                                <Link to="/event" className="theme-btn btn-style-one bg-orange">
                                    <span className="btn-title">Discover More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="fact-counter">
                        <div className="row">
                            {factV1Data.map(fact =>
                                <SingleFactV1 fact={fact} key={fact.id} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FactV1;