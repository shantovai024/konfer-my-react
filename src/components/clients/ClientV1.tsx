import { Link } from "react-router-dom";
import ClientV1Data from "../../assets/jsonData/clients/clientV1Data.json"
import SingleClientV1 from "./SingleClientV1";
import AnimatedText from "../animation/AnimatedText";

const ClientV1 = () => {
    return (
        <>
            <section className="client-section pt-0">
                <div className="auto-container">
                    <div className="row">

                        <div className="content-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column" data-aos="fade-left">
                                <div className="sec-title">
                                    <span className="sub-title">Who helps us to create</span>
                                    <AnimatedText>
                                        Our Platinum Sponsors
                                    </AnimatedText>
                                    <div className="text">We have dedicated tracks for every industry Whether you want to hire tech’s top talent meet with the policymakers influencing.</div>
                                </div>

                                <div className="btn-box">
                                    <Link to="/contact" className="theme-btn btn-style-one bg-yellow">
                                        <span className="btn-title">Become a Sponsor</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="sponsors-column col-xl-8 col-lg-12 col-md-12 col-sm-12" data-aos="fade-right" data-aos-delay="200">
                            <div className="inner-column">
                                {ClientV1Data.map(client =>
                                    <SingleClientV1 key={client.id} client={client} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClientV1;