import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-center font-weight-bold  text-decoration-none  py-3 mx-auto">
            <Link to="/" className="text-white">
                Back to Ghibli Films
            </Link>
        </footer>
    );
};

export default Footer;
