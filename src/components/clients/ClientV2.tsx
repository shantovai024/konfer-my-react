import { Link } from "react-router-dom";
import clientV2Data from "../../assets/jsonData/clients/clientV2Data.json"

const ClientV2 = () => {
    return (
        <>
            <section className="client-section-two">
                <div className="bg bg-pattern-5" />
                <div className="auto-container">
                    <div className="row g-0">
                        {clientV2Data.map(client =>
                            <div
                                key={client.id}
                                className={`client-block-two col-lg-3 col-md-4 col-sm-6 ${client.boxClass ? client.boxClass : ""}`}

                            >
                                <div className="inner-box">
                                    {!client.isEmpty && (
                                        <Link to="#" className="image">
                                            <img src={`/images/clients/${client.image1}`} alt="Client Logo" />
                                            <img src={`/images/clients/${client.image2}`} alt="Client Logo" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClientV2;