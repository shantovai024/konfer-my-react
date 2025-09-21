import { useEffect } from 'react';
import { ScrollToTop } from 'react-simple-scroll-up';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Dependency = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-back',
            duration: 1000,
            once: true,
            disable: window.innerWidth < 768
        });
    }, [])

    return (
        <>
            <ScrollToTop symbol={<i className="fas fa-long-arrow-up"></i>} />
            <ToastContainer />
        </>
    );
};

export default Dependency;