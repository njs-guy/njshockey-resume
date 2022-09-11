import { NavLink } from 'react-router-dom';

interface NavBarProps {
    active: number,
}

const NavBar = () => {
    return (
        <ul className="menu menu-horizontal bg-base-200 rounded-box grow-0 object-center self-center">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="/resume">Résumé</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;