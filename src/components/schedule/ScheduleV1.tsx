import ScheduleList from "./ScheduleList";
import ScheduleListV1Data from "../../assets/jsonData/schedule/ScheduleListV1Data.json";
import ScheduleV1Data from "../../assets/jsonData/schedule/ScheduleV1Data.json"
import { Link } from "react-router-dom";
import AnimatedText from "../animation/AnimatedText";

const ScheduleV1 = () => {
    return (
        <>
            <section className="schedule-section">
                <div className="anim-icons">
                    <span className="icon icon-circle-4" data-aos="zoom-in"></span>
                    <span className="icon icon-circle-3" data-aos="zoom-in"></span>
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">About Conference</span>
                        <AnimatedText>
                            Schedule Plan
                        </AnimatedText>
                    </div>
                    <div className="schedule-tabs tabs-box">

                        <div className="btns-box">
                            <ul className="tab-buttons clearfix nav nav-tabs">
                                {ScheduleListV1Data.map(list =>
                                    <ScheduleList list={list} key={list.id} />
                                )}
                            </ul>
                        </div>

                        <div className="tabs-content">
                            {ScheduleV1Data.map(schedule => {
                                return (
                                    <div className={`tab fade ${schedule.tabClass}`} id={schedule.tabId} key={schedule.id}>
                                        <div className="schedule-timeline">
                                            {schedule.tabData.map(block => {
                                                return (
                                                    <div className={`schedule-block ${block.blockClass}`} key={block.id}>
                                                        <div className="inner-box">
                                                            <div className="inner">
                                                                <div className="date">{block.sessionStart} <br /> {block.sessionEnd}</div>
                                                                <div className="speaker-info">
                                                                    <figure className="thumb">
                                                                        <img src={`/images/resource/${block.speakerThumb}`} alt="image" />
                                                                    </figure>
                                                                    <h5 className="name">{block.name}</h5>
                                                                    <span className="designation">{block.designation}</span>
                                                                </div>
                                                                <h4>
                                                                    <Link to={`/event-single/${schedule.id}/${block.id}`}>{block.title}</Link>
                                                                </h4>
                                                                <div className="text">{block.text}</div>
                                                                <div className="btn-box">
                                                                    <Link to={`/event-single/${schedule.id}/${block.id}`} className="theme-btn">{block.btnText}</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ScheduleV1;