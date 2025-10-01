import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useExpandAnimation = (target: string) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(target, {
                width: "100%", // Expands to full width
                borderRadius: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: target,
                    start: "top 70%",
                    end: "top 5%",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert(); // ✅ Cleanup GSAP animations on unmount
    }, [target]);
};

export default useExpandAnimation;
