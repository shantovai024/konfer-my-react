import { useRef, useCallback } from "react";

export const useHoverTransform = () => {
    const hoverRef = useRef<HTMLDivElement | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = useCallback((event: React.MouseEvent) => {
        if (!hoverRef.current || !parentRef.current) return;

        const rect = parentRef.current.getBoundingClientRect();
        const dx = event.clientX - rect.x;
        const dy = event.clientY - rect.y;

        hoverRef.current.style.transform = `translate(${dx - hoverRef.current.offsetWidth / 2
            }px, ${dy - hoverRef.current.offsetHeight / 4}px)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (hoverRef.current) {
            hoverRef.current.style.transform = "translate(0, 0)";
        }
    }, []);

    return { hoverRef, parentRef, handleMouseMove, handleMouseLeave };
};
