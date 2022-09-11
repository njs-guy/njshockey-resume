import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className="menu menu-horizontal bg-base-200 rounded-box grow-0 object-center self-center">
            <li><Link to="/">About</Link></li>
            <li><Link to="portfolio">Portfolio</Link></li>
            <li><Link to="resume">Résumé</Link></li>
          </ul>
    )
}

export default NavBar;