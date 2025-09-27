import { Link } from "react-router-dom";

interface DataType {
    blockClass: string;
    planName: string;
    price: number;
    day: string;
    pass: string;
    features: {
        id: number;
        title: string;
        text: string;
    }[];
    checkBg: string;
    buttonText: string;
    delay: number;
}

const SinglePriceV1 = ({ plan }: { plan: DataType }) => {
    const { blockClass, planName, price, day, pass, features, checkBg, buttonText, delay } = plan;

    return (
        <div
            className={`pricing-block col-xl-4 col-lg-6 col-md-6 col-sm-12 ${blockClass ? blockClass : ''}`}
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="inner-box">
                <div className="shape-twentynine" />
                <div className="plan-box">
                    <h5 className="plan">{planName}</h5>
                </div>
                <div className="top-box">
                    <div className="price-box">
                        <h2 className="price">${price}</h2>
                        <h5 className="day">{day}</h5>
                    </div>
                    <h4 className="pass">{pass}</h4>
                </div>

                <div className="list-box">
                    <div className="shape-five" />
                    <ul className="feature-list">
                        {features.map(({ id, title, text }) => (
                            <li key={id}>
                                <div className="icon-box">
                                    <div className="icon-check" />
                                    <div className={`check-bg ${checkBg ? checkBg : ""}`} />
                                </div>
                                <div className="content">
                                    <h5 className="title">{title}</h5>
                                    <div className="text">{text}</div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Btn Box */}
                    <div className="btn-box">
                        <Link to="/pricing" className="theme-btn btn-style-one pricing-btn">
                            <span className="btn-title">{buttonText}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePriceV1;
