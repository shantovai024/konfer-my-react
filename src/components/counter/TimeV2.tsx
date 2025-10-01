import { useTimer } from 'react-timer-hook';

interface DataType {
    expiryTimestamp: Date;
}

const TimeV2 = ({ expiryTimestamp }: DataType) => {

    const { seconds, minutes, hours, days } = useTimer({
        expiryTimestamp,
        onExpire: () => console.log("Counter Expired"),
    });

    return (
        <div className='time-countdown'>
            <div className="counter-column">
                <span className="count">{days <= 9 ? `0${days}` : days} <sub>Days</sub></span>
            </div>
            <span className="separator">:</span>
            <div className="counter-column">
                <span className="count">{hours <= 9 ? `0${hours}` : hours} <sub>Hours</sub></span>
            </div>
            <span className="separator">:</span>
            <div className="counter-column">
                <span className="count">{minutes <= 9 ? `0${minutes}` : minutes} <sub>Minutes</sub></span>
            </div>
            <span className="separator">:</span>
            <div className="counter-column">
                <span className="count">{seconds <= 9 ? `0${seconds}` : seconds} <sub>Second</sub></span>
            </div>
        </div>
    );
};

export default TimeV2;