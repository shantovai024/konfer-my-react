
interface DataType {
    accordionId: string
    accordionParent: string
    dataTarget: string
    ariaExpanded: boolean
    title: string
    collapseClass: string
    ariaLabelled: string
    text: string
}

interface Props {
    faq: DataType
    isOpen?: boolean
}

const SingleFaqV1 = ({ faq }: Props) => {
    const { accordionId, accordionParent, dataTarget, ariaExpanded, title, collapseClass, text } = faq

    return (
        <>
            <li className={`accordion block`} id={accordionId}>
                <div
                    className={`acc-btn ${!ariaExpanded ? "collapsed" : ""}`}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${dataTarget}`}
                    aria-expanded={ariaExpanded}
                    aria-controls={dataTarget}>
                    {title}
                </div>

                <div
                    id={dataTarget}
                    className={`acc-content accordion-collapse collapse ${collapseClass}`}
                    data-bs-parent={`#${accordionParent}`}>

                    <div className="content">
                        <div className="text">{text}</div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default SingleFaqV1;