import { Link } from "react-router-dom";
import TimeV1 from "./TimeV1";
import { useMemo } from 'react';
import AnimatedText from "../animation/AnimatedText";

const CountdownV1 = () => {

    const time = useMemo(() => new Date("Mar 07 2026"), []);

    return (
        <>
            <section className="countdown-section">
                <div className="bg-pattern-2" />
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">

                            {/* Title Box */}
                            <div className="title-box col-xl-4 col-lg-12 col-md-12 col-sm-12" data-aos="fade-left">
                                <div className="sec-title light mb-0">
                                    <span className="sub-title">Countdown</span>
                                    <AnimatedText>
                                        Counter Event For <br /> Remaining Time
                                    </AnimatedText>
                                </div>
                            </div>

                            <div className="timer-column col-xl-4 col-lg-12 col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="200">
                                <div className="time-counter">
                                    <TimeV1 expiryTimestamp={time} />
                                </div>
                            </div>

                            <div className="btn-box col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                <Link to="/pricing" className="theme-btn btn-style-one bg-blue">
                                    <span className="btn-title">Buy Ticket</span>
                                </Link>
                            </div>
                        </div>
                        <figure className="image bounce-x">
                            <img src="/images/resource/countdown1-1.png" alt="Image" />
                        </figure>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CountdownV1;