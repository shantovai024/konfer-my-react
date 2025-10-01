import { Link } from "react-router-dom";
import { useHoverTransform } from "../../hooks/useHoverTransform";

interface DataType {
    id: number;
    date: string;
    month: string;
    year: string;
    title: string;
    location: string;
    time: string;
    btnText: string;
    image: string;
}

const SingleEventV1 = ({ block }: { block: DataType }) => {
    const { id, date, month, year, title, location, time } = block

    const { hoverRef, parentRef, handleMouseMove, handleMouseLeave } = useHoverTransform();

    return (
        <>
            <div className="event-block">
                <div className="inner-box event-block-inner"
                    ref={parentRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="date-box">
                        <div className="date">{date}</div>
                        <div className="year">{month}, <br /> {year}</div>
                    </div>
                    <div className="title-box">
                        <h3 className="title"><Link to={`/event-single/${id}`}>{title}</Link></h3>
                        <ul className="location-box">
                            <li><i className="icon fal fa-location-dot" />{location}</li>
                            <li><i className="icon fal fa-clock" />{time}</li>
                        </ul>
                    </div>
                    <div className="btn-box">
                        <Link to="/contact" className="theme-btn btn-style-one">
                            <span className="btn-title">Buy Tickets</span>
                        </Link>
                    </div>
                    <div className="event-hover"
                        ref={hoverRef}
                        style={{ backgroundImage: 'url(/images/resource/event1-1.png)' }}
                    />
                </div>
            </div>
        </>
    );
};

export default SingleEventV1;