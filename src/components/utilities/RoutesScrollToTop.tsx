import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RoutesScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Don't scroll if there's a hash in the URL
        if (hash) {
            return;
        }

        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' // Prevent smooth scrolling interference
            });
        }, 0);
    }, [pathname, hash]);

    return null;
}

export default RoutesScrollToTop;