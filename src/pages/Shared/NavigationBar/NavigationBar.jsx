
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ActiveLink from "../../../Router/ActiveLink/ActiveLink";
import './NavigationBar.css'

const NavigationBar = () => {
    const navItems = <>
        <li>
            <ActiveLink className="hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/">Home</ActiveLink>
        </li>
        <li>
            <ActiveLink className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/techStack">Tech Stack</ActiveLink>
        </li>
        <li>
            <ActiveLink className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/projects">Projects</ActiveLink>
        </li>
        <li>
            <ActiveLink className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/contact">Contact me</ActiveLink>
        </li>
        <li>
            <ActiveLink className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/about">About me</ActiveLink>
        </li>
    </  >
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-gray-700 mx-auto max-w-screen-xl rounded-md container">
            <div className="navbar text-white mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass rounded-box w-52  ">
                            {navItems}
                        </ul>
                    </div>
                    <div className="text-[rgb(0,195,169)]">
                        <a className="lg:hidden sm:block" href="https://drive.google.com/uc?export=download&id=1_du_S-5RKYpXZDfufzAnFfMKk0lyFeLp" rel="noopener noreferrer">
                            <button className="btn btn-outline text-[rgb(0,195,169)] hover:bg-[rgb(0,195,169)] hover:border-none hover:text-white text-center">Download Resume</button>
                        </a>
                        <div className="hidden lg:block font-bold w-full text-xl">
                            <span className="my-0 name-style">MD Farid</span>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex mx-5 ">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://github.com/faridul22" target="_black" className="text-xl cursor-pointer mr-3"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/md-farid-5a5633248" target="_black" className="text-xl cursor-pointer"><FaLinkedin /></a>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;