import { NavLink } from 'react-router-dom';

interface NavBarProps {
    active: number,
}

const NavBar = () => {
    return (
        <ul className="menu menu-horizontal bg-base-200 rounded-box object-center self-center justify-self-start">
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