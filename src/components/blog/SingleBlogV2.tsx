import { Link } from "react-router-dom";

interface DataType {
    id: number;
    date: string;
    month: string;
    category: string;
    author: string;
    comments: string;
    title: string;
    image: string;
}

const SingleBlogV2 = ({ blog }: { blog: DataType }) => {
    const { id, date, month, category, author, comments, title, image } = blog;

    return (
        <>
            <div className="content-box">
                <div className="cat">{category}</div>
                <ul className="post-meta">
                    <li><i className="icon fa fa-user" /> {author}</li>
                    <li><i className="icon fa fa-comment" /> {comments} Comments</li>
                </ul>
                <h3 className="title">
                    <Link to={`/blog-single/${id}`}>{title}</Link>
                </h3>
            </div>
            <div className="image-box">
                <div className="date-box">
                    <h4 className="date">{date}</h4>
                    <div className="month">{month}</div>
                </div>
                <div className="btn-box">
                    <Link to={`/blog-single/${id}`} className="read-more">
                        <i className="fa fa-arrow-right" />
                    </Link>
                </div>
                <figure className="image">
                    <Link to={`/blog-single/${id}`}>
                        <img src={`/images/resource/${image}`} alt="Image" />
                        <img src={`/images/resource/${image}`} alt="Image" />
                    </Link>
                </figure>
            </div>
        </>
    );
};

export default SingleBlogV2;