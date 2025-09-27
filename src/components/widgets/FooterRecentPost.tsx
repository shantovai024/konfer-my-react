import { Link } from "react-router-dom";

interface DataType {
    id: number;
    author: string;
    comments: string;
    title: string;
    widgetImage: string;
}

const FooterRecentPost = ({ blog }: { blog: DataType }) => {
    const { widgetImage, id, title, author, comments } = blog

    return (
        <>
            <article className="recent-post">
                <div className="inner">
                    <figure className="post-thumb">
                        <Link to={`/blog-single/${id}`}>
                            <img src={`/images/resource/${widgetImage}`} alt="Image" /></Link>
                    </figure>
                    <div className="content">
                        <h5 className="post-title">
                            <Link to={`/blog-single/${id}`}>{title}</Link>
                        </h5>
                        <ul className="post-meta">
                            <li><i className="icon fa fa-user" /> {author}</li>
                            <li><i className="icon fa fa-comment" />{comments} Comments</li>
                        </ul>
                    </div>
                </div>
            </article>
        </>
    );
};

export default FooterRecentPost;