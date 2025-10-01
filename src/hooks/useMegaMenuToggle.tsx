import { useCallback } from 'react';

export const useMegaMenuToggle = () => {
    const toggleMegaMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        const colMenu = (e.target as HTMLElement).closest('.col-menu') as HTMLElement | null;
        if (!colMenu) return;

        const megaContent = colMenu.querySelector('.content');
        if (megaContent) {
            megaContent.classList.toggle('d-block');
            colMenu.classList.toggle('on');
        }
    }, []);

    return { toggleMegaMenu };
};

export default useMegaMenuToggle;
