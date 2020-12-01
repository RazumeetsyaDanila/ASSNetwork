import React from 'react';
import './Users.css';
import User from "./user/User";

const Users = (props) => {

    let usersComponentsArray = props.users.map(u => <User key={u.id} id={u.id} followed={u.followed}
                                                          username={u.username} avatar={u.avatar}
                                                          follow={props.follow} unfollow={props.unfollow}/>)

    return (
        <div className="users">
            {usersComponentsArray}
        </div>
    )
}

export default Users;