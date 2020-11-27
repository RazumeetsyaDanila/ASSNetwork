import React from 'react';
import './profile.css';
import avatar from '../../../img/avatar(middle_s2).png';
import Post from './post/post'
import {addPostCreator, updateNewPostTextCreator} from "../../../bll/profile-reducer";


const Profile = (props) => {

    let postsComponentsArray = props.posts.map(p => <Post key={p.id} id={p.id} post={p.post}/>);

    let postRef = React.createRef();

    let addPostClick = () => {
        props.dispatch(addPostCreator());
    }

    let onPostChange = () => {
        let inpText = postRef.current.value;
        props.dispatch(updateNewPostTextCreator(inpText));
    }

    return (
        <div className="profile">
            <div className="profile__avatar">
                <img src={avatar} alt="Аватар"/>
            </div>

            <div className="profile__info">
                Описание профиля
            </div>

            <div className="profile__change-avatar">
                Загрузить аватар
            </div>

            <div className="profile__posts">
                {postsComponentsArray}
            </div>

            <div className="profile__input">
                <input ref={postRef} type="text" className="input__textarea" onChange={onPostChange}
                       value={props.newPostText} placeholder="Расскажите, что у Вас нового?"/>
                <button className="input__button" onClick={addPostClick}> Опубликовать</button>
            </div>
        </div>
    )
}

export default Profile;