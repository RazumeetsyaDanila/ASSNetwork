import {NavLink} from "react-router-dom";
import './friends.css'

const Friends = () => {
    return (
        <div className="friends">
            <NavLink to="/users">
                <div className="navbar__navbar-item2">Найти друзей</div>
            </NavLink>
        </div>
    )
}

export default Friends;