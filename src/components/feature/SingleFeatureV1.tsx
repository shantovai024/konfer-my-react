import { Link } from "react-router-dom";

interface DataType {
    id: number;
    icon: string;
    title: string;
    text: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { id, icon, title, text } = feature

    return (
        <>
            <i className={`icon ${icon}`}></i>
            <div className='content'>
                <h5 className="title"><Link to={`/event-single/${id}`}>{title}</Link></h5>
                <div className="text">{text}</div>
                <Link to={`/event-single/${id}`} className="read-more"><span>Read More</span> <i className="fa fa-arrow-right"></i></Link>
            </div>
        </>
    );
};

export default SingleFeatureV1;