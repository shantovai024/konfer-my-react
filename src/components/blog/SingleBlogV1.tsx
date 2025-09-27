import { Link } from "react-router-dom";

interface DataType {
    id: number;
    date: string;
    month: string;
    category: string;
    author: string;
    comments: string;
    title: string;
    text: string;
    image: string;
    delay: number;
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, date, month, category, author, comments, title, text, image, delay } = blog;

    return (
        <div
            className="news-block has-active col-lg-4 col-md-6 col-sm-12"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="inner-box">
                <div className="content-box">
                    <div className="date-box">
                        <h3 className="date">{date}</h3>
                        <div className="month">{month}</div>
                    </div>
                    <div className="cat">{category}</div>
                    <ul className="post-meta">
                        <li>
                            <i className="icon fa fa-user" /> {author}
                        </li>
                        <li>
                            <i className="icon fa fa-comment" /> {comments}
                        </li>
                    </ul>
                    <h3 className="title">
                        <Link to={`/blog-single/${id}`}>{title}</Link>
                    </h3>
                    <div className="text">{text}</div>
                    <div className="btn-box">
                        <Link to={`/blog-single/${id}`} className="read-more">
                            <i className="fa fa-arrow-right" />
                        </Link>
                    </div>
                </div>
                <div className="image-box">
                    <figure className="image">
                        <Link to={`/blog-single/${id}`}>
                            <img src={`images/resource/${image}`} alt={title} />
                            <img src={`images/resource/${image}`} alt={title} />
                        </Link>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogV1;
