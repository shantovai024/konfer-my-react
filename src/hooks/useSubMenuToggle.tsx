import { useCallback } from "react";

const useSubMenuToggle = () => {
    const toggleSubMenu = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            e.preventDefault();

            const listItem = (e.currentTarget as HTMLElement).closest("li");
            if (!listItem) return; // Prevent null issue

            const subMenu = listItem.querySelector<HTMLElement>(".sub-menu");
            if (subMenu) {
                listItem.classList.toggle("open");
            }
        },
        []
    );

    return toggleSubMenu;
};

export default useSubMenuToggle;
