interface DataType {
    id: number;
    title: string;
}

const SingleAboutV2 = ({ about }: { about: DataType }) => {
    const { title } = about;

    return (
        <>
            <li>
                <div className="icon-box">
                    <div className="icon-check-two" />
                    <div className="check-two-bg" />
                    <div className="check-two-bg-two" />
                </div>
                <div className="content">
                    <h5 className="title">{title}</h5>
                </div>
            </li>
        </>
    );
};

export default SingleAboutV2;