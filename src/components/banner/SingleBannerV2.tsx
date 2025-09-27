import { Link } from "react-router-dom";

interface DataType {
    id: number;
    bgImage: string;
    floatingTitle: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    buttonText: string;
    image: string;
    date: string;
    year: string;
}


const SingleBannerV2 = ({ banner }: { banner: DataType }) => {
    const { bgImage, floatingTitle, title1, title2, title3, description, buttonText, image, date, year } = banner;

    return (
        <>
            <div className="bg bg-image" style={{ backgroundImage: `url(/images/banner/${bgImage})` }} />
            <div className="floating-title">{floatingTitle}</div>
            <div className="auto-container">
                <div className="content-box">
                    <h1 className="title animate-2">{title1} <br /> <span>{title2} <br /> {title3}</span></h1>
                    <div className="btn-box-outer">
                        <div className="icon-arrow animate-4" />
                        <div className="text animate-3">{description}</div>
                        <div className="btn-box animate-5">
                            <Link to="/contact" className="theme-btn btn-style-one bg-pink">
                                <span className="btn-title">{buttonText}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="image-box animate-x">
                    <figure className="image">
                        <img src={`/images/banner/${image}`} alt="Image" />
                    </figure>
                </div>
                <div className="date-box animate-6">
                    <div className="date">{date} <span>{year}</span></div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV2;