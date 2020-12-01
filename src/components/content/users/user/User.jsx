import './User.css';
import altAvatar from "../../../../img/avatar(min).png";

const User = (props) => {
    return (
        <div className="users__user">
            <img className="user__avatar" src={props.avatar ? props.avatar : altAvatar} alt="Аватар"/>
            <div className="user__username"> {props.username} </div>
            <div>
                {props.followed ?
                    <button className="user__follow-button"
                            onClick={() => props.unfollow(props.id)}> Отписаться </button> :
                    <button className="user__follow-button"
                            onClick={() => props.follow(props.id)}> Подписаться </button>}
            </div>
        </div>
    )
}

export default User;