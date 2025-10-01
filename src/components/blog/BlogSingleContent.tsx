import { Link } from "react-router-dom";
import CategoryWidget from "../widgets/CategoryWidget";
import PostWidget from "../widgets/PostWidget";
import SearchWidget from "../widgets/SearchWidget";
import TagsWidget from "../widgets/TagsWidget";
import handleSmoothScroll from "../utilities/handleSmoothScroll";
import SocialV1 from "../social/SocialV1";
import blogPostWidget from "../../assets/jsonData/widgets/blogPostWidget.json"
import SingleBlogPost from "./SingleBlogPost";
import blogCommentData from "../../assets/jsonData/blog/blogCommentData.json"
import SingleBlogComment from "./SingleBlogComment";
import BlogForm from "../form/BlogForm";

interface DataType {
    image: string;
    category: string;
    title: string;
}

const BlogSingleContent = ({ blogInfo }: { blogInfo: DataType }) => {
    const { image, title, category } = blogInfo

    return (
        <>
            <section className="blog-single">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column">

                                <div className="news-single-block">
                                    <div className="image-box">
                                        <figure className="image overlay-anim">
                                            <img src={`/images/resource/${image}`} alt="Image" />
                                        </figure>
                                        <div className="date-box">
                                            <h4 className="date">25</h4>
                                            <div className="month">Dec</div>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <div className="post-meta-box">
                                            <div className="cat">{category}</div>
                                            <ul className="post-meta">
                                                <li><i className="icon fa fa-user" /> Admin</li>
                                                <li><i className="icon fa fa-comment" /> Comments</li>
                                            </ul>
                                        </div>
                                        <h3 className="title">{title}</h3>
                                        <div className="text">Artificial Intelligence (AI) and digital technologies are transforming the world in unprecedented ways. From healthcare to finance, education to entertainment, these technologies are revolutionizing every industry and sector. To keep up with the latest trends and developments, businesses and organizations are increasingly turning to AI and digital conferences. These conferences bring together thought leaders, experts, and innovators from around the world to share insights, ideas, and best practices. They offer a platform for networking, learning, and collaboration, and provide a glimpse into the future of AI and digital technologies.</div>
                                        <div className="text">As AI becomes more prevalent in our lives, there is a growing concern about its impact on society, including issues such as bias, privacy, and accountability. At the AI and Ethics conference, held in January 2023, experts discussed the importance of developing ethical guidelines for AI.</div>
                                    </div>
                                </div>
                                <div className="image-box two">
                                    <div className="image-outer">
                                        <figure className="image overlay-anim">
                                            <img src="/images/resource/blog-single-2.png" alt="Image" />
                                        </figure>
                                        <div className="icon-twentyseven" />
                                        <div className="icon-twentyeight" />
                                    </div>
                                    <div className="image-outer">
                                        <figure className="image overlay-anim">
                                            <img src="/images/resource/blog-single-3.png" alt="Image" />
                                        </figure>
                                        <div className="icon-twentyseven" />
                                        <div className="icon-twentyeight" />
                                    </div>
                                </div>
                                <div className="title-box">
                                    <h3 className="title">Digital Transformation</h3>
                                    <div className="text">One of the most significant themes at AI and digital conferences is the ethical implications of AI. As AI becomes more prevalent in our lives, there is a growing concern about its impact on society, including issues such as bias, privacy, and accountability. At the AI and Ethics conference, held in January 2023, experts discussed the importance of developing ethical guidelines for AI. They highlighted the need for transparency.</div>
                                </div>
                                <div className="blockquote">
                                    <h4 className="title">“The Person, Be It Gentleman Or Lady, Who Has Not Pleasure In A Good Novel, Must Be Intolerably Stupid.”</h4>
                                    <div className="author">--- Jane Cooper</div>
                                </div>
                                <div className="text-box">
                                    <div className="text">Another key theme at AI and digital conferences is digital transformation. As businesses and organizations increasingly rely on digital technologies, there is a growing need for strategies and best practices to navigate this complex landscape.</div>
                                    <div className="text">At the Digital Transformation conference, held in February 2023, experts discussed the challenges and opportunities of digital transformation. They emphasized the importance of building a culture of innovation, investing in talent and skills development, and leveraging emerging technologies such as AI and blockchain.</div>
                                </div>
                                <div className="tags-box">
                                    <ul className="tags">
                                        <li><Link to="#" onClick={handleSmoothScroll}>Conference</Link></li>
                                        <li><Link to="#" onClick={handleSmoothScroll}>Events</Link></li>
                                        <li><Link to="#" onClick={handleSmoothScroll}>Meetup</Link></li>
                                        <li><Link to="#" onClick={handleSmoothScroll}>Business Meeting</Link></li>
                                        <li><Link to="#" onClick={handleSmoothScroll}>Innovation</Link></li>
                                    </ul>
                                </div>
                                <div className="social-box">
                                    <div className="text">Share this post with your friends</div>
                                    <ul className="social-icon">
                                        <SocialV1 />
                                    </ul>
                                </div>
                                <div className="author-box">
                                    <div className="inner-box">
                                        <div className="thumb">
                                            <img src="/images/resource/author-thumb.jpg" alt="Image" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">About Michelle Larson</h4>
                                            <div className="text">Michelle Larson is a lingerie expert living in Brooklyn, NY, where she creates quippy written content, crafts dreamy illustrations, and runs the ethically-made loungewear line.</div>
                                            <ul className="social-links">
                                                <li>
                                                    <Link to="http://twitter.com" target='_blank'>Twitter</Link>
                                                </li>
                                                <li>
                                                    <Link to="http://facebook.com" target='_blank'>Facebook</Link>
                                                </li>
                                                <li>
                                                    <Link to="http://instagram.com" target='_blank'>Instagram</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Post */}
                                <div className="post-box">
                                    {blogPostWidget.map(blog =>
                                        <SingleBlogPost blog={blog} key={blog.id} />
                                    )}
                                </div>

                                <div className="comments-area">
                                    <h3 className="title">3 Replies Comments For Our Post</h3>
                                    {blogCommentData.map(comment =>
                                        <SingleBlogComment comment={comment} key={comment.id} />
                                    )}
                                </div>

                                <div className="comment-form">
                                    <div className="form-title-box">
                                        <h3 className="title">Add a Review</h3>
                                        <div className="text">Your email address will not be published. Required fields are marked *</div>
                                    </div>
                                    <BlogForm />
                                </div>
                            </div>
                        </div>

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

export default BlogSingleContent;