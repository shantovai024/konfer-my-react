import blogV1Data from "../../assets/jsonData/blog/blogV1Data.json";
import AnimatedText from "../animation/AnimatedText";
import SingleBlogV1 from "./SingleBlogV1";

const BlogV1 = () => {
    return (
        <>
            <section className="news-section">
                <div className="shape-six"></div>
                <div className="shape-seven"></div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Who helps us to create</span>
                        <AnimatedText>
                            Latest Breaking News For <br /> Events & Conference
                        </AnimatedText>
                    </div>
                    <div className="row">
                        {blogV1Data.slice(0, 3).map(blog =>
                            <SingleBlogV1 blog={blog} key={blog.id} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogV1;