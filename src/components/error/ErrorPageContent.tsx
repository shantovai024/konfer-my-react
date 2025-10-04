import { Link } from "react-router-dom";

const ErrorPageContent = () => {
    return (
        <>
            <section className="error-section">
                <div className="auto-container">
                    <div className="content-box">
                        <div className="shape-thirtyeight" />
                        <h1 className="title">4<span>0</span>4 </h1>
                        <h2 className="title-two">Page not Found</h2>
                        <div className="text">Sorry, we could not find the page you are looking for</div>
                        <div className="btn-box">
                            <Link to="/" className="theme-btn btn-style-one bg-orange">
                                <span className="btn-title">Back To Home Page</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPageContent;