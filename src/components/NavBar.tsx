import { Link } from 'react-router-dom';

interface NavBarProps {
    active: number,
}

const NavBar = ({active}: NavBarProps) => {
    return (
        <ul className="menu menu-horizontal bg-base-200 rounded-box grow-0 object-center self-center">
            <li>
                <Link to="/" className={active === 0 ? 'active': ''}>
                    About
                </Link>
            </li>
            <li>
                <Link to="/portfolio" className={active === 1 ? 'active': ''}>
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to="/resume" className={active === 2 ? 'active': ''}>
                    Résumé
                </Link>
            </li>
        </ul>
    )
}

export default NavBar;