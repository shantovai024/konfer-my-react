import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    designation: string;
    name: string;
    text: string;
    ratings: number;
    bgClass: string;
    quoteIcon: string;
}

const SingleTestimonialV3 = ({ testimonial }: { testimonial: DataType }) => {
    const { text, designation, name, ratings, quoteIcon, bgClass } = testimonial

    return (
        <>
            <div className="inner-box">
                <div className={bgClass} />
                <div className="content">
                    <h5 className="designation">{designation}</h5>
                    <h3 className="name">{name}</h3>
                    <div className="text">“{text}”</div>
                    <div className="rating">
                        <RatingsStar ratings={ratings} />
                    </div>
                </div>
                <i className={quoteIcon} />
            </div>
        </>
    );
};

export default SingleTestimonialV3;