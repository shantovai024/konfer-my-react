import { Link } from "react-router-dom";
import AnimatedText from "../animation/AnimatedText";
import speakersV3Data from "../../assets/jsonData/speakers/speakersV3Data.json";
import SingleSpeakerV3 from "./SingleSpeakerV3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";

const SpeakerV3 = () => {
    const [progress, setProgress] = useState(0);

    // Helper function to calculate %
    const calculateProgress = (activeIndex: number, slidesPerView: number) => {
        return (
            ((activeIndex + 1) / (speakersV3Data.length - (slidesPerView - 1))) *
            100
        );
    };

    return (
        <section className="speakers-section-three">
            <div className="bg bg-pattern-6" />
            <div className="auto-container">
                <div className="sec-title-outer">
                    <div className="sec-title orange mb-0">
                        <span className="sub-title">SPEAKERS</span>
                        <AnimatedText>
                            Meet Now Our <br /> Incredible Speakers
                        </AnimatedText>
                    </div>
                    <div className="text-box">
                        <div className="btn-box">
                            <Link
                                to="/contact"
                                className="theme-btn btn-style-one bg-yellow"
                            >
                                <span className="btn-title">Registration Now</span>
                            </Link>
                        </div>
                        <div className="text">
                            Main event for professionals in the world <br /> of design and
                            architecture
                        </div>
                    </div>
                </div>

                <div className="carousel-outer">
                    <Swiper
                        className="team-slider"
                        slidesPerView={4}
                        spaceBetween={30}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1400: { slidesPerView: 4 },
                        }}
                        modules={[Autoplay]}
                        onInit={(swiper) => {
                            // ✅ Set initial progress on first load
                            const visibleSlides = swiper.params.slidesPerView as number;
                            setProgress(calculateProgress(swiper.activeIndex, visibleSlides));
                        }}
                        onSlideChange={(swiper) => {
                            const visibleSlides = swiper.params.slidesPerView as number;
                            setProgress(calculateProgress(swiper.activeIndex, visibleSlides));
                        }}
                    >
                        {speakersV3Data.map((speaker) => (
                            <SwiperSlide className="speaker-block-three" key={speaker.id}>
                                <div className="inner-box">
                                    <SingleSpeakerV3 speaker={speaker} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Progress Bar */}
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeakerV3;
