import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 text-white border-t-2 border-gray-500 mt-32 rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to="/" className="link link-hover">Home</Link>
                <Link to="/about" className="link link-hover">About me</Link>
                <Link to="/contact" className="link link-hover">Contact me</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/faridul22" target="_black" className="text-xl cursor-pointer mr-3"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/md-farid-042a86280/" target="_black" className="text-xl cursor-pointer"><FaLinkedin /></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Me</p>
            </div>
        </footer>
    );
};

export default Footer;