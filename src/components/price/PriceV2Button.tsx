interface DataType {
    tabClass: string
    tabButton: string
    dataTarget: string
}

const PriceV2Button = ({ list }: { list: DataType }) => {
    const { tabClass, tabButton, dataTarget, } = list

    return (
        <>
            <li className={`tab-btn ${tabClass}`} data-bs-toggle="tab" role="tab" data-bs-target={dataTarget}>
                <div className="icon-box">
                    <div className="icon-check-three"></div>
                    <div className="check-three-bg"></div>
                </div>
                {tabButton}
            </li>
        </>
    );
};

export default PriceV2Button;