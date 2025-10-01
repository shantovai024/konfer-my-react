import { Link } from "react-router-dom";

const SocialV3 = () => {
    return (
        <>
            <li>
                <Link to="http://behance.com" target="_blank"><i className="fab fa-behance" /></Link>
            </li>
            <li>
                <Link to="http://tiktok.com" target="_blank"><i className="fab fa-tiktok" /></Link>
            </li>
            <li>
                <Link to="http://instagram.com" target="_blank"><i className="fab fa-instagram" /></Link>
            </li>
            <li>
                <Link to="http://facebook.com" target="_blank"><i className="fab fa-facebook-f" /></Link>
            </li>
            <li>
                <Link to="http://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link>
            </li>

        </>
    );
};

export default SocialV3;