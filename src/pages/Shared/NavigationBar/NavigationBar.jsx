import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const NavigationBar = () => {
    const navItems = <>
        <li>
            <Link className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/">Home</Link>
        </li>
        <li>
            <Link className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/techStack">Tech Stack</Link>
        </li>
        <li>
            <Link className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/projects">Projects</Link>
        </li>
        <li>
            <Link className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/contact">Contact me</Link>
        </li>
        <li>
            <Link className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/about">About me</Link>
        </li>
    </  >
    return (
        <div className="max-w-screen-xl mx-auto pt-10">
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-base-100 text-gray-800 rounded-box w-52  ">
                            {navItems}
                        </ul>
                    </div>
                    <div className="text-red-600">
                        <a className="lg:hidden sm:block" href="https://drive.google.com/file/d/1UmmIkSnRTGfcyzyXuap5TYEfV19En-EQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-outline text-red-600 hover:bg-red-700 hover:border-none hover:text-white text-center">Download Resume</button>
                        </a>
                        <div className="hidden lg:block font-bold w-full text-xl">
                            <span className="my-0">MD Farid</span>
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
                    <a href="https://www.linkedin.com/in/md-farid-042a86280/" target="_black" className="text-xl cursor-pointer"><FaLinkedin /></a>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;