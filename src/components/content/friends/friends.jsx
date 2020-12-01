import {NavLink} from "react-router-dom";
import './friends.css'

const Friends = () => {
    return (
        <div className="friends">
            <div>
                <NavLink to="/users" className="navbar__navbar-item2">Найти друзей</NavLink>
            </div>
        </div>
    )
}

export default Friends;