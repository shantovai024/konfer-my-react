import { Link } from "react-router-dom";
import HeaderTopV1 from './HeaderTopV1';
import MobileMenu from './MobileMenu';
import MainMenu from './MainMenu';
import useStickyMenu from '../../hooks/useStickyMenu';
import useSearchBar from '../../hooks/useSearchBar';
import useSidebar from '../../hooks/useSidebar';
import useMobileMenu from '../../hooks/useMobileMenu';
import SearchPopup from "./SearchPopup";
import SidebarV1 from "./SidebarV1";

interface DataType {
    headerStyle?: string
    parentMenu?: string;
}

const HeaderV2 = ({ headerStyle, parentMenu }: DataType) => {

    const isSticky = useStickyMenu();
    const { openSearch, toggle: searchToggle, close: searchClose } = useSearchBar();
    const { openSidebar, toggle: sidebarToggle, close: sidebarClose } = useSidebar();
    const { openMenu, toggle: mobileToggle, close: handleCloseMenu, toggleMenu } = useMobileMenu();

    return (
        <>
            <header className={`main-header header-style-two ${headerStyle ? headerStyle : ""} ${isSticky ? "fixed-header" : ""}`}>

                {isSticky ||
                    <HeaderTopV1 />
                }

                <div className="header-lower">
                    <div className="auto-container clearfix">
                        <div className='main-box'>

                            {/* Logo */}
                            <div className="logo-box">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={isSticky ? "/images/logo-2.svg" : "/images/logo.svg"} alt="image" />
                                    </Link>
                                </div>
                            </div>

                            <div className="header-navbar">
                                <div className="nav-outer clearfix">
                                    <div className="mobile-nav-toggler" onClick={mobileToggle}>
                                        <span className="icon lnr-icon-bars"></span>
                                    </div>
                                    <nav className="main-menu navbar-expand-lg navbar-light">
                                        <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                            <MainMenu parentMenu={parentMenu} />
                                        </div>
                                    </nav>

                                    <div className="outer-box">
                                        <button className="ui-btn search-btn" onClick={searchToggle}>
                                            <i className="icon flaticon-search"></i>
                                        </button>
                                        <div className="btn-box">
                                            <Link to="/pricing" className="theme-btn btn-style-one dark-bg">
                                                <span className="btn-title">Get Tickets</span>
                                            </Link>
                                        </div>
                                        <button className="ui-btn toggle-hidden-bar" onClick={sidebarToggle}>
                                            <i className="icon flaticon-menu-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MobileMenu
                    openMenu={openMenu}
                    handleCloseMenu={handleCloseMenu}
                    toggleMenu={toggleMenu}
                />

            </header>

            <SearchPopup openSearch={openSearch} searchClose={searchClose} />
            <SidebarV1 openSidebar={openSidebar} sidebarClose={sidebarClose} />
        </>
    );
};

export default HeaderV2;