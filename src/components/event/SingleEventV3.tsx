import { Link } from "react-router-dom";

interface DataType {
    id: number;
    city: string;
    blockClass: string;
    title: string;
    speaker: string;
    role: string;
    time: string;
    description: string;
    thumb: string;
    image: string;
    button1Class: string;
}

const SingleEventV3 = ({ block }: { block: DataType }) => {
    const { id, blockClass, image, city, title, speaker, role, time, description, button1Class, thumb } = block

    const contentBox = (
        <div className="content-box">
            <div className="city">
                <i className="icon fa fa-map-marker-alt" /> {city}
            </div>
            <h3 className="title">
                <Link to={`/event-single/${id}`}>{title}</Link>
            </h3>
            <ul className="location-box">
                <li><i className="icon fa fa-microphone" />{speaker} <span>({role})</span></li>
                <li className="date"><i className="icon fa fa-clock" />{time}</li>
            </ul>
            <div className="text">{description}</div>
            <div className="btn-box">
                <Link to={`/event-single/${id}`} className={`theme-btn btn-style-one ${button1Class}`}>
                    <span className="btn-title">View More</span>
                </Link>
                <Link to="/contact" className="theme-btn btn-style-one bg-orange">
                    <span className="btn-title">Buy Ticket</span>
                </Link>
            </div>
            <div className="thumb">
                <img src={`/images/resource/${thumb}`} alt="Image" />
            </div>
        </div>
    );

    const imageBox = (
        <div className="image-box">
            <figure className="image">
                <Link to={`/event-single/${id}`}>
                    <img src={`/images/resource/${image}`} alt="Image" />
                </Link>
            </figure>
        </div>
    );

    return (
        <>
            <div className={`event-block-three has-active ${blockClass ? blockClass : ""}`}>
                <div className="inner-box">
                    {blockClass === "right" ? (
                        <>
                            {contentBox}
                            {imageBox}
                        </>
                    ) : (
                        <>
                            {imageBox}
                            {contentBox}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default SingleEventV3;