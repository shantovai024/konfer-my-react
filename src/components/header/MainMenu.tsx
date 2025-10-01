import { Link } from "react-router-dom";

interface DataType {
    parentMenu?: string;
    toggleMenu?: (event: React.MouseEvent) => void;
}

const MainMenu = ({ parentMenu, toggleMenu }: DataType) => {
    return (
        <>
            <ul className="navigation clearfix">
                <li className={`dropdown ${parentMenu === 'home' ? 'current' : ''} `} onClick={toggleMenu}>
                    <Link to="#" >Home</Link>
                    <ul className='sub-menu'>
                        <li><Link to="/">Home 01</Link></li>
                        <li><Link to="/home-2">Home 02</Link></li>
                        <li><Link to="/home-3">Home 03</Link></li>
                    </ul>
                    <div className="dropdown-btn" ><span className="fa fa-angle-down"></span></div>
                </li>
                <li className={`dropdown ${parentMenu === 'about' ? 'current' : ''}`} onClick={toggleMenu}>
                    <Link to="#" onClick={toggleMenu}>Pages</Link>
                    <div className="mega-menu sub-menu">
                        <div className="mega-menu-bar row">
                            <div className="column col-lg-4">
                                <ul>
                                    <li><Link to="/about-us" >About Us</Link></li>
                                    <li><Link to="/faqs" >FAQs</Link></li>
                                    <li><Link to="/pricing" >Pricing</Link></li>
                                    <li><Link to="/testimonials" >Testimonials</Link></li>
                                </ul>
                            </div>
                            <div className="column col-lg-4">
                                <ul>
                                    <li><Link to="/coming-soon" >Coming Soon</Link></li>
                                    <li><Link to="/contact" >Contact Us</Link></li>
                                    <li><Link to="/services" >Service</Link></li>
                                    <li><Link to="/services-single/1/1" >Service Single</Link></li>
                                </ul>
                            </div>
                            <div className="column col-lg-4">
                                <ul>
                                    <li><Link to="/speakers" >Speakers</Link></li>
                                    <li><Link to="/speaker-single/1" >Speaker Single</Link></li>
                                    <li><Link to="/events" >Events</Link></li>
                                    <li><Link to="/event-detail/1/1" >Event Single</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-btn" ><span className="fa fa-angle-down"></span></div>
                </li>
                <li className={`dropdown ${parentMenu === 'Events' ? 'current' : ''}`} onClick={toggleMenu}>
                    <Link to="#" onClick={toggleMenu}>Events</Link>
                    <ul className='sub-menu'>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/event-detail/1/1">Event Detail</Link></li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div>
                </li>
                <li className={`dropdown ${parentMenu === 'speakers' ? 'current' : ''}`} onClick={toggleMenu}>
                    <Link to="#" onClick={toggleMenu}>Speakers</Link>
                    <ul className='sub-menu'>
                        <li><Link to="/speakers">Speakers</Link></li>
                        <li><Link to="/speaker-single/1">Speaker Detail</Link></li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div>
                </li>
                <li className={`dropdown ${parentMenu === 'blog' ? 'current' : ''}`} onClick={toggleMenu}>
                    <Link to="#" onClick={toggleMenu}>Blogs</Link>
                    <ul className='sub-menu'>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/blog-single/1">Blog Single</Link></li>
                        <li><Link to="/error-page">404 Error</Link></li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div>
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;