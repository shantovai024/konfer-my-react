import { Link } from "react-router-dom";

interface DataType {
    id: number;
    iconClass: string;
    title: string;
    text: string;
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { id, iconClass, title, text } = feature;

    return (
        <>
            <div className="icon-box">
                <i className={`icon ${iconClass}`} />
                <div className="icon-seven" />
                <div className="icon-eight" />
            </div>
            <div className="content">
                <Link to={`/event-single/${id}`}>
                    <h5 className="title">{title}</h5>
                </Link>
                <div className="text">{text}</div>
                <Link to={`/event-single/${id}`} className="read-more">
                    <span>Read More</span> <i className="fa fa-arrow-right" />
                </Link>
            </div>
        </>
    );
};

export default SingleFeatureV2;