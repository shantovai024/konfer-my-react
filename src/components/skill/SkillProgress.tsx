import useProgress from "../../hooks/useProgress";

interface DataType {
    id: number;
    title: string;
    width: number;
    speed: number;
    stop: number;
}

const SkillProgress = ({ skill }: { skill: DataType }) => {
    const { title, width, speed, stop } = skill

    const progressRef = useProgress();

    return (
        <>
            <div className="skill-item">
                <div className="skill-header">
                    <div className="skill-title">{title}</div>
                </div>
                <div className="skill-bar">
                    <div className="bar-inner">
                        <div
                            className="bar progress-line"
                            data-width={width}
                            data-stop={stop}
                            data-speed={speed}
                            ref={progressRef}
                        >
                            <div className="skill-percentage">
                                <div className="count-box">
                                    <span className="count-text">0</span>%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillProgress;