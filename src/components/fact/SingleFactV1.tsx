import Counter from "../counter/Counter";

interface DataType {
    icon: string;
    end: number;
    title: string;
    delay: number;
}

const SingleFactV1 = ({ fact }: { fact: DataType }) => {
    const { delay, end, title, icon } = fact

    return (
        <>
            <div className="counter-block col-lg-3 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay={delay}>
                <div className="inner-box">
                    <div className="icon">
                        <img src={`/images/resource/${icon}`} alt="Image" />
                    </div>
                    <div className="content">
                        <div className="count-box">
                            <span className="count-text">
                                <Counter end={end} />
                            </span>
                            <sup>+</sup>
                        </div>
                        <h4 className="counter-title">{title}</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFactV1;