import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/profile"><div className="navbar__navbar-item">Профиль</div></NavLink>
            <NavLink to="/friends"><div className="navbar__navbar-item">Друзья</div></NavLink>
            <NavLink to="/dialogs"><div className="navbar__navbar-item">Диалоги</div></NavLink>
            <NavLink to="/news"><div className="navbar__navbar-item">Новости</div></NavLink>
            <br/>
            <NavLink to="/settings"><div className="navbar__navbar-item">Настройки</div></NavLink>
            <a><div className="navbar__navbar-item">Выйти</div></a>
        </div>
    )
}

export default Navbar;