import { Link } from "react-router-dom";

interface DataType {
    id: number;
    price: number;
    title: string;
    author1: string;
    author2: string;
    author3: string;
    features: string[];
    button: string;
    seats: {
        available: number;
        total: number;
    };
    delay: number;
}

const SinglePriceV3 = ({ plan }: { plan: DataType }) => {
    const { price, title, author1, author2, author3, features, button, seats: { available, total }, } = plan;

    return (
        <div className="content">
            <h2 className="price">
                <span className="dollar">$</span>
                {price.toFixed(2)}
            </h2>
            <div className="text">{title}</div>

            <div className="author-box">
                <img src={`/images/resource/${author1}`} alt="Author 1" />
                <img src={`/images/resource/${author2}`} alt="Author 2" />
                <img src={`/images/resource/${author3}`} alt="Author 3" />
            </div>

            <ul className="pricing-list">
                {features.map((feature, i) => (
                    <li key={i}>
                        <i className="icon fal fa-circle-check" />
                        {feature}
                    </li>
                ))}
            </ul>

            <div className="btn-box">
                <Link to="/pricing" className="theme-btn btn-style-one dark-bg">
                    <span className="btn-title">{button}</span>
                </Link>
            </div>

            <div className="skill-item">
                <div className="skill-bar" />
            </div>

            <div className="seats">
                ( {available} / {total} ) Available seat
            </div>
        </div>
    );
};

export default SinglePriceV3;
