import { Link } from "react-router-dom";

interface DataType {
    id: number;
    image: string;
    date: string;
    month: string;
    category: string;
    title: string;
}

const SingleBlogContent = ({ blog }: { blog: DataType }) => {
    const { id, image, date, month, category, title } = blog

    return (
        <>
            <div className="news-single-block">
                <div className="image-box">
                    <figure className="image overlay-anim">
                        <Link to={`/blog-single/${id}`}>
                            <img src={`/images/resource/${image}`} alt="Image" />
                        </Link>
                    </figure>
                    <div className="date-box">
                        <h4 className="date">{date}</h4>
                        <div className="month">{month}</div>
                    </div>
                    <Link to={`/blog-single/${id}`} className="theme-btn btn-style-one bg-orange">
                        <span className="btn-title">Read More</span>
                    </Link>
                </div>
                <div className="content-box">
                    <div className="post-meta-box">
                        <div className="cat">{category}</div>
                        <ul className="post-meta">
                            <li><i className="icon fa fa-user" /> Admin</li>
                            <li><i className="icon fa fa-comment" /> Comments</li>
                        </ul>
                    </div>
                    <h3 className="title">
                        <Link to={`/blog-single/${id}`}>{title}</Link>
                    </h3>
                </div>
            </div>
        </>
    );
};

export default SingleBlogContent;