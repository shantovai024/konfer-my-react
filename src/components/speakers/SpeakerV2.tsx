import { Link } from "react-router-dom";
import speakersV2Data from "../../assets/jsonData/speakers/speakersV2Data.json"
import AnimatedText from "../animation/AnimatedText";
import SingleSpeakerV2 from "./SingleSpeakerV2";
import { useState } from "react";

const SpeakerV2 = () => {

    const [activeSpeakerId, setActiveSpeakerId] = useState(speakersV2Data[1]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveSpeakerId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <section className="speakers-section-two">
                <div className="shape-nineteen bounce-y" />
                <div className="outer-box">
                    <div className="row">
                        <div className="blocks-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {speakersV2Data.map(speaker =>
                                    <div className="speaker-block-two has-active"  >
                                        <div
                                            key={speaker.id}
                                            className={`inner-box ${activeSpeakerId === speaker.id ? "active" : ""}`}
                                            onMouseEnter={() => handleMouseEnter(speaker.id)}
                                            onMouseLeave={handleMouseLeave}>

                                            <SingleSpeakerV2 speaker={speaker} key={speaker.id} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="content-column col-xl-5 col-lg-12 col-md-12 col-sm-12 wow fadeInRight">
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <span className="sub-title">SPEAKERS</span>
                                    <AnimatedText>
                                        Meet Now <br /> Our Incredible <br />Speakers
                                    </AnimatedText>
                                    <div className="text">Main event for professionals in the world of design <br /> and architecture</div>
                                </div>
                                <div className="btn-box">
                                    <Link to="/pricing" className="theme-btn btn-style-one icon-btn bg-pink">
                                        <i className="icon flaticon-tickets" />
                                        <span className="btn-title">Buy Ticket</span>
                                    </Link>
                                    <Link to="/contact" className="theme-btn btn-style-one icon-btn bg-orange">
                                        <i className="icon flaticon-placeholder" />
                                        <span className="btn-title">Location</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpeakerV2;