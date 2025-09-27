import AnimatedText from "../animation/AnimatedText";
import speakersV1Data from '../../assets/jsonData/speakers/speakersV1Data.json'
import SingleSpeakerV1 from "./SingleSpeakerV1";
import { Link } from "react-router-dom";
import { useState } from "react";

const SpeakerV1 = () => {

    const [activeSpeakerId, setActiveSpeakerId] = useState(speakersV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveSpeakerId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <section className="speakers-section">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/1.jpg)' }} />
                <div className="auto-container">
                    <div className="sec-title light text-center">
                        <span className="sub-title">Events Speakers</span>
                        <AnimatedText>
                            World Class Speakers <br /> For Conference
                        </AnimatedText>
                    </div>
                    <div className="row">

                        {speakersV1Data.map(speaker =>
                            <div className="speaker-block has-active col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay={speaker.delay} key={speaker.id}>
                                <div
                                    key={speaker.id}
                                    className={`inner-box ${activeSpeakerId === speaker.id ? "active" : ""}`}
                                    onMouseEnter={() => handleMouseEnter(speaker.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SingleSpeakerV1 speaker={speaker} key={speaker.id} />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="btn-box text-center">
                        <Link to="/contact" className="theme-btn btn-style-one bg-yellow">
                            <span className="btn-title">Registration Now</span>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default SpeakerV1;