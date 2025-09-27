import { Link } from "react-router-dom";

interface ClientThumbType {
    id: number;
    clientThumb: string;
}

interface DataType {
    id: number;
    boxClass: string;
    clientData: ClientThumbType[];
}

const SingleClientV1 = ({ client }: { client: DataType }) => {
    const { clientData, boxClass } = client;

    return (
        <>
            <div className={`blocks-outer-box ${boxClass ? boxClass : ""}`}>
                {clientData.map(({ id, clientThumb }) => (
                    <div className="client-block" key={id}>
                        <div className="inner-box">
                            <Link to="#" className="image">
                                <img src={`/images/clients/${clientThumb}`} alt={`Client ${id}`} />
                                <img src={`/images/clients/${clientThumb}`} alt={`Client ${id}`} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SingleClientV1;
