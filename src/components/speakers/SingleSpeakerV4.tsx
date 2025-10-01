import { Link } from "react-router-dom";
import SocialV3 from "../social/SocialV3";

interface DataType {
    id: number;
    name: string;
    designation: string;
    image: string;
    shape: string;
}

const SingleSpeakerV4 = ({ speaker }: { speaker: DataType }) => {
    const { id, image, name, designation, shape } = speaker

    return (
        <>
            <div className={shape} />
            <div className="image-box">
                <figure className="image">
                    <Link to={`/speaker-single/${id}`}>
                        <img src={`/images/resource/${image}`} alt="Image" />
                    </Link>
                </figure>
            </div>
            <div className="content-box">
                <h4 className="name">
                    <Link to={`/speaker-single/${id}`}>{name}</Link>
                </h4>
                <div className="designation">{designation}</div>
            </div>
            <div className="social-box">
                <ul className="social-icons">
                    <SocialV3 />
                </ul>
            </div>
        </>
    );
};

export default SingleSpeakerV4;