import SocialV1 from '../social/SocialV1';
import MainMenu from './MainMenu';
import { Link } from "react-router-dom";

interface DataType {
    openMenu: boolean;
    handleCloseMenu: () => void;
    toggleMenuItem: (menuId: string) => void;
    isMenuItemOpen: (menuId: string) => boolean;
}

const MobileMenu = ({ openMenu, handleCloseMenu, toggleMenuItem, isMenuItemOpen }: DataType) => {
    return (
        <>
            <div className={`${openMenu ? "mobile-menu-visible" : ""}`}>
                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="logo-box">
                                <div className="nav-logo">
                                    <Link to="/">
                                        <img src="/images/logo-2.svg" alt="image" />
                                    </Link>
                                </div>
                            </div>
                            <div className="close-btn" onClick={handleCloseMenu}>
                                <span className="icon fa fa-times"></span>
                            </div>
                        </div>
                        <MainMenu
                            toggleMenuItem={toggleMenuItem}
                            isMenuItemOpen={isMenuItemOpen}
                        />
                        <ul className="contact-list-one">
                            <li>
                                <i className="icon lnr-icon-phone-handset"></i>
                                <span className="title">Call Now</span>
                                <div className="text"><a href="tel:+92880098670">+92 (8800) - 98670</a></div>
                            </li>
                            <li>
                                <i className="icon lnr-icon-envelope1"></i>
                                <span className="title">Send Email</span>
                                <div className="text"><a href="mailto:help@company.com">help@company.com</a></div>
                            </li>
                            <li>
                                <i className="icon lnr-icon-map-marker"></i>
                                <span className="title">Address</span>
                                <div className="text">66 Broklyant, New York India 3269</div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <SocialV1 />
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;