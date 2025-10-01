import { useMemo } from "react";
import useExpandAnimation from "../../hooks/useExpandAnimation";
import TimeV2 from "./TimeV2";

const CountdownV2 = () => {

    const time = useMemo(() => new Date("Mar 07 2026"), []);

    useExpandAnimation(".expand-section");

    return (
        <>
            <section className="countdown-section-two">
                <div className="outer-box expand-section">
                    <figure className="image bg-reveal">
                        <img src="/images/resource/countdown2-1.jpg" alt="Image" />
                    </figure>
                    <div className="large-container">
                        <div className="content-box">

                            <div className="title-box">
                                <div className="text">Conference Date</div>
                                <h3 className="title">Counting Time ...</h3>
                            </div>

                            <div className="timer-box">
                                <div className="time-counter">
                                    <TimeV2 expiryTimestamp={time} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CountdownV2;