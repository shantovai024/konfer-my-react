import { Link } from "react-router-dom";
import { useHoverTransform } from "../../hooks/useHoverTransform";

interface DataType {
    id: number;
    time: string;
    title: string;
    speaker: string;
    role: string;
    city: string;
    club: string;
    image: string;
}

const SingleEventV2 = ({ block }: { block: DataType }) => {
    const { id, time, title, speaker, role, city, club } = block

    const { hoverRef, parentRef, handleMouseMove, handleMouseLeave } = useHoverTransform();

    return (
        <>
            <div className="event-block-two">
                <div className="inner-box event-block-inner"
                    ref={parentRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="shape-thirty" />
                    <div className="shape-thirtyone" />
                    <div className="time-box">
                        <i className="icon fal fa-clock" />
                        <h6 className="time">{time}</h6>
                    </div>
                    <div className="title-box">
                        <h4 className="title">
                            <Link to={`/event-single/${id}`}>
                                {title}
                            </Link>
                        </h4>
                        <div className="speaker-box">
                            <i className="icon fa fa-microphone" />
                            <div className="speaker">{speaker}
                                <span>({role})</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-box">
                        <div className="text">{city} <br /> {club}</div>
                    </div>
                    <div className="btn-box">
                        <Link to={`/event-single/${id}`} className="read-more">
                            <i className="icon flaticon-arrows" />
                        </Link>
                    </div>
                    <div className="event-hover"
                        ref={hoverRef}
                        style={{ backgroundImage: 'url(/images/resource/event2-1.jpg)' }}
                    />
                </div>
            </div>
        </>
    );
};

export default SingleEventV2;