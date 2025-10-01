import breadCrumbData from "../../assets/jsonData/breadCrumb/breadCrumbData.json"

interface DataType {
    title?: string;
    subtitle?: string;
}

const BreadCrumb = ({ title }: DataType) => {
    return (
        <>
            <section className="page-title" style={{ backgroundImage: "url(/images/background/9.jpg)" }}>
                <div className="shape-thirtyfour"></div>
                <div className="shape-thirtyfive"></div>
                <div className="shape-thirtysix bounce-y"></div>
                <div className="shape-thirtyseven bounce-x"></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <h1 className="title">{title ? title : "Error Page"}</h1>
                        <div className="breadcrumb-marquee">
                            {breadCrumbData.map((data) => (
                                <span key={data.id} className="title-two">
                                    {title} . {data.subtitle}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default BreadCrumb;