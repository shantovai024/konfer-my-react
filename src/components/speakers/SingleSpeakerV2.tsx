import { Link } from "react-router-dom";
import SocialV2 from "../social/SocialV2";

interface DataType {
    id: number;
    image: string;
    name: string;
    designation: string;
}

const SingleSpeakerV2 = ({ speaker }: { speaker: DataType }) => {
    const { id, image, name, designation } = speaker;

    return (
        <>
            <div className="shape-twenty" />
            <div className="image-box">
                <figure className="image">
                    <Link to={`/speaker-single/${id}`}>
                        <img src={`/images/resource/${image}`} alt="Image" />
                    </Link>
                </figure>
            </div>
            <div className="content">
                <div className="social-links">
                    <SocialV2 />
                </div>
                <div className="info-box">
                    <h4 className="name">
                        <Link to={`/speaker-single/${id}`}>{name}</Link>
                    </h4>
                    <span className="designation">{designation}</span>
                </div>
            </div>
        </>
    );
};

export default SingleSpeakerV2;