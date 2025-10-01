interface DataType {
    id: number;
    activeClass: string;
    dayLabel: string;
    target: string;
}

const EventV1Button = ({ button }: { button: DataType }) => {
    const { target, dayLabel, activeClass } = button

    return (
        <>
            <li
                className={`tab-btn ${activeClass ? activeClass : ""}`}
                data-bs-toggle="tab"
                data-bs-target={target}
                role="tab">
                {dayLabel}
            </li>
        </>
    );
};

export default EventV1Button;