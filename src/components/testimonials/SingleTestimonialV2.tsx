import RatingsStar from "../utilities/RatingsStar";

interface DataType {
    id: number;
    text: string;
    ratings: number;
    name: string;
    designation: string;
    image: string;
    delay: number;
}

const SingleTestimonialV2 = ({ testimonial }: { testimonial: DataType }) => {
    const { text, ratings, name, designation, image, delay } = testimonial;

    return (
        <>
            <div className="testimonial-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-aos="fade-up" data-aos-delay={delay}>
                <div className="inner-box">
                    <div className="content">
                        <div className="text">“{text}”</div>
                        <div className="icon-box"><i className="quote-icon flaticon-right-quotation-mark" /></div>
                        <div className="rating">
                            <RatingsStar ratings={ratings} />
                        </div>
                    </div>
                    <div className="author-box">
                        <div className="author-info">
                            <div className="designation">{designation}</div>
                            <h4 className="name">{name}</h4>
                        </div>
                        <div className="image-box">
                            <figure className="image">
                                <img src={`images/resource/${image}`} alt="Image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;