import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    id: number;
    name: string;
    designation: string;
    text: string;
    ratings: number;
    image: string;
}

const SingleTestimonialV1 = ({ testimonial }: { testimonial: DataType }) => {
    const { name, designation, text, image } = testimonial

    return (
        <>
            <div className="inner-box">
                <div className="testi-shape-one" />
                <div className="testi-shape-two" />
                <div className="shape-eight" />
                <div className="shape-thirteen" />
                <div className="content">
                    <div className="author-box">
                        <div className="info-box">
                            <h3 className="name">{name}</h3>
                            <div className="designation">{designation}</div>
                        </div>
                        <i className="icon flaticon-right-quotation-mark" />
                    </div>
                    <div className="text">“{text}”</div>
                    <div className="rating">
                        <RatingsStar ratings={5} />
                    </div>
                    <div className="icon" />
                </div>
                <div className="image-box">
                    <figure className="image">
                        <img src={`/images/resource/${image}`} alt="Image" />
                    </figure>
                    <div className="icon-five" />
                    <div className="icon-twentyone" />
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV1;