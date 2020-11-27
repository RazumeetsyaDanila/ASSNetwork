import './post.css';

const Post = (props) => {
    return (
        <div>
            <div className="profile__post_display"> {props.post} </div>
        </div>
    )
}

export default Post;