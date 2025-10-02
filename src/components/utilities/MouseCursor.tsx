import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MouseCursor = () => {
    const circleRef = useRef(null);
    const followRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const follow = followRef.current;

        if (!circle || !follow) return;

        const moveCircle = (e: MouseEvent) => {
            gsap.to(circle, {
                duration: 0.3,
                x: e.clientX,
                y: e.clientY
            });
            gsap.to(follow, {
                duration: 0.7,
                x: e.clientX,
                y: e.clientY
            });
        };

        const hoverFunc = () => {
            gsap.to(circle, {
                duration: 0.3,
                opacity: 1,
                scale: 0
            });
            gsap.to(follow, {
                duration: 0.3,
                scale: 1.2
            });
        };

        const unhoverFunc = () => {
            gsap.to(circle, {
                duration: 0.3,
                opacity: 1,
                scale: 1
            });
            gsap.to(follow, {
                duration: 0.3,
                scale: 1
            });
        };

        // Add mousemove listener
        window.addEventListener('mousemove', moveCircle);

        // Add hover listeners to links and elements with 'clink' class
        const hoverElements = document.querySelectorAll('a, .clink');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', hoverFunc);
            element.addEventListener('mouseleave', unhoverFunc);
        });

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', moveCircle);
            hoverElements.forEach(element => {
                element.removeEventListener('mouseenter', hoverFunc);
                element.removeEventListener('mouseleave', unhoverFunc);
            });
        };
    }, []);

    return (
        <>
            <div className="circle" ref={circleRef} />
            <div className="circle-follow" ref={followRef} />
        </>
    );
};

export default MouseCursor;