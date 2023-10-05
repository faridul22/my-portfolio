
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({ to, children }) => {
    return (
        <div className='link-container'>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "font-semibold text-[rgb(0,195,169)] border-b-4 border-[rgb(0,195,169)] pb-2 mx-5 text-lg" : "hover:border-b-4 border-[rgb(0,195,169)] hover:text-[rgb(0,195,169)] pb-2 mx-5 text-lg"}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;