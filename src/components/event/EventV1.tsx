import eventV1ButtonData from "../../assets/jsonData/event/eventV1ButtonData.json"
import EventV1Button from "./EventV1Button"
import eventV1Data from "../../assets/jsonData/event/eventV1Data.json"
import SingleEventV1 from "./SingleEventV1";
import AnimatedText from "../animation/AnimatedText";

const EventV1 = () => {
    return (
        <>
            <section className="event-section">
                <div className="shape-three bounce-y" />
                <div className="shape-four bounce-y" />
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Event Schedule</span>
                        <h2 className="scrub-each-word text-split"></h2>

                        <AnimatedText>
                            Digital Events List
                        </AnimatedText>

                        <div className="text">Today, what started as a small conference has turned into the unmissable <br /> rendez-vous for product people.</div>

                    </div>
                    <div className="event-tabs tabs-box">
                        <ul className="tab-btns tab-buttons" role="tablist">
                            {eventV1ButtonData.map(button =>
                                <EventV1Button button={button} key={button.id} />
                            )}
                        </ul>

                        <div className="tabs-content">
                            {eventV1Data.map(event =>
                                <div
                                    id={`${event.tabId}`}
                                    className={`tab tab-pane fade ${event.activeClass}`}
                                    role="tabpanel"
                                    key={event.id}
                                >
                                    <div className="outer-box">
                                        {event.tabData.map(block =>
                                            <SingleEventV1 block={block} key={block.id} />
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventV1;