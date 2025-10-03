import { useEffect, useRef, useState } from "react";

interface DataType {
    id: number;
    title: string;
    width: number;
    speed: number;
    stop: number;
}

const SkillProgress = ({ skill }: { skill: DataType }) => {
    const { title, width, speed, stop } = skill;
    
    const [inView, setInView] = useState(false);
    const [progress, setProgress] = useState(0);
    const barRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.disconnect(); // trigger only once
                    }
                });
            },
            { threshold: 0.3 } // 30% visible
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Animate percentage counter
    useEffect(() => {
        if (inView) {
            let start = 0;
            const stepTime = Math.abs(Math.floor(speed / stop)); // time per increment
            const timer = setInterval(() => {
                start += 1;
                setProgress(start);
                if (start >= stop) {
                    clearInterval(timer);
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [inView, stop, speed]);

    return (
        <div className="skill-item">
            <div className="skill-header">
                <div className="skill-title">{title}</div>
            </div>
            <div className="skill-bar">
                <div className="bar-inner">
                    <div
                        ref={barRef}
                        className="bar progress-line"
                        style={{
                            width: inView ? `${width}%` : "0%",
                            transition: `width ${speed}ms ease`
                        }}
                    >
                        <div className="skill-percentage">
                            <div className="count-box">
                                <span className="count-text">{progress}</span>%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillProgress;
