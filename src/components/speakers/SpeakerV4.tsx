import { Link } from "react-router-dom";
import speakersV4Data from "../../assets/jsonData/speakers/speakersV4Data.json"
import SingleSpeakerV4 from "./SingleSpeakerV4";
import { useState } from "react";
import AnimatedText from "../animation/AnimatedText";

const SpeakerV4 = () => {

    const [activeSpeakerId, setActiveSpeakerId] = useState(speakersV4Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveSpeakerId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <section className="speakers-section-four">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/10.png)' }} />
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="sec-title-outer">
                            <div className="sec-title orange mb-0">
                                <span className="sub-title">SPEAKERS</span>
                                <AnimatedText>
                                    Meet Now <br /> Our Incredible <br /> Speakers
                                </AnimatedText>
                            </div>
                            <div className="text-box">
                                <div className="text">Main event for professionals in the world <br /> of design and architecture</div>
                                <div className="btn-box">
                                    <Link to="/contact" className="theme-btn btn-style-one bg-yellow">
                                        <span className="btn-title">Registration Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="blocks-box two row">
                            {speakersV4Data.slice(0, 1).map(speaker =>
                                <div className="speaker-block-four has-active col-lg-12 col-md-12 col-sm-12" key={speaker.id}>
                                    <div
                                        className={`inner-box ${activeSpeakerId === speaker.id ? "active" : ""}`}
                                        onMouseEnter={() => handleMouseEnter(speaker.id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <SingleSpeakerV4 speaker={speaker} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="blocks-box">
                            <div className="row">
                                {speakersV4Data.slice(1, 7).map(speaker =>
                                    <div className={`speaker-block-four has-active ${speaker ? speaker.color : ""} col-xl-4 col-lg-6 col-md-6 col-sm-12`} key={speaker.id}>
                                        <div
                                            className={`inner-box ${activeSpeakerId === speaker.id ? "active" : ""}`}
                                            onMouseEnter={() => handleMouseEnter(speaker.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <SingleSpeakerV4 speaker={speaker} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpeakerV4;