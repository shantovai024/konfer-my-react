import SingleFaqV1 from "./SingleFaqV1";
import faqV1Data from "../../assets/jsonData/faq/faqV1Data.json"
import AnimatedText from "../animation/AnimatedText";

const FaqV1 = () => {
    return (
        <>
            <section className="faq-section">
                <div className="shape-twentythree" />
                <div className="auto-container">
                    <div className="row">
                        <div className="image-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="exp-box">
                                    <svg viewBox="0 0 100 100" width={100} height={100} className="circular-text">
                                        <defs><path id="circle" d="M 50, 50m -37, 0a 37,37 0 1,1 74,0a 37,37 0 1,1 -74,0" /></defs>
                                        <text><textPath xlinkHref="#circle">Questions about the cenference </textPath></text>
                                    </svg>
                                    <div className="logo"><img src="/images/icons/faq-fav.png" alt="Image" /></div>
                                </div>
                                <figure className="image overlay-anim">
                                    <img src="/images/resource/faq1-1.jpg" alt="Image" />
                                </figure>
                                <figure className="image two overlay-anim">
                                    <img src="/images/resource/faq1-2.jpg" alt="Image" />
                                </figure>
                            </div>
                        </div>

                        <div className="content-column col-xl-5 col-lg-12 col-md-12 col-sm-12 wow fadeInRight">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title orange">Questions & answers</span>
                                    <AnimatedText>
                                        Have Any Questions? Find Answers Here!
                                    </AnimatedText>
                                </div>
                                <ul className="accordion-box" id="faqAccordion">
                                    {faqV1Data.map((faq) => (
                                        <SingleFaqV1 faq={faq} key={faq.id} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqV1;