import { useState, useCallback } from "react";

const useMobileMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openMenuItems, setOpenMenuItems] = useState<Set<string>>(new Set());

    const toggle = useCallback((e?: React.MouseEvent<HTMLDivElement>) => {
        e?.preventDefault();
        setOpenMenu((prev) => !prev);
    }, []);

    const close = useCallback(() => {
        setOpenMenu(false);
        setOpenMenuItems(new Set()); // Close all submenus when closing mobile menu
    }, []);

    const toggleMenuItem = useCallback((menuId: string) => {
        setOpenMenuItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(menuId)) {
                newSet.delete(menuId);
            } else {
                newSet.add(menuId);
            }
            return newSet;
        });
    }, []);

    const isMenuItemOpen = useCallback(
        (menuId: string) => openMenuItems.has(menuId),
        [openMenuItems]
    );

    return {
        openMenu,
        toggle,
        close,
        toggleMenuItem,
        isMenuItemOpen
    };
};

export default useMobileMenu;