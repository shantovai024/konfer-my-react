import { Link } from "react-router-dom";

interface DataType {
    id: number;
    date: string;
    fullDate?: string;
    author: string;
    comments: string;
    title: string;
    widgetImage: string;
}

const FooterRecentPostV2 = ({ blog }: { blog: DataType }) => {
    const { id, widgetImage, date, fullDate, title, author, comments } = blog

    return (
        <>
            <div className="inner">
                <div className="thumb-box">
                    <figure className="post-thumb">
                        <Link to={`/blog-single/${id}`}>
                            <img src={`/images/resource/${widgetImage}`} alt="Image" />
                        </Link>
                    </figure>
                    <div className="days-box">
                        <span className="date">{date}</span>
                        <div className="days-outer">
                            <span className="days">Days</span>Remaining
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="date">{fullDate}</div>
                    <h4 className="post-title">
                        <Link to={`/blog-single/${id}`}>{title}</Link>
                    </h4>
                    <div className="post-meta-box">
                        <ul className="post-meta">
                            <li><i className="icon fa fa-user" /> {author}</li>
                            <li><i className="icon fa fa-comment" /> {comments} Comments</li>
                        </ul>
                        <div className="btn-box">
                            <Link to="/pricing" className="theme-btn btn-style-one light-bg">
                                <span className="btn-title">Get Ticket</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterRecentPostV2;