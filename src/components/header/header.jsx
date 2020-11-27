import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/"> <span className="header__header-item">Anti Social Social Network</span></NavLink>
        </div>
    )
}

export default Header;