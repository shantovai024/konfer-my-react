import { Link } from "react-router-dom";
import AnimatedText from "../animation/AnimatedText";
import SingleBlogV2 from "./SingleBlogV2";
import blogV1Data from "../../assets/jsonData/blog/blogV1Data.json";
import { useState } from "react";

const BlogV2 = () => {

    const [activeBlogId, setActiveBlogId] = useState(blogV1Data[1]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveBlogId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <section className="news-section-two pt-0">
                <div className="shape-twentyfour" />
                <div className="auto-container">
                    <div className="row">

                        <div className="content-column col-xl-5 col-lg-12 col-md-12 col-sm-12" data-aos="fade-up">
                            <div className="inner-column">
                                <div className="shape-twentyfive bounce-x" />
                                <div className="sec-title orange">
                                    <span className="sub-title">Who helps us to create</span>
                                    <AnimatedText>
                                        Latest Breaking News For Events & Conference
                                    </AnimatedText>
                                    <div className="text">We would love to share a similar experience and how I learned some valuable lessons during a downturn.</div>
                                </div>
                                <div className="btn-box">
                                    <Link to="/blog" className="theme-btn btn-style-one bg-orange">
                                        <span className="btn-title">Read More Blog</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="blocks-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column">

                                {blogV1Data.slice(3, 6).map(blog =>
                                    <div
                                        className="news-block-two has-active"
                                        data-aos="fade-up"
                                        data-aos-delay={blog.delay}
                                        key={blog.id}
                                    >
                                        <div className="shape-sixteen" />
                                        <div className="shape-seventeen" />
                                        <div
                                            className={`inner-box ${activeBlogId === blog.id ? "active" : ""}`}
                                            onMouseEnter={() => handleMouseEnter(blog.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <SingleBlogV2 blog={blog} key={blog.id} />
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogV2;