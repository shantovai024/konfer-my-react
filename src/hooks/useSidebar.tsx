import { useState, useCallback } from "react";

const useSidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    const toggle = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();
        setOpenSidebar((prev) => !prev);
    }, []);

    const close = useCallback(() => setOpenSidebar(false), []);

    return { openSidebar, toggle, close };
};

export default useSidebar;
