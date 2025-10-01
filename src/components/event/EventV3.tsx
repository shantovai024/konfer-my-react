import eventV3Data from "../../assets/jsonData/event/eventV3Data.json"
import SingleEventV3 from "./SingleEventV3";
import eventV3ButtonData from "../../assets/jsonData/event/eventV3ButtonData.json"
import EventV3Button from "./EventV3Button";
import AnimatedText from "../animation/AnimatedText";

const EventV3 = () => {

    return (
        <>
            <section className="event-section-three">
                <div className="auto-container">
                    <div className="sec-title-outer">
                        <div className="sec-title orange mb-0">
                            <span className="sub-title">Event Schedule</span>
                            <AnimatedText>
                                Digital Events List Views
                            </AnimatedText>
                        </div>
                        <div className="text">Captivating performances, interactive workshops, and delightful culinary delights await you at Harmonia Music Festival. Let the melodies transcend boundaries on this unforgettable musical journey.</div>
                    </div>
                    <div className="event-tabs-three tabs-box">
                        <ul className="tab-btns tab-buttons" role="tablist">
                            {eventV3ButtonData.map(button =>
                                <EventV3Button button={button} key={button.id} />
                            )}
                        </ul>

                        <div className="tabs-content">
                            {eventV3Data.map(event =>
                                <div
                                    id={`${event.tabId}`}
                                    className={`tab tab-pane fade ${event.activeClass}`}
                                    role="tabpanel"
                                    key={event.id}
                                >
                                    <div className="outer-box">
                                        {event.tabData.map(block =>
                                            <SingleEventV3 block={block} key={block.id} />
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

export default EventV3;