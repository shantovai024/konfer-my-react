import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ children }: { children: React.ReactNode }) => {
    const textRef = useRef<HTMLHeadingElement>(null);
    const originalContentRef = useRef<string>("");
    const isInitializedRef = useRef(false);

    useEffect(() => {
        const element = textRef.current;
        if (!element || isInitializedRef.current) return;

        // Store original HTML on first render only
        if (!originalContentRef.current) {
            originalContentRef.current = element.innerHTML;
        }

        const splitTextWithHTML = (element: HTMLElement) => {
            const processTextNode = (textNode: Text) => {
                const text = textNode.textContent || "";
                if (text.trim() === "") {
                    return document.createTextNode(text);
                }

                const words = text.split(" ");
                const fragment = document.createDocumentFragment();

                words.forEach((word, i) => {
                    if (word === "") {
                        if (i < words.length - 1) {
                            const space = document.createTextNode(" ");
                            fragment.appendChild(space);
                        }
                        return;
                    }

                    const wordSpan = document.createElement("span");
                    wordSpan.style.display = "inline-block";
                    wordSpan.style.overflow = "hidden";
                    wordSpan.className = "word";

                    const chars = word.split("");
                    chars.forEach((char) => {
                        const charSpan = document.createElement("span");
                        charSpan.textContent = char;
                        charSpan.style.display = "inline-block";
                        charSpan.className = "char";
                        wordSpan.appendChild(charSpan);
                    });

                    fragment.appendChild(wordSpan);

                    if (i < words.length - 1) {
                        const space = document.createTextNode(" ");
                        fragment.appendChild(space);
                    }
                });

                return fragment;
            };

            const processNode = (node: Node): DocumentFragment => {
                const fragment = document.createDocumentFragment();

                if (node.nodeType === Node.TEXT_NODE) {
                    const processedFragment = processTextNode(node as Text);
                    fragment.appendChild(processedFragment);
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const element = node as Element;

                    if (element.tagName.toLowerCase() === 'br') {
                        const br = document.createElement('br');
                        fragment.appendChild(br);
                    } else {
                        const clonedElement = element.cloneNode(false) as Element;

                        Array.from(element.childNodes).forEach(childNode => {
                            const processedChild = processNode(childNode);
                            clonedElement.appendChild(processedChild);
                        });

                        fragment.appendChild(clonedElement);
                    }
                }

                return fragment;
            };

            // Restore original content first
            element.innerHTML = originalContentRef.current;

            // Then process it
            const originalContent = Array.from(element.childNodes);
            element.innerHTML = "";

            originalContent.forEach(node => {
                const processedFragment = processNode(node);
                element.appendChild(processedFragment);
            });
        };

        // Split text immediately
        element.classList.add("text-reveal-anim");
        splitTextWithHTML(element);

        const chars = element.querySelectorAll(".char");

        if (chars.length > 0) {
            // Set initial opacity
            gsap.set(chars, { opacity: 0.2 });

            const createAnimation = () => {
                // Force ScrollTrigger to recalculate positions
                ScrollTrigger.refresh(true);

                gsap.to(chars, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,
                        markers: false,
                        invalidateOnRefresh: true,
                        onRefresh: (self) => {
                            // Reset animation progress based on current scroll position
                            self.update();
                        }
                    },
                    opacity: 1,
                    stagger: 0.02,
                    ease: "none"
                });
            };

            // Wait for everything to load
            if (document.readyState === 'complete') {
                // Page already loaded
                setTimeout(() => {
                    createAnimation();
                }, 100);
            } else {
                // Wait for load event
                const handleLoad = () => {
                    setTimeout(() => {
                        createAnimation();
                    }, 100);
                };
                window.addEventListener('load', handleLoad);

                return () => {
                    window.removeEventListener('load', handleLoad);
                    ScrollTrigger.getAll().forEach(trigger => {
                        if (trigger.trigger === element) {
                            trigger.kill();
                        }
                    });
                };
            }
        }

        isInitializedRef.current = true;

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === element) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <h2 ref={textRef}>
            {children}
        </h2>
    );
};

export default AnimatedText;