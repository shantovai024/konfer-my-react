import { Link } from "react-router-dom";

const SocialV2 = () => {
    return (
        <>
            <Link to="http://facebook.com" target='_blank'><i className="fab fa-facebook-f"></i></Link>
            <Link to="http://twitter.com" target='_blank'><i className="fab fa-twitter"></i></Link>
            <Link to="http://pinterest.com" target='_blank'><i className="fab fa-pinterest"></i></Link>
            <Link to="http://dribbble.com" target='_blank'><i className="fab fa-dribbble"></i></Link>
        </>
    );
};

export default SocialV2;