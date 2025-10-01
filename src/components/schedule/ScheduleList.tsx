interface DataType {
    id: number;
    listClass: string;
    dataTarget: string;
    day: string;
    date: string;
    month: string;
    year: number;
}

const ScheduleList = ({ list }: { list: DataType }) => {
    const { listClass, dataTarget, day, date, month, year } = list

    return (
        <>
            <li className={`tab-btn ${listClass}`} data-bs-toggle="tab" role="tab" data-bs-target={dataTarget}>
                <span className="day">{day}</span>
                <span className="date">{date}</span>
                <span className="month">{month}</span> {year}
            </li>
        </>
    );
};

export default ScheduleList;