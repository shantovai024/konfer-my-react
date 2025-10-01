import { useEffect, useState, useCallback } from "react";

const useSearchBar = () => {
    const [openSearch, setOpenSearch] = useState(false);

    useEffect(() => {
        const wrapper = document.querySelector(".page-wrapper");
        if (!wrapper) return;

        wrapper.classList.toggle("no-color-palate", openSearch);
    }, [openSearch]);

    const toggle = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();
        setOpenSearch((prev) => !prev);
    }, []);

    const close = useCallback(() => setOpenSearch(false), []);

    return { openSearch, toggle, close };
};

export default useSearchBar;
