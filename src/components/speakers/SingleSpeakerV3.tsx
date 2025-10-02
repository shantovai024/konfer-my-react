import { Link } from "react-router-dom";
import SocialV3 from "../social/SocialV3";

interface DataType {
    id: number;
    name: string;
    designation: string;
    image: string;
}

const SingleSpeakerV3 = ({ speaker }: { speaker: DataType }) => {
    const { id, image, name, designation } = speaker

    return (
        <>
            <div className="image-box">
                <figure className="image">
                    <Link to={`/speaker-single/${id}`}>
                        <img src={`/images/resource/${image}`} alt="Image" />
                    </Link>
                </figure>
            </div>
            <div className="content-box">
                <div className="team-shape">
                    <svg width={300} height={152} viewBox="0 0 300 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M27 47.9627C27 42.7388 30.3795 38.1151 35.3569 36.5291L146.357 1.16082C148.727 0.405646 151.273 0.405646 153.643 1.16082L264.643 36.5291C269.62 38.1151 273 42.7388 273 47.9628V108C273 114.627 267.627 120 261 120H39C32.3726 120 27 114.627 27 108V47.9627Z" fill="#F5F5F5" />
                        <path opacity="0.5" d="M12 57.321C12 52.0529 15.436 47.4008 20.4712 45.8516L146.471 7.08568C148.771 6.37825 151.229 6.37826 153.529 7.08568L279.529 45.8516C284.564 47.4008 288 52.0529 288 57.321V124C288 130.627 282.627 136 276 136H24C17.3726 136 12 130.627 12 124V57.321Z" fill="#F5F5F5" />
                        <path className="main" d="M0 66.6111C0 61.3314 3.45078 56.672 8.50104 55.1326L146.501 13.0666C148.782 12.3713 151.218 12.3713 153.499 13.0666L291.499 55.1326C296.549 56.672 300 61.3314 300 66.6111V140C300 146.627 294.627 152 288 152H12C5.37259 152 0 146.627 0 140V66.6111Z" fill="white" />
                    </svg>
                </div>
                <div className="shape-twentyeight" />
                <h4 className="name">
                    <Link to={`/speaker-single/${id}`}>{name}</Link>
                </h4>
                <div className="designation">{designation}</div>
                <ul className="social-icons">
                    <SocialV3 />
                </ul>
            </div>
        </>
    );
};

export default SingleSpeakerV3;