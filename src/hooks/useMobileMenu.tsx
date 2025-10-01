import { useEffect, useState, useCallback } from "react";

const useMobileMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const wrapper = document.querySelector(".page-wrapper");
        if (!wrapper) return;

        wrapper.classList.toggle("no-color-palate", openMenu);
    }, [openMenu]);

    const toggle = useCallback((e?: React.MouseEvent<HTMLDivElement>) => {
        e?.preventDefault();
        setOpenMenu((prev) => !prev);
    }, []);

    const close = useCallback(() => setOpenMenu(false), []);

    const toggleMenu = useCallback(
        (e: React.MouseEvent<Element, MouseEvent>) => {
            e.preventDefault();
            const listItem = (e.currentTarget as HTMLElement).closest("li");
            if (!listItem) return;
            listItem.classList.toggle("open");
        },
        []
    );

    return { openMenu, toggle, close, toggleMenu };
};

export default useMobileMenu;
