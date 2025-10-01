import { Link } from "react-router-dom";

interface DataType {
    id: number;
    iconClass: string;
    title: string;
    text: string;
}
const SingleFeatureV3 = ({ feature }: { feature: DataType }) => {
    const { id, iconClass, title, text } = feature;

    return (
        <>
            <div className="icon-box">
                <i className={iconClass} />
            </div>
            <div className="content">
                <h3 className="title">
                    <Link to={`/service-single/${id}`}>{title}</Link>
                </h3>
                <div className="text">{text}</div>
            </div>
            <Link to={`/service-single/${id}`} className="read-more">
                <i className="icon fas fa-angle-right" />
            </Link>
        </>
    );
};

export default SingleFeatureV3;