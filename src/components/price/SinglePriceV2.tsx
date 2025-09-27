import { Link } from "react-router-dom";

interface DataType {
    id: number;
    title: string;
    price: number;
    features: {
        id: number;
        title: string;
        text: string;
    }[];
    btnText: string;
    tabId: string;
    tabClass: string;
    dataTarget: string;
    tabButton: string;
    day: string;
}

const SinglePriceV2 = ({ plan }: { plan: DataType }) => {
    const { price, btnText, tabButton, day, features } = plan;

    return (
        <div className="inner-box">
            <div className="shape-twentyone bounce-y"></div>

            {/* Top Section */}
            <div className="top-box">
                <h5 className="plan">{tabButton}</h5>
                <h1 className="price">${price}</h1>
                <h5 className="day">{day}</h5>
            </div>

            {/* Features List */}
            <div className="list-box">
                <ul className="feature-list">
                    {features.map(({ id, title, text }) => (
                        <li key={id}>
                            <div className="icon-box">
                                <div className="icon-check"></div>
                                <div className="check-bg check-bg-one"></div>
                            </div>
                            <div className="content">
                                <h5 className="title">{title}</h5>
                                <div className="text">{text}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Button */}
            <div className="btn-box">
                <Link
                    to="/pricing"
                    className="theme-btn btn-style-one bg-orange pricing-btn"
                >
                    <div className="btn-bg"></div>
                    <span className="btn-title">{btnText}</span>
                </Link>
            </div>
        </div>
    );
};

export default SinglePriceV2;
