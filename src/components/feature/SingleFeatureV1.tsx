import { Link } from "react-router-dom";

interface DataType {
    icon: string;
    title: string;
    text: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { icon, title, text } = feature

    return (
        <>
            <i className={`icon ${icon}`}></i>
            <div className='content'>
                <h5 className="title"><Link to="/event-single">{title}</Link></h5>
                <div className="text">{text}</div>
                <Link to="/event-single" className="read-more"><span>Read More</span> <i className="fa fa-arrow-right"></i></Link>
            </div>
        </>
    );
};

export default SingleFeatureV1;