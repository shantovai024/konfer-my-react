import { useEffect } from 'react';
import { ScrollToTop } from 'react-simple-scroll-up';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos'
import 'aos/dist/aos.css';
import MouseCursor from './MouseCursor';

const Dependency = () => {

    useEffect(() => {
        // Dynamically import Bootstrap JS
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .catch((err) => {
                console.error('Bootstrap loading error:', err);
            });

        // Aos Animation 
        AOS.init({
            easing: 'ease-out-back',
            duration: 1000,
            once: true,
            disable: window.innerWidth < 768
        });
    }, []);

    return (
        <>
            <ScrollToTop symbol={<i className="fas fa-long-arrow-up"></i>} />
            <ToastContainer />
            <MouseCursor />
        </>
    );
};

export default Dependency;