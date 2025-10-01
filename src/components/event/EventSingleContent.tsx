import VideoV2 from "../videos/VideoV2";

interface DataType {
    title: string;
    speaker?: string;
}

const EventSingleContent = ({ eventInfo }: { eventInfo: DataType }) => {
    const { speaker, title } = eventInfo

    return (
        <>
            <section className="event-single">
                <div className="shape-fourty" />
                <div className="auto-container">
                    <div className="outer-box">

                        <div className="event-single-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <div className="image-outer">
                                        <figure className="image">
                                            <img src="/images/resource/event-single-1.jpg" alt="Image" />
                                        </figure>
                                        <div className="icon-twentytwo" />
                                        <div className="icon-twentythree" />
                                        <div className="thumb-box">
                                            <div className="thumb">
                                                <img src="/images/resource/event-single-thumb.png" alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <ul className="location-box">
                                        <li><i className="icon fa fa-map-marker-alt" />New York, USA</li>
                                        <li><i className="icon fa fa-microphone" />{speaker ? speaker : "Ahmed Bhai"} <span>(Speaker)</span></li>
                                        <li className="date"><i className="icon fa fa-clock" />12:00 pm - 02:00 pm</li>
                                    </ul>
                                    <h2 className="title">{title}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="text">Captivating performances, interactive workshops, and delightful culinary delights await you at Harmonia Music Festival.</div>
                        <div className="text">Artificial Intelligence (AI) is a rapidly advancing field of technology that has the potential to revolutionize many aspects of our lives. From healthcare to finance, transportation to education, AI has the potential to transform the way we live, work, and interact with each other.</div>
                        <div className="text">One of the most exciting areas of AI is machine learning, which involves developing algorithms that can learn from data and improve their performance over time. This has already led to significant advances in areas such as image recognition, natural language processing, and autonomous driving.</div>
                        <div className="list-box">
                            <div className="image"><img src="/images/resource/event-single-2.jpg" alt="Image" /></div>
                            <ul className="event-single-list">
                                <li>Another area of AI that holds great promise is robotics, which involves developing machines.</li>
                                <li>AI also has the potential to improve healthcare, by enabling more accurate diagnosis and treatment.</li>
                                <li>However, there are also challenges associated with the development and deployment of AI.</li>
                            </ul>
                        </div>
                        <div className="images-box">
                            <div className="image-outer">
                                <figure className="image">
                                    <img src="/images/resource/event-single-3.png" alt="Image" />
                                </figure>
                                <div className="icon-twentyfive" />
                                <div className="icon-twentysix" />
                            </div>
                            <div className="image-outer">
                                <figure className="image">
                                    <img src="/images/resource/event-single-4.png" alt="Image" />
                                </figure>
                                <div className="icon-twentyfive" />
                                <div className="icon-twentysix" />
                            </div>
                        </div>
                        <div className="title-box">
                            <h2 className="title">Tips for creating content that’s educational</h2>
                            <div className="text">Captivating performances, interactive workshops, and delightful culinary delights await you at Harmonia Music Festival.</div>
                            <div className="text">Artificial Intelligence (AI) is a rapidly advancing field of technology that has the potential to revolutionize many aspects of our lives. From healthcare to finance, transportation to education, AI has the potential to transform the way we live, work, and interact with each other.</div>
                            <div className="text">One of the most exciting areas of AI is machine learning, which involves developing algorithms that can learn from data and improve their performance over time. This has already led to significant advances in areas such as image recognition, natural language processing, and autonomous driving.</div>
                        </div>
                    </div>
                </div>
            </section>

            <VideoV2 />

            {/* Event Single */}
            <section className="event-single">
                <div className="shape-fourty" />
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box mb-0">
                            <h2 className="title">Reimagine Business Possibilities</h2>
                            <div className="text mb-0">"this is the ultimate destination for professionals eager to stay ahead in the evolving business landscape. This event brings together to innovators, meetup industry leaders, and experts to explore the future of business strategy technology.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventSingleContent;