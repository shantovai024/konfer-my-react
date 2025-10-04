import { Link } from "react-router-dom";

interface DataType {
    toggleMenuItem?: (menuId: string) => void;
    isMenuItemOpen?: (menuId: string) => boolean;
    parentMenu?: string;
}

const MainMenu = ({ toggleMenuItem, isMenuItemOpen, parentMenu }: DataType) => {
    const handleToggle = (menuId: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenuItem?.(menuId);
    };

    return (
        <>
            <ul className="navigation clearfix">
                <li className={`dropdown ${parentMenu === 'home' ? 'current' : ''} ${isMenuItemOpen?.('home') ? 'open' : ''}`}>
                    <Link to="#" onClick={handleToggle('home')}>Home</Link>
                    <ul className='sub-menu'>
                        <li><Link to="/">Home 01</Link></li>
                        <li><Link to="/home-2">Home 02</Link></li>
                        <li><Link to="/home-3">Home 03</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={handleToggle('home')}>
                        <span className="fa fa-angle-down"></span>
                    </div>
                </li>

                <li className={`dropdown ${parentMenu === 'about' ? 'current' : ''} ${isMenuItemOpen?.('pages') ? 'open' : ''}`}>
                    <Link to="#" onClick={handleToggle('pages')}>Pages</Link>
                    <div className="mega-menu sub-menu">
                        <div className="mega-menu-bar row">
                            <div className="column col-lg-4">
                                <ul>
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/faqs">FAQs</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/testimonials">Testimonials</Link></li>
                                </ul>
                            </div>
                            <div className="column col-lg-4">
                                <ul>
                                    <li><Link to="/coming-soon">Coming Soon</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/service-single/1">Service Single</Link></li>
                                </ul>
                            </div>
                            <div className="column col-lg-4">
                                <ul>
                                    <li><Link to="/speakers">Speakers</Link></li>
                                    <li><Link to="/speaker-single/1">Speaker Single</Link></li>
                                    <li><Link to="/events">Events</Link></li>
                                    <li><Link to="/event-single/1">Event Single</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-btn" onClick={handleToggle('pages')}>
                        <span className="fa fa-angle-down"></span>
                    </div>
                </li>

                <li className={`dropdown ${parentMenu === 'events' ? 'current' : ''} ${isMenuItemOpen?.('events') ? 'open' : ''}`}>
                    <Link to="#" onClick={handleToggle('events')}>Events</Link>
                    <ul className='sub-menu'>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/event-single/1">Event Single</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={handleToggle('events')}>
                        <span className="fa fa-angle-down"></span>
                    </div>
                </li>

                <li className={`dropdown ${parentMenu === 'speakers' ? 'current' : ''} ${isMenuItemOpen?.('speakers') ? 'open' : ''}`}>
                    <Link to="#" onClick={handleToggle('speakers')}>Speakers</Link>
                    <ul className='sub-menu'>
                        <li><Link to="/speakers">Speakers</Link></li>
                        <li><Link to="/speaker-single/1">Speaker Single</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={handleToggle('speakers')}>
                        <span className="fa fa-angle-down"></span>
                    </div>
                </li>

                <li className={`dropdown ${parentMenu === 'blogs' ? 'current' : ''} ${isMenuItemOpen?.('blogs') ? 'open' : ''}`}>
                    <Link to="#" onClick={handleToggle('blogs')}>Blogs</Link>
                    <ul className='sub-menu'>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/blog-single/1">Blog Single</Link></li>
                        <li><Link to="/error-page">404 Error</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={handleToggle('blogs')}>
                        <span className="fa fa-angle-down"></span>
                    </div>
                </li>

                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;