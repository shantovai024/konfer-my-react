import { Link } from "react-router-dom";
import SocialV1 from "../social/SocialV1";

interface DataType {
    id: number;
    name: string;
    designation: string;
    thumb: string;
    delay: number;
}

const SingleSpeakerV1 = ({ speaker }: { speaker: DataType }) => {
    const { id, thumb, name, designation } = speaker;

    return (
        <>
            <div className="image-box">
                <figure className="image">
                    <Link to={`/speakers-detail/${id}`}>
                        <img src={`/images/resource/${thumb}`} alt="image" />
                        <img src={`/images/resource/${thumb}`} alt="image" />
                    </Link>
                </figure>
                <div className="icon-box">
                    <span className="icon share-icon fa fa-share-alt" />
                </div>
                <div className="social-links">
                    <SocialV1 />
                </div>
            </div>
            <div className="info-box">
                <h4 className="name">
                    <Link to={`/speakers-detail/${id}`}>{name}</Link>
                </h4>
                <span className="designation">{designation}</span>
            </div>
        </>
    );
};

export default SingleSpeakerV1;