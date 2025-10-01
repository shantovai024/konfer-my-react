import { Link } from "react-router-dom";
import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    id: number;
    boxClass: string;
    avatar: string;
    name: string;
    date: string;
    text: string;
    ratings: number;
}

const SingleBlogComment = ({ comment }: { comment: DataType }) => {
    const { boxClass, avatar, name, date, text, ratings } = comment

    return (
        <>
            <div className={`comment-box ${boxClass}`}>
                <div className="comment">
                    <div className="author-thumb">
                        <img src={`/images/resource/${avatar}`} alt="Image" />
                    </div>
                    <div className="comment-info">
                        <h4 className="name">{name}</h4>
                        <div className="date">{date}</div>
                    </div>
                    <div className="text">{text}</div>
                    <div className="btn-box">
                        <div className="rating">
                            <RatingsStar ratings={ratings} />
                        </div>
                        <Link to="#" className="reply-btn">Reply</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogComment;