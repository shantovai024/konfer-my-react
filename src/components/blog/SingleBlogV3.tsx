import { Link } from "react-router-dom";

interface DataType {
    id: number;
    date: string;
    month: string;
    category: string;
    author: string;
    comments: string;
    title: string;
    text?: string;
    image: string;
}

const SingleBlogV3 = ({ blog }: { blog: DataType }) => {
    const { id, image, date, month, category, author, comments, title, text } = blog

    return (
        <>
            <div className="inner-box">
                <div className="image-box">
                    <figure className="image">
                        <Link to={`/blog-single/${id}`}>
                            <img src={`/images/resource/${image}`} alt="Image" />
                            <img src={`/images/resource/${image}`} alt="Image" />
                        </Link>
                    </figure>
                    <div className="date-box">
                        <h4 className="date">{date}</h4>
                        <div className="month">{month}</div>
                    </div>
                    <div className="btn-box">
                        <Link to={`/blog-single/${id}`} className="theme-btn btn-style-one bg-orange">
                            <span className="btn-title">Read More</span>
                        </Link>
                    </div>
                </div>
                <div className="content-box">
                    <div className="post-box">
                        <div className="cat">{category}</div>
                        <ul className="post-meta">
                            <li><i className="icon fa fa-user" /> {author}</li>
                            <li><i className="icon fa fa-comment" /> {comments} Comments</li>
                        </ul>
                    </div>
                    <h4 className="title">
                        <Link to={`/blog-single/${id}`}>{title}</Link>
                    </h4>
                    <div className="text">{text}</div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV3;