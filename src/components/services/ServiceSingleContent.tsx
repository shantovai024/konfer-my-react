import CategoryWidget from "../widgets/CategoryWidget";
import PostWidget from "../widgets/PostWidget";
import SearchWidget from "../widgets/SearchWidget";
import TagsWidget from "../widgets/TagsWidget";

interface DataType {
    title: string;
}

const ServiceSingleContent = ({ serviceInfo }: { serviceInfo: DataType }) => {
    const { title } = serviceInfo

    return (
        <>
            <section className="service-single">
                <div className="shape-fourty" />
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
                            <div className="outer-box">

                                <div className="service-single-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <div className="image-outer">
                                                <figure className="image">
                                                    <img src="/images/resource/service-single-1.jpg" alt="Image" />
                                                </figure>
                                                <div className="icon-twentytwo" />
                                                <div className="icon-twentythree" />
                                            </div>
                                        </div>
                                        <div className="content">
                                            <ul className="location-box">
                                                <li><i className="icon fa fa-map-marker-alt" />New York, USA</li>
                                                <li><i className="icon fa fa-microphone" />Michelle Larson <span>(Speaker)</span></li>
                                                <li className="date"><i className="icon fa fa-clock" />12:00 pm - 02:00 pm</li>
                                            </ul>
                                            <h3 className="title">{title}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="text">Captivating performances, interactive workshops, and delightful culinary delights await you at Harmonia Music Festival.</div>
                                <div className="text">Artificial Intelligence (AI) is a rapidly advancing field of technology that has the potential to revolutionize many aspects of our lives. From healthcare to finance, transportation to education, AI has the potential to transform the way we live, work, and interact with each other.</div>
                                <div className="text">One of the most exciting areas of AI is machine learning, which involves developing algorithms that can learn from data and improve their performance over time. This has already led to significant advances in areas such as image recognition, natural language processing, and autonomous driving.</div>
                                <div className="images-box">
                                    <figure className="image">
                                        <img src="/images/resource/service-single-3.png" alt="Image" />
                                    </figure>
                                    <figure className="image">
                                        <img src="/images/resource/service-single-4.png" alt="Image" />
                                    </figure>
                                </div>
                                <div className="title-box">
                                    <h3 className="title">Tips for creating content that’s educational</h3>
                                    <div className="text">Captivating performances, interactive workshops, and delightful culinary delights await you at Harmonia Music Festival.</div>
                                    <div className="text">Artificial Intelligence (AI) is a rapidly advancing field of technology that has the potential to revolutionize many aspects of our lives. From healthcare to finance, transportation to education, AI has the potential to transform the way we live, work, and interact with each other.</div>
                                    <div className="text">One of the most exciting areas of AI is machine learning, which involves developing algorithms that can learn from data and improve their performance over time. This has already led to significant advances in areas such as image recognition, natural language processing, and autonomous driving.</div>
                                </div>
                                <div className="title-box mb-0">
                                    <h3 className="title">Reimagine Business Possibilities</h3>
                                    <div className="text mb-0">"thia is the ultimate destination for professionals eager to stay ahead in the evolving business landscape. This event brings together to innovators, meetup industry leaders, and experts to explore the future of business strategy technology.</div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="sidebar-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                            <aside className="sidebar">
                                <SearchWidget />
                                <PostWidget />
                                <CategoryWidget />
                                <TagsWidget />
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceSingleContent;