import { useEffect, useRef, useCallback } from "react";

interface Options {
    width?: number;   // target width %
    stop?: number;    // counter stop value
    speed?: number;   // animation speed in ms
}

const useProgress = () => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const { width = 0, stop = 0, speed = 1000 } =
                            (el.dataset as unknown as Options) || {};

                        // Animate width
                        if (width) {
                            el.style.width = `${width}%`;
                        }

                        // Animate counter
                        const countEl = el.querySelector(".count-text") as HTMLElement | null;
                        if (countEl) {
                            let start = 0;
                            const end = stop || 0;
                            const duration = speed || 1000;
                            const increment = end / (duration / 16);

                            const animate = () => {
                                start += increment;
                                if (start >= end) {
                                    countEl.innerText = end.toString();
                                } else {
                                    countEl.innerText = Math.floor(start).toString();
                                    requestAnimationFrame(animate);
                                }
                            };
                            animate();
                        }

                        obs.unobserve(el);
                    }
                });
            },
            { threshold: 0.1 }
        );

        return () => observerRef.current?.disconnect();
    }, []);

    const refCallback = useCallback((node: HTMLElement | null) => {
        if (node && observerRef.current) {
            observerRef.current.observe(node);
        }
    }, []);

    return refCallback;
};

export default useProgress;
