import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const navItems = <>
        <li>
            <Link className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/#">Home</Link>
        </li>
        <li>
            <Link className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/#projects">Projects</Link>
        </li>
        <li>
            <Link className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/#resume">Resume</Link>
        </li>
        <li>
            <Link className=" hover:font-semibold hover:border-b-4 pb-2 mx-5 text-xl" to="/#about">About Me</Link>
        </li>
    </  >
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-base-100 rounded-box w-52  ">
                            {navItems}
                        </ul>
                    </div>
                    <div>
                        <a onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} className={`btn btn-ghost normal-case text-xl`}> {isHovered ? 'Download Resume' : 'MD Farid'}
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex mx-5 ">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;