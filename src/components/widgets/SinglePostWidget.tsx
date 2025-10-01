import { Link } from "react-router-dom";

interface DataType {
    id: number;
    image: string;
    title: string;
    date: string;
}

const SinglePostWidget = ({ post }: { post: DataType }) => {
    const { id, image, title, date } = post

    return (
        <>
            <article className="post">
                <div className="post-thumb">
                    <Link to={`/blog-single/${id}`}>
                        <img src={`/images/resource/${image}`} alt="Image" />
                    </Link>
                </div>
                <div className="content">
                    <h5 className="title">
                        <Link to={`/blog-single/${id}`}>{title}</Link>
                    </h5>
                    <div className="date">{date}</div>
                </div>
            </article>

        </>
    );
};

export default SinglePostWidget;