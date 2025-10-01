interface DataType {
    id: number;
    tabTarget: string;
    date: string;
    dayName: string;
    dayLabel: string;
    activeClass: string;
}

const EventV3Button = ({ button }: { button: DataType }) => {
    const { tabTarget, date, dayName, dayLabel, activeClass } = button;

    return (
        <li
            className={`tab-btn ${activeClass ? activeClass : ""}`}
            data-bs-toggle="tab"
            data-bs-target={tabTarget}
            role="tab"
        >
            <div className="date-box">
                <span className="date">{date}</span>
            </div>
            {dayName}
            <span className="day">{dayLabel}</span>
        </li>
    );
};

export default EventV3Button;
