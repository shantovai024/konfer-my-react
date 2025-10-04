import { useState, useCallback } from "react";

const useSearchBar = () => {
    const [openSearch, setOpenSearch] = useState(false);

    const toggle = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();
        setOpenSearch((prev) => !prev);
    }, []);

    const close = useCallback(() => setOpenSearch(false), []);

    return { openSearch, toggle, close };
};

export default useSearchBar;
