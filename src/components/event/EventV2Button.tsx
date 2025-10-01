interface DataType {
    id: number;
    activeClass: string;
    dayLabel: string;
    date: string;
    target: string;
}

const EventV2Button = ({ button }: { button: DataType }) => {
    const { activeClass, target, date, dayLabel } = button

    return (
        <>
            <li
                className={`tab-btn ${activeClass ? activeClass : ""}`}
                data-bs-toggle="tab"
                data-bs-target={target}
                role="tab"
            >
                {dayLabel} <span>{date}</span>
                <div className="shape-fifteen" />
            </li>
        </>
    );
};

export default EventV2Button;