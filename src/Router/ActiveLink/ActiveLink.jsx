
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({ to, children }) => {
    return (
        <div className='link-container'>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "font-semibold border-b-4 pb-2 mx-5 text-lg" : "hover:border-b-4 pb-2 mx-5 text-lg"}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;