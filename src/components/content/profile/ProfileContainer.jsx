import React from 'react'
import Profile from "./profile";
import {connect} from "react-redux";
import {addPostCreator, updateNewPostTextCreator} from "../../../bll/profile-reducer";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostClick: () => dispatch(addPostCreator()),
        onPostChange: (inpText) => dispatch(updateNewPostTextCreator(inpText))
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;