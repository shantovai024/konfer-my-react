import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RoutesScrollToTop = () => {
    // Extracts pathname property (key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Return null since this component does not need to render anything
    return null;
}

export default RoutesScrollToTop;