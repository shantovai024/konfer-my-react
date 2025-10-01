import AnimatedText from "../animation/AnimatedText";
import eventV2ButtonData from "../../assets/jsonData/event/eventV2ButtonData.json"
import EventV2Button from "./EventV2Button";
import eventV2Data from "../../assets/jsonData/event/eventV2Data.json"
import SingleEventV2 from "./SingleEventV2";

const EventV2 = () => {
    return (
        <>
            <section className="event-section-two">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/4.jpg)' }} />
                <div className="auto-container">
                    <div className="sec-title light">
                        <span className="sub-title">Event Schedule</span>
                        <AnimatedText>
                            Digital Events List
                        </AnimatedText>
                        <div className="text">Today, what started as a small conference has turned into the unmissable <br /> rendez-vous for product people.</div>
                    </div>
                    <div className="event-tabs-two tabs-box">
                        <ul className="tab-btns tab-buttons" role="tablist">
                            {eventV2ButtonData.map(button =>
                                <EventV2Button button={button} key={button.id} />
                            )}
                        </ul>
                        <div className="tabs-content">
                            {eventV2Data.map(event =>
                                <div
                                    id={`${event.tabId}`}
                                    className={`tab tab-pane fade ${event.activeClass}`}
                                    role="tabpanel"
                                    key={event.id}
                                >
                                    <div className="outer-box">
                                        {event.tabData.map(block =>
                                            <SingleEventV2 block={block} key={block.id} />
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

export default EventV2;