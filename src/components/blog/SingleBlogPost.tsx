import { Link } from "react-router-dom";

interface DataType {
    id: number;
    image: string;
    date: string;
    title: string;
    blockClass: string;
}

const SingleBlogPost = ({ blog }: { blog: DataType }) => {
    const { id, blockClass, date, title, image } = blog

    return (
        <>
            <div className={`post-block ${blockClass ? blockClass : ""}`}>
                <div className="inner-box">
                    <div className="content">
                        <div className="date">{date}</div>
                        <h5 className="title">
                            <Link to={`/blog-single/${id}`}>{title}</Link>
                        </h5>
                    </div>
                    <div className="thumb">
                        <Link to={`/blog-single/${id}`}>
                            <img src={`/images/resource/${image}`} alt="Image" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogPost;