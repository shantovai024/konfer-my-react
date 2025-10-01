import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ColorsPalate = () => {
    // Run once on mount
    useEffect(() => {
        const darkLayout = localStorage.getItem('darkLayout');
        const pageDirection = localStorage.getItem('pageDirection');

        if (darkLayout === 'true') {
            document.body.classList.add('dark-layout');
        }

        if (pageDirection === 'rtl') {
            document.body.classList.add('rtl');
        }
    }, []);

    const [isColorPalateVisible, setColorPalateVisible] = useState(false);

    const openColorPlate = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setColorPalateVisible(prev => !prev);
    };

    const darkLayout = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        document.body.classList.add('dark-layout');
        localStorage.setItem('darkLayout', 'true'); // store as string
    };

    const lightLayout = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        document.body.classList.remove('dark-layout');
        localStorage.removeItem('darkLayout');
    };

    const rightToLeft = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        document.body.classList.add('rtl');
        localStorage.setItem('pageDirection', 'rtl');
    };

    const leftToRight = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        document.body.classList.remove('rtl');
        localStorage.removeItem('pageDirection');
    };

    return (
        <>
            <div className={`color-palate ${isColorPalateVisible ? 'visible-palate' : ''}`}>
                <div className="inner-palate">
                    <div className="color-trigger" onClick={openColorPlate}>
                        <i className="fa fa-cog"></i>
                    </div>

                    <div className="color-palate-head">
                        <h5>GET AN AWESOME START!</h5>
                    </div>

                    <div className="lower-options">
                        <h6>RTL Supported</h6>
                        <ul className="rtl-version option-box">
                            <li className="active" onClick={leftToRight}>LTR Version</li>
                            <li className="rtl" onClick={rightToLeft}>RTL Version</li>
                        </ul>

                        <h6>Color Mode</h6>
                        <ul className="color-mode option-box">
                            <li className="active" onClick={lightLayout}>Light</li>
                            <li className="dark" onClick={darkLayout}>Dark</li>
                        </ul>
                    </div>

                    <div className="palate-foo">
                        <span>
                            You will find much more options for colors and styling in admin panel. This color picker is used only for demonstration purposes.
                        </span>
                    </div>

                    <Link to="/contact#" className="purchase-btn">Purchase now $16</Link>
                </div>
            </div>
        </>
    );
};

export default ColorsPalate;
