import AnimatedText from "../animation/AnimatedText";
import blogV1Data from "../../assets/jsonData/blog/blogV1Data.json"
import SingleBlogV3 from "./SingleBlogV3";

const BlogV3 = () => {
    return (
        <>
            <section className="news-section-three">
                <div className="auto-container">
                    <div className="sec-title orange text-center">
                        <span className="sub-title">Who helps us to create</span>
                        <AnimatedText>
                            Latest Breaking News For <br /> Events & Conference
                        </AnimatedText>
                    </div>
                    <div className="row">
                        <div className="blocks-column col-xl-8 col-lg-12 col-md-12 col-sm-12">

                            <div className="row">
                                {blogV1Data.slice(6, 8).map(blog =>
                                    <div className="news-block-three col-lg-6 col-md-6 col-sm-12"
                                        data-aos="fade-up"
                                        data-aos-delay={blog.delay}
                                        key={blog.id}
                                    >
                                        <SingleBlogV3 blog={blog} />
                                    </div>
                                )}
                            </div>

                            {blogV1Data.slice(8, 9).map(blog =>
                                <div className="news-block-three two col-lg-6 col-md-6 col-sm-12" key={blog.id}>
                                    <SingleBlogV3 blog={blog} />
                                </div>
                            )}
                        </div>

                        <div className="blocks-column col-xl-4 col-lg-6 col-md-12 col-sm-12">
                            <div className="news-block-three three">
                                {blogV1Data.slice(9, 10).map(blog =>
                                    <SingleBlogV3 blog={blog} key={blog.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogV3;